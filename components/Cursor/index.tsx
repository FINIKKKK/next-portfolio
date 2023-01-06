import React from "react";

import ss from "./Cursor.module.scss";

type CursorProps = {};

export const Cursor: React.FC<CursorProps> = () => {
  const refCursor = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $outline: refCursor.current,

      init: function () {
        // Set up element sizes
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll(".img").forEach(function (el) {
          el.addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            document.querySelector(".cursor")?.classList.add("active");
          });
          el.addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            document.querySelector(".cursor")?.classList.remove("active");
          });
        });

        document.addEventListener("mousemove", function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$outline.style.opacity = 1;
        } else {
          self.$outline.style.opacity = 0;
        }
      },
    };
    cursor.init();
  }, []);

  return (
    <div ref={refCursor} className={ss.cursor}>
      <div>
        <span>Смотреть</span>
      </div>
    </div>
  );
};
