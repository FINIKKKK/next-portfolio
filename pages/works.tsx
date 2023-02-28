import { NextPage } from "next";
import React from "react";
import * as THREE from "three";
import { TweenLite } from "gsap";
import imagesLoaded from "imagesloaded";

interface WorksPageProps {}

const WorksPage: NextPage<WorksPageProps> = ({}) => {
  React.useEffect(() => {
    // @ts-ignore
    document.body.style.backgroundColor = red;
    // @ts-ignore
    const displacementSlider = function (opts) {
      let vertex = `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
      `;

      let fragment = `
          
          varying vec2 vUv;
  
          uniform sampler2D currentImage;
          uniform sampler2D nextImage;
  
          uniform float dispFactor;
  
          void main() {
  
              vec2 uv = vUv;
              vec4 _currentImage;
              vec4 _nextImage;
              float intensity = 0.3;
  
              vec4 orig1 = texture2D(currentImage, uv);
              vec4 orig2 = texture2D(nextImage, uv);
              
              _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
  
              _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
  
              vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
  
              gl_FragColor = finalTexture;
  
          }
      `;

      let images = opts.images,
        image,
        // @ts-ignore
        sliderImages = [];
      let canvasWidth = 900;
      let canvasHeight = 500;
      let parent = opts.parent;
      let renderWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      let renderHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
// @ts-ignore
      let renderW, renderH;

      // if (renderWidth > canvasWidth) {
      //   renderW = renderWidth;
      // } else {
      //   renderW = canvasWidth;
      // }
      renderW = canvasWidth;
      renderH = canvasHeight;

      let renderer = new THREE.WebGLRenderer({
        antialias: false,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x23272a, 1.0);
      renderer.setSize(renderW, renderH);
      parent.appendChild(renderer.domElement);

      let loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";
// @ts-ignore
      images.forEach((img) => {
        image = loader.load(img.getAttribute("src") + "?v=" + Date.now());
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push(image);
      });

      let scene = new THREE.Scene();
      scene.background = new THREE.Color(0x23272a);
      let camera = new THREE.OrthographicCamera(
        renderWidth / -2,
        renderWidth / 2,
        renderHeight / 2,
        renderHeight / -2,
        1,
        1000
      );

      camera.position.z = 1;

      let mat = new THREE.ShaderMaterial({
        
        uniforms: {
          // @ts-ignore
          dispFactor: { type: "f", value: 0.0 },
          // @ts-ignore
          currentImage: { type: "t", value: sliderImages[0] },
          // @ts-ignore
          nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
      });
      // @ts-ignore
      let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
      );
      let object = new THREE.Mesh(geometry, mat);
      object.position.set(0, 0, 0);
      scene.add(object);

      let addEvents = function () {
        let pagButtons = Array.from(
          // @ts-ignore
          document.getElementById("pagination").querySelectorAll("button")
        );
        let isAnimating = false;

        pagButtons.forEach((el) => {
          el.addEventListener("click", function () {
            if (!isAnimating) {
              isAnimating = true;
// @ts-ignore
              document
                .getElementById("pagination")
                .querySelectorAll(".active")[0].className = "";
              this.className = "active";
// @ts-ignore
              let slideId = parseInt(this.dataset.slide, 10);
// @ts-ignore
              mat.uniforms.nextImage.value = sliderImages[slideId];
              // @ts-ignore
              mat.uniforms.nextImage.needsUpdate = true;

              TweenLite.to(mat.uniforms.dispFactor, 1, {
                value: 1,
                ease: "Expo.easeInOut",
                onComplete: function () {
                  // @ts-ignore
                  mat.uniforms.currentImage.value = sliderImages[slideId];
                  // @ts-ignore
                  mat.uniforms.currentImage.needsUpdate = true;
                  mat.uniforms.dispFactor.value = 0.0;
                  isAnimating = false;
                },
              });

              let slideTitleEl = document.getElementById("slide-title");
              let slideStatusEl = document.getElementById("slide-status");
              let nextSlideTitle = document.querySelectorAll(
                `[data-slide-title="${slideId}"]`
              )[0].innerHTML;
              let nextSlideStatus = document.querySelectorAll(
                `[data-slide-status="${slideId}"]`
              )[0].innerHTML;

              TweenLite.fromTo(
                slideTitleEl,
                0.5,
                {
                  autoAlpha: 1,
                  y: 0,
                },
                {
                  autoAlpha: 0,
                  y: 20,
                  ease: "Expo.easeIn",
                  onComplete: function () {
                    // @ts-ignore
                    slideTitleEl.innerHTML = nextSlideTitle;

                    TweenLite.to(slideTitleEl, 0.5, {
                      autoAlpha: 1,
                      y: 0,
                    });
                  },
                }
              );

              TweenLite.fromTo(
                slideStatusEl,
                0.5,
                {
                  autoAlpha: 1,
                  y: 0,
                },
                {
                  autoAlpha: 0,
                  y: 20,
                  ease: "Expo.easeIn",
                  onComplete: function () {
                    // @ts-ignore
                    slideStatusEl.innerHTML = nextSlideStatus;

                    TweenLite.to(slideStatusEl, 0.5, {
                      autoAlpha: 1,
                      y: 0,
                      delay: 0.1,
                    });
                  },
                }
              );
            }
          });
        });
      };

      addEvents();

      window.addEventListener("resize", function (e) {
        // @ts-ignore
        renderer.setSize(renderW, renderH);
      });

      let animate = function () {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      };
      animate();
    };

    imagesLoaded(document.querySelectorAll("img"), () => {
      // document.body.classList.remove("loading");

      const el = document.getElementById("slider");
      // @ts-ignore
      const imgs = Array.from(el.querySelectorAll("img"));
      // @ts-ignore
      new displacementSlider({
        parent: el,
        images: imgs,
      });
    });
  }, []);

  return (
    <main>
      <div id="slider">
        <div className="slider-inner">
          <div id="slider-content">
            <div className="meta">Species</div>
            <h2 id="slide-title">
              Amur <br />
              Leopard
            </h2>
            <span data-slide-title="0">
              Amur <br />
              Leopard
            </span>
            <span data-slide-title="1">
              Asiatic <br />
              Lion
            </span>
            <span data-slide-title="2">
              Siberian <br />
              Tiger
            </span>
            <span data-slide-title="3">
              Brown <br />
              Bear
            </span>
            <div className="meta">Status</div>
            <div id="slide-status">Critically Endangered</div>
            <div className="statuses">
              <span data-slide-status="0">Critically Endangered</span>
              <span data-slide-status="1">Endangered</span>
              <span data-slide-status="2">Endangered</span>
              <span data-slide-status="3">Least Concern</span>
            </div>
          </div>
        </div>

        <div className="images">
          <img src="./assets/img/project1.jpg" />
          <img src="./assets/img/about__img1.jpg" />
          <img src="./assets/img/project1.jpg" />
          <img src="./assets/img/about__img2.jpg" />
        </div>

        <div id="pagination">
          <button className="active" data-slide="0"></button>
          <button data-slide="1"></button>
          <button data-slide="2"></button>
          <button data-slide="3"></button>
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
