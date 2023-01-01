import React from "react";

import ss from "./Review.module.scss";

type ReviewProps = {};

export const Review: React.FC<ReviewProps> = () => {
  return (
    <section className="review" data-scroll-section>
      <div className="container">
        <div className="review__inner">
          <p className="review__pretitle">Portfolio 2022</p>
          <h1 className="review__title">Portfolio</h1>
          <div className="review__content">
            {/* <h2 className="review__content-title">Dmitriy Bozhko</h2>  */}
            <svg
              className="review__name"
              width="568.264"
              height="160.084"
              viewBox="0 0 568.264 160.084"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                font-size="9pt"
                stroke="#fff"
                stroke-width="0.25mm"
                fill="#fff"
              >
                <path
                  d="M 93.584 35.914 Q 102.959 46.168 105.717 59.669 A 65.118 65.118 0 0 1 107.055 72.736 A 64.4 64.4 0 0 1 105.546 86.549 A 72.233 72.233 0 0 1 95.334 111.426 A 69.407 69.407 0 0 1 93.779 113.697 A 80.461 80.461 0 0 1 72.978 133.888 A 91.392 91.392 0 0 1 46.294 146.119 A 92.189 92.189 0 0 1 21.532 149.504 A 94.119 94.119 0 0 1 16.923 149.391 Q 6.132 149.049 2.421 144.508 Q -0.76 140.614 0.24 135.213 A 17.472 17.472 0 0 1 0.688 133.375 Q 2.666 126.783 8.964 120.24 A 60.007 60.007 0 0 1 14.97 114.723 A 214.059 214.059 0 0 1 19.375 96.027 A 269.753 269.753 0 0 1 23.588 82.472 Q 29.375 65.406 38.042 49.732 A 122.393 122.393 0 0 1 49.853 32.033 A 102.55 102.55 0 0 1 58.086 22.975 A 18.693 18.693 0 0 0 56.852 22.841 A 20.491 20.491 0 0 0 56.67 22.828 A 51.615 51.615 0 0 0 52.71 22.675 A 49.094 49.094 0 0 0 33.476 26.588 A 45.418 45.418 0 0 0 16.85 38.893 A 36.597 36.597 0 0 0 8.232 57.496 A 21.565 21.565 0 0 0 8.087 59.976 A 20.086 20.086 0 0 0 10.087 68.727 A 3.763 3.763 0 0 1 10.241 69.19 Q 10.534 70.335 9.819 71.07 A 2.475 2.475 0 0 1 9.079 71.605 Q 8.498 71.872 7.793 71.785 A 3.034 3.034 0 0 1 7.744 71.778 Q 6.523 71.607 6.084 70.045 A 36.295 36.295 0 0 1 5.435 63.27 A 34.538 34.538 0 0 1 6.865 53.443 A 43.724 43.724 0 0 1 14.58 38.6 A 50.388 50.388 0 0 1 26.982 27.32 Q 34.355 22.731 42.851 20.826 A 54.65 54.65 0 0 1 54.529 19.563 A 56.076 56.076 0 0 1 61.455 19.996 A 56.282 56.282 0 0 1 73.05 12.279 A 52.395 52.395 0 0 1 74.321 11.671 A 43.156 43.156 0 0 1 88.603 7.838 A 40.729 40.729 0 0 1 91.19 7.755 A 40.266 40.266 0 0 1 99.248 8.57 A 2.778 2.778 0 0 1 100.089 8.915 A 2.384 2.384 0 0 1 100.81 9.62 Q 101.347 10.426 101.152 11.451 Q 100.908 12.477 100.078 13.014 Q 99.248 13.551 98.173 13.356 A 39.286 39.286 0 0 0 91.402 12.542 Q 86.318 12.388 81.547 13.673 Q 73.662 15.797 66.777 20.924 A 52.882 52.882 0 0 1 93.584 35.914 Z M 398.93 103.11 A 42.694 42.694 0 0 0 394.609 100.123 A 80.693 80.693 0 0 0 377.153 92.628 Q 367.998 89.918 358.476 88.893 A 60.512 60.512 0 0 0 354.277 88.649 Q 364.58 83.668 374.956 76.539 A 95.5 95.5 0 0 0 376.559 75.413 A 85.072 85.072 0 0 0 392.827 60.279 Q 400.322 51.149 401.933 40.211 A 37.135 37.135 0 0 0 402.204 35.738 A 37.782 37.782 0 0 0 401.836 30.494 Q 401.152 25.611 398.173 21.607 A 18.172 18.172 0 0 0 388.164 15.162 A 32.738 32.738 0 0 0 380.198 14.164 A 31.711 31.711 0 0 0 376.103 14.43 Q 374.785 14.625 373.466 14.918 A 624.2 624.2 0 0 1 379.228 3.492 A 4.733 4.733 0 0 0 379.296 3.314 Q 379.815 1.874 379.033 0.953 Q 378.203 -0.023 376.933 0.001 Q 376.021 0.019 375.36 0.755 A 3.704 3.704 0 0 0 374.882 1.441 A 5080.299 5080.299 0 0 1 368.486 16.139 A 63.045 63.045 0 0 0 344.292 30.323 Q 333.671 40.211 326.64 52.467 Q 317.412 68.482 314.36 86.573 A 145.608 145.608 0 0 0 312.32 110.835 A 146.307 146.307 0 0 0 312.822 122.926 A 248.267 248.267 0 0 0 313.847 133.863 A 124.54 124.54 0 0 1 306.944 132.384 A 104.192 104.192 0 0 1 292.998 127.955 A 56.785 56.785 0 0 1 282.402 122.096 A 2.361 2.361 0 0 0 282.322 122.046 Q 281.845 121.766 281.322 121.766 A 2.083 2.083 0 0 0 280.937 121.803 Q 280.156 121.949 279.716 122.633 Q 279.432 123.13 279.432 123.653 A 2.015 2.015 0 0 0 279.472 124.049 A 1.699 1.699 0 0 0 279.809 124.782 A 2.007 2.007 0 0 0 280.302 125.221 A 82.264 82.264 0 0 0 296.88 132.552 A 111.624 111.624 0 0 0 314.14 136.549 A 710.694 710.694 0 0 0 317.314 158.473 A 1.526 1.526 0 0 0 317.314 158.497 Q 317.316 158.581 317.326 158.656 A 0.907 0.907 0 0 0 317.363 158.815 A 1.639 1.639 0 0 0 317.369 158.953 Q 317.409 159.424 317.728 159.721 A 1.471 1.471 0 0 0 318.144 159.986 A 1.487 1.487 0 0 0 318.251 160.024 Q 318.683 160.16 319.096 159.986 A 1.18 1.18 0 0 0 319.493 159.718 A 1.268 1.268 0 0 0 319.755 159.303 A 86.004 86.004 0 0 0 323.271 147.389 A 114.232 114.232 0 0 1 324.101 143.824 A 1576.639 1576.639 0 0 1 325.566 137.916 Q 343.242 139.332 360.405 137.403 A 179.031 179.031 0 0 0 360.673 137.373 Q 377.671 135.437 390.8 130.641 A 46.931 46.931 0 0 0 395.01 128.639 Q 397.503 127.289 399.449 125.776 A 20.773 20.773 0 0 0 403.374 121.852 A 14.476 14.476 0 0 0 404.624 119.877 Q 406.192 116.868 405.836 113.682 A 11.969 11.969 0 0 0 405.229 111.061 A 11.662 11.662 0 0 0 404.869 110.155 Q 403.263 106.553 398.93 103.11 Z M 100.957 85.621 A 64.284 64.284 0 0 0 102.191 73.102 A 65.003 65.003 0 0 0 101.713 65.26 A 51.211 51.211 0 0 0 95.341 45.973 Q 90.068 37.184 81.596 31.52 Q 73.125 25.856 63.164 23.756 A 92.933 92.933 0 0 0 48.757 39.877 A 108.691 108.691 0 0 0 45.219 45.191 Q 37.382 57.74 31.914 70.875 A 264.952 264.952 0 0 0 27.605 81.873 Q 25.758 86.936 24.353 91.539 A 150.713 150.713 0 0 0 23.466 94.557 A 194.818 194.818 0 0 0 19.511 111.402 Q 30.156 104.322 42.705 101.783 A 56.946 56.946 0 0 1 54.125 100.623 A 57.673 57.673 0 0 1 61.504 101.1 A 57.293 57.293 0 0 1 67.754 102.32 A 2.292 2.292 0 0 1 68.45 102.638 A 1.967 1.967 0 0 1 69.047 103.297 A 2.124 2.124 0 0 1 69.33 104.361 Q 69.33 104.577 69.288 104.803 A 2.798 2.798 0 0 1 69.267 104.908 A 2.21 2.21 0 0 1 68.926 105.63 A 1.991 1.991 0 0 1 68.266 106.202 A 2.054 2.054 0 0 1 67.265 106.464 Q 66.956 106.464 66.63 106.373 A 50.003 50.003 0 0 0 60.918 105.055 A 55.664 55.664 0 0 0 52.424 104.397 A 54.928 54.928 0 0 0 38.969 106.08 A 61.788 61.788 0 0 0 18.877 115.162 Q 17.607 123.121 17.607 131.178 A 3.675 3.675 0 0 1 17.468 132.012 Q 17.309 132.545 16.979 132.903 A 2.022 2.022 0 0 1 16.313 133.375 Q 15.117 133.912 13.945 133.351 Q 12.773 132.789 12.724 131.08 A 125.52 125.52 0 0 1 13.435 124.344 A 161.538 161.538 0 0 1 14.287 118.678 A 56.575 56.575 0 0 0 10.722 121.949 A 36.513 36.513 0 0 0 4.326 130.006 A 22.559 22.559 0 0 0 2.875 133.036 Q 1.864 135.662 1.864 138.021 A 10.209 10.209 0 0 0 2.275 140.919 Q 3.44 144.876 8.605 146.602 A 21.06 21.06 0 0 0 11.015 147.242 A 64.461 64.461 0 0 0 21.02 148.024 A 65.203 65.203 0 0 0 26.054 147.828 A 85.941 85.941 0 0 0 51.738 142.115 A 81.582 81.582 0 0 0 83.72 120.216 A 72.068 72.068 0 0 0 100.957 85.621 Z M 346.757 92.115 L 346.709 92.066 A 2.712 2.712 0 0 1 346.55 92.164 Q 346.466 92.212 346.37 92.26 A 4.058 4.058 0 0 1 346.367 92.262 Q 346.154 92.302 345.952 92.302 A 1.875 1.875 0 0 1 344.951 92.018 A 1.822 1.822 0 0 1 344.121 90.895 A 2.222 2.222 0 0 1 344.057 90.554 Q 344.046 90.454 344.046 90.358 A 1.616 1.616 0 0 1 344.243 89.576 Q 344.56 88.99 345.195 88.697 Q 353.252 84.84 360.918 80.25 Q 368.339 75.856 376.372 69.825 A 77.339 77.339 0 0 0 390.434 56.251 A 36.428 36.428 0 0 0 396.939 44.125 A 34.663 34.663 0 0 0 397.978 39.723 A 39.696 39.696 0 0 0 398.282 36.809 Q 398.823 28.589 395.303 23.754 A 13.497 13.497 0 0 0 393.974 22.193 A 15.248 15.248 0 0 0 387.446 18.372 Q 383.27 17.103 377.603 17.465 A 43.887 43.887 0 0 0 376.445 17.555 Q 374.004 17.897 371.66 18.434 A 778.291 778.291 0 0 0 345.879 75.88 A 504.134 504.134 0 0 0 326.152 135.621 A 151.447 151.447 0 0 0 340.268 136.283 A 148.97 148.97 0 0 0 359.331 135.06 A 111.946 111.946 0 0 0 377.773 131.152 A 92.335 92.335 0 0 0 389.091 126.881 A 42.328 42.328 0 0 0 396.329 122.376 A 46.477 46.477 0 0 0 396.44 122.291 A 12.221 12.221 0 0 0 401.005 115.357 A 7.09 7.09 0 0 0 401.03 114.769 A 6.413 6.413 0 0 0 399.858 111.061 Q 398.515 109.107 396.806 107.545 A 48.786 48.786 0 0 0 391.48 103.532 Q 388.63 101.66 385.237 99.909 A 86.302 86.302 0 0 0 382.915 98.756 A 88.18 88.18 0 0 0 365.385 92.53 A 59.335 59.335 0 0 0 359.175 91.37 Q 353.923 90.69 349.409 91.206 A 32.284 32.284 0 0 0 349.15 91.236 L 348.076 91.529 A 53.082 53.082 0 0 0 346.917 92.042 A 48.327 48.327 0 0 0 346.757 92.115 Z M 328.984 53.785 Q 321.709 66.041 318.486 79.371 A 124.728 124.728 0 0 0 315.019 106.568 A 207.355 207.355 0 0 0 314.987 110.219 A 209.648 209.648 0 0 0 316.386 134.352 A 128.692 128.692 0 0 0 322.441 135.182 A 586.019 586.019 0 0 1 338.896 86.964 Q 348.173 63.209 358.183 39.772 Q 362.48 29.811 366.875 19.85 Q 354.619 24.293 345.048 33.473 Q 335.478 42.652 328.984 53.785 Z M 502.998 73.256 A 1.417 1.417 0 0 0 502.812 73.414 A 47.227 47.227 0 0 1 499.15 77.418 Q 495.244 81.324 490.507 84.059 A 11.083 11.083 0 0 1 488.717 84.944 Q 487.231 85.512 485.763 85.512 A 7.61 7.61 0 0 1 484.624 85.426 Q 481.718 84.986 480.742 81.617 A 10.261 10.261 0 0 1 480.582 79.822 Q 480.582 79.284 480.64 78.748 A 10.955 10.955 0 0 1 481.474 75.611 Q 482.744 72.633 484.843 70.24 A 3.198 3.198 0 0 0 484.907 70.136 Q 485.213 69.606 485.213 69.117 A 1.548 1.548 0 0 0 485.087 68.507 A 1.922 1.922 0 0 0 484.598 67.811 A 2.042 2.042 0 0 0 483.891 67.408 A 1.662 1.662 0 0 0 483.349 67.316 Q 482.759 67.316 482.158 67.75 A 156.6 156.6 0 0 0 475.566 72.877 A 67.799 67.799 0 0 0 468.828 79.127 Q 475.371 59.645 482.988 40.797 Q 483.14 40.378 483.14 40.014 A 1.485 1.485 0 0 0 482.768 39.015 A 2.09 2.09 0 0 0 482.097 38.489 A 2.141 2.141 0 0 0 481.206 38.282 A 1.805 1.805 0 0 0 481.159 38.282 Q 480.237 38.282 479.57 39.234 A 265.786 265.786 0 0 0 474.492 46.998 A 3.373 3.373 0 0 0 474.368 47.222 Q 473.949 48.06 474.272 48.707 A 2.035 2.035 0 0 0 475.42 49.732 A 426.295 426.295 0 0 0 463.945 85.475 A 15.909 15.909 0 0 0 463.88 85.581 Q 461.862 88.919 461.862 92.631 A 13.945 13.945 0 0 0 461.894 93.58 A 1.1 1.1 0 0 0 461.921 93.831 A 0.677 0.677 0 0 0 462.309 94.313 A 1.205 1.205 0 0 0 462.351 94.331 Q 462.619 94.445 462.897 94.407 A 1.171 1.171 0 0 0 463.164 94.337 A 0.891 0.891 0 0 0 463.622 93.942 A 1.3 1.3 0 0 0 463.75 93.629 A 2088.394 2088.394 0 0 0 466.484 85.865 Q 468.828 82.545 472.221 79.664 Q 475.615 76.783 479.13 74.391 Q 478.554 76.671 478.574 78.739 A 12.739 12.739 0 0 0 479.253 82.789 A 5.419 5.419 0 0 0 480.861 85.207 Q 482.549 86.645 485.625 86.793 Q 490.312 85.865 494.267 82.887 A 70.715 70.715 0 0 0 501.738 76.393 L 503.886 74.342 Q 504.17 74.058 504.17 73.787 A 0.539 0.539 0 0 0 504.13 73.585 A 0.938 0.938 0 0 0 504.122 73.565 Q 503.973 73.216 503.593 73.121 Q 503.296 73.047 502.998 73.256 Z M 509.306 47.877 L 513.847 39.43 A 2.927 2.927 0 0 1 514.256 38.882 A 1.779 1.779 0 0 1 515.483 38.307 Q 516.067 38.278 516.535 38.507 A 2.081 2.081 0 0 1 517.143 38.966 Q 517.781 39.651 517.39 40.726 A 3.234 3.234 0 0 1 517.363 40.797 A 377.072 377.072 0 0 0 504.033 78.102 A 43.889 43.889 0 0 1 508.232 73.463 A 131.6 131.6 0 0 1 511.784 70.28 A 120.002 120.002 0 0 1 512.285 69.85 A 429.429 429.429 0 0 1 513.615 68.691 A 386.847 386.847 0 0 1 513.798 68.531 A 2.783 2.783 0 0 1 514.251 68.202 Q 514.684 67.953 515.124 67.953 A 1.605 1.605 0 0 1 515.483 67.994 A 2.047 2.047 0 0 1 516.269 68.35 A 1.984 1.984 0 0 1 516.777 68.922 Q 517.216 69.654 516.777 70.631 Q 514.189 75.123 510.771 79.029 A 129.665 129.665 0 0 1 503.642 86.549 A 35.871 35.871 0 0 0 508.168 86.839 A 33.943 33.943 0 0 0 520.683 84.449 Q 528.886 81.227 534.55 73.414 A 1.119 1.119 0 0 1 534.752 73.223 A 0.818 0.818 0 0 1 535.112 73.072 A 0.827 0.827 0 0 1 535.238 73.063 Q 535.432 73.063 535.617 73.157 A 1.053 1.053 0 0 1 535.722 73.219 Q 536.199 73.609 535.656 74.576 A 4.796 4.796 0 0 1 535.503 74.83 A 12.395 12.395 0 0 1 534.791 75.815 Q 534.422 76.279 533.972 76.77 A 23.702 23.702 0 0 1 533.403 77.369 Q 532.06 78.736 530.791 79.884 A 123.25 123.25 0 0 1 530.238 80.38 Q 529.407 81.123 529.033 81.422 A 31.653 31.653 0 0 1 520.537 86.305 A 32.872 32.872 0 0 1 511.162 88.307 A 45.878 45.878 0 0 1 508.329 88.395 A 44.811 44.811 0 0 1 501.787 87.916 A 0.49 0.49 0 0 1 501.582 87.875 Q 501.482 87.829 501.406 87.734 A 0.598 0.598 0 0 1 501.396 87.721 A 44.466 44.466 0 0 0 500.468 89.918 A 143.056 143.056 0 0 1 499.443 93.434 A 1.125 1.125 0 0 1 499.278 93.844 A 1.052 1.052 0 0 1 498.93 94.166 A 1.493 1.493 0 0 1 498.536 94.331 Q 498.38 94.37 498.222 94.37 A 1.319 1.319 0 0 1 498.076 94.361 A 1.526 1.526 0 0 1 497.659 94.095 Q 497.234 93.705 497.292 93.025 A 2.075 2.075 0 0 1 497.295 92.994 A 6.648 6.648 0 0 1 497.529 91.808 A 8.6 8.6 0 0 1 497.832 90.943 A 11.047 11.047 0 0 0 498.024 90.348 Q 498.161 89.875 498.222 89.479 Q 498.369 88.893 498.564 88.307 A 508.479 508.479 0 0 1 509.843 50.27 A 1.642 1.642 0 0 1 509.332 49.816 A 1.583 1.583 0 0 1 509.087 49.293 A 1.532 1.532 0 0 1 509.035 48.893 Q 509.035 48.465 509.258 47.978 A 3.348 3.348 0 0 1 509.306 47.877 Z M 270.214 100.484 A 0.565 0.565 0 0 0 269.804 100.318 A 15.883 15.883 0 0 0 267.656 100.465 A 276.602 276.602 0 0 0 269.755 94.947 A 6.961 6.961 0 0 0 269.805 94.831 Q 270.215 93.838 271.21 90.721 A 304.909 304.909 0 0 0 271.733 89.064 A 121.498 121.498 0 0 0 272.816 85.397 A 144.019 144.019 0 0 0 274.467 78.858 A 69.706 69.706 0 0 0 274.564 78.43 Q 275.707 73.284 275.566 70.143 Q 275.433 67.162 273.151 68.397 A 6.213 6.213 0 0 0 272.685 68.678 A 1.509 1.509 0 0 0 272.188 69.212 A 1.676 1.676 0 0 0 272.002 69.801 A 6.634 6.634 0 0 1 271.605 71.125 A 8.628 8.628 0 0 1 270.903 72.462 A 35.852 35.852 0 0 1 269.072 75.074 Q 268.193 76.197 267.509 77.223 Q 265.996 79.371 264.091 81.764 Q 262.901 83.259 261.883 84.449 A 58.797 58.797 0 0 1 260.722 85.768 A 2.624 2.624 0 0 1 260.635 85.591 Q 260.118 84.437 260.503 82.423 Q 260.918 80.25 261.894 78.199 Q 262.871 76.149 263.945 75.318 A 6.849 6.849 0 0 0 264.162 75.107 Q 265.377 73.867 264.995 72.877 A 1.694 1.694 0 0 0 263.948 71.843 A 2.593 2.593 0 0 0 263.261 71.705 A 1.974 1.974 0 0 0 263.115 71.7 Q 262.199 71.7 261.378 72.563 A 5.471 5.471 0 0 0 260.82 73.268 Q 259.813 74.543 258.956 76.696 A 28.77 28.77 0 0 0 258.208 78.834 A 19.986 19.986 0 0 0 257.637 81.136 Q 257.378 82.55 257.378 83.856 A 12.201 12.201 0 0 0 257.5 85.597 A 4.97 4.97 0 0 0 257.655 86.313 Q 258.325 88.554 261.01 88.554 A 6.709 6.709 0 0 0 261.211 88.551 Q 262.382 87.965 263.164 86.793 A 5.032 5.032 0 0 0 263.701 86.158 Q 267.705 81.031 271.318 75.758 A 112.277 112.277 0 0 1 268.665 86.825 A 140.805 140.805 0 0 1 263.359 101.686 A 23.711 23.711 0 0 0 255.058 107.936 A 41.224 41.224 0 0 0 248.442 119.068 Q 245.976 125.221 247.099 131.373 Q 247.179 131.907 247.384 132.478 A 8.24 8.24 0 0 0 247.807 133.448 Q 248.369 134.547 249.248 134.913 Q 249.964 135.212 250.875 134.358 A 5.641 5.641 0 0 0 251.298 133.912 Q 260.771 118.434 267.168 101.686 A 16.675 16.675 0 0 1 269.707 101.49 A 0.635 0.635 0 0 0 269.928 101.451 A 0.696 0.696 0 0 0 270.146 101.319 A 0.705 0.705 0 0 0 270.173 101.295 A 0.525 0.525 0 0 0 270.341 100.904 Q 270.39 100.66 270.219 100.489 A 0.677 0.677 0 0 0 270.214 100.484 Z M 168.413 73.097 A 0.5 0.5 0 0 0 168.404 73.093 Q 168.14 72.979 167.851 73.219 A 22.701 22.701 0 0 1 163.457 76.637 A 29.984 29.984 0 0 1 157.426 79.322 A 20.246 20.246 0 0 1 151.209 80.301 A 20.509 20.509 0 0 1 150.908 80.299 A 3.529 3.529 0 0 1 149.024 79.54 A 5.033 5.033 0 0 1 148.125 78.614 A 19.162 19.162 0 0 1 146.123 75.367 A 38.626 38.626 0 0 1 145.708 74.659 A 29.961 29.961 0 0 1 145.341 74 A 8.431 8.431 0 0 0 145.309 73.935 Q 144.274 71.864 142.828 71.864 A 2.094 2.094 0 0 0 142.607 71.876 Q 140.996 72.047 139.336 73.609 A 40.54 40.54 0 0 0 135.478 77.613 A 58.336 58.336 0 0 1 133.525 79.762 A 23.157 23.157 0 0 1 133.193 77.586 Q 133.04 76.133 133.04 74.54 A 35.529 35.529 0 0 1 133.086 72.755 A 39.332 39.332 0 0 1 133.088 72.715 Q 133.285 68.862 134.16 66.627 A 3.536 3.536 0 0 0 134.169 66.55 Q 134.193 66.309 134.182 66.087 A 2.168 2.168 0 0 0 133.623 64.698 Q 132.939 63.941 131.962 63.917 A 1.901 1.901 0 0 0 131.915 63.916 Q 130.967 63.916 130.205 64.869 A 88.348 88.348 0 0 0 129.546 65.885 A 100.123 100.123 0 0 0 127.568 69.117 A 49.928 49.928 0 0 0 127.238 69.642 A 42.235 42.235 0 0 0 126.933 70.143 L 126.445 71.022 A 965.866 965.866 0 0 1 117.558 85.67 A 31.305 31.305 0 0 0 117.473 85.805 A 34.445 34.445 0 0 0 116.875 86.793 L 116.972 86.5 Q 117.705 84.938 118.193 83.375 A 40.336 40.336 0 0 0 118.291 83.103 A 45.356 45.356 0 0 0 118.584 82.252 A 283.827 283.827 0 0 0 118.935 81.303 A 258.276 258.276 0 0 0 121.22 74.83 Q 121.343 74.357 121.321 73.966 A 1.565 1.565 0 0 0 120.781 72.828 Q 120 72.145 118.974 72.291 A 1.557 1.557 0 0 0 118.296 72.553 Q 117.786 72.907 117.509 73.707 A 192.653 192.653 0 0 0 116.862 76.002 A 243.851 243.851 0 0 0 116.191 78.492 A 17.197 17.197 0 0 0 116.104 78.823 A 14.56 14.56 0 0 0 115.947 79.518 L 115.947 79.519 A 13.354 13.354 0 0 1 115.605 80.738 A 80.464 80.464 0 0 0 114.58 85.426 A 90.88 90.88 0 0 0 114.14 88.356 A 581.888 581.888 0 0 1 113.75 91.139 A 1.384 1.384 0 0 0 113.748 91.154 Q 113.739 91.265 113.75 91.365 A 0.829 0.829 0 0 0 114.091 91.969 A 1.018 1.018 0 0 0 114.143 92.005 Q 114.435 92.197 114.779 92.125 A 1.144 1.144 0 0 0 114.97 92.066 A 2.738 2.738 0 0 0 115.289 91.864 A 2.129 2.129 0 0 0 115.8 91.334 A 1.142 1.142 0 0 0 115.818 91.317 Q 115.907 91.224 115.996 91.09 Q 117.363 89.332 118.632 87.525 A 6.052 6.052 0 0 0 119.17 86.793 A 371.178 371.178 0 0 1 122.343 82.399 Q 125.908 77.32 129.668 72.389 Q 129.423 77.662 130.546 82.838 A 8.162 8.162 0 0 0 130.633 83.083 Q 130.996 84.069 131.492 84.575 A 1.645 1.645 0 0 0 132.597 85.108 A 1.9 1.9 0 0 0 132.703 85.111 Q 133.966 85.111 135.185 83.424 Q 136.65 81.568 137.92 79.664 A 49.152 49.152 0 0 1 139.433 77.565 A 16.771 16.771 0 0 0 139.58 77.366 A 18.875 18.875 0 0 0 140.019 76.734 A 10.537 10.537 0 0 1 140.515 76.033 A 8.753 8.753 0 0 1 142.851 73.902 A 1.759 1.759 0 0 1 143.176 74.001 Q 143.722 74.226 144.194 74.83 A 14.83 14.83 0 0 1 145.293 76.441 A 38.988 38.988 0 0 0 145.36 76.549 Q 145.46 76.708 145.552 76.85 A 22.241 22.241 0 0 0 145.732 77.125 A 11.319 11.319 0 0 0 148.613 80.592 A 3.964 3.964 0 0 0 150.761 81.324 A 14.001 14.001 0 0 0 151.344 81.337 A 13.224 13.224 0 0 0 153.056 81.227 A 29.124 29.124 0 0 0 168.632 74 A 0.862 0.862 0 0 0 168.664 73.967 Q 168.825 73.788 168.805 73.597 A 0.458 0.458 0 0 0 168.779 73.487 Q 168.681 73.219 168.413 73.097 Z M 229.874 59.446 A 3 3 0 0 0 229.375 59.01 A 11.496 11.496 0 0 0 227.725 58.178 Q 226.461 57.659 224.923 57.335 A 24.292 24.292 0 0 0 221.953 56.91 Q 219.368 56.693 216.578 56.725 A 68.684 68.684 0 0 0 212.016 56.935 A 177.245 177.245 0 0 0 209.399 57.159 A 153.878 153.878 0 0 0 201.933 58.033 Q 204.082 51.441 205.546 44.752 Q 205.595 43.434 204.692 43.019 A 2.2 2.2 0 0 0 203.764 42.811 Q 203.554 42.811 203.339 42.852 A 2.785 2.785 0 0 0 202.788 43.019 A 1.734 1.734 0 0 0 201.803 44.025 A 2.688 2.688 0 0 0 201.64 44.703 A 68.104 68.104 0 0 1 198.808 55.836 A 64.693 64.693 0 0 1 198.076 58.18 A 0.399 0.399 0 0 1 198.066 58.265 A 0.47 0.47 0 0 1 198.027 58.375 Q 197.991 58.446 197.982 58.491 A 0.146 0.146 0 0 0 197.978 58.522 A 237.911 237.911 0 0 1 196.574 58.705 A 180.622 180.622 0 0 1 195.293 58.863 A 134.127 134.127 0 0 0 184.16 61.012 A 0.61 0.61 0 0 0 183.976 61.092 A 0.729 0.729 0 0 0 183.818 61.232 A 1.052 1.052 0 0 0 183.755 61.313 A 0.857 0.857 0 0 0 183.623 61.598 A 0.943 0.943 0 0 0 183.63 61.716 Q 183.668 62.019 183.913 62.163 A 0.862 0.862 0 0 0 184.16 62.257 Q 184.445 62.322 184.772 62.352 A 6.578 6.578 0 0 0 185.38 62.379 A 5.822 5.822 0 0 1 185.896 62.4 Q 186.169 62.425 186.398 62.477 A 2.323 2.323 0 0 1 186.845 62.623 A 10.313 10.313 0 0 1 188.05 63.061 A 7.722 7.722 0 0 1 191.533 65.968 Q 193.095 68.385 193.584 71.559 L 192.998 73.219 A 353.727 353.727 0 0 0 184.599 99.586 A 2.056 2.056 0 0 0 184.571 99.741 Q 184.461 100.509 185.039 100.953 A 1.445 1.445 0 0 0 185.103 101 Q 185.594 101.336 186.197 101.135 A 2.025 2.025 0 0 0 186.504 101.002 A 13.897 13.897 0 0 0 189.604 96.827 A 40.507 40.507 0 0 0 191.582 91.969 A 51.569 51.569 0 0 0 192.314 89.918 A 45.545 45.545 0 0 0 193.701 84.79 A 58.167 58.167 0 0 0 194.707 77.906 A 122.976 122.976 0 0 0 195.634 75.416 Q 198.662 67.604 201.347 59.742 A 131.467 131.467 0 0 1 212.534 59.264 A 129.928 129.928 0 0 1 217.314 59.352 Q 218.144 59.449 219.023 59.498 A 21.451 21.451 0 0 1 223.491 60.157 A 5.663 5.663 0 0 1 226.884 62.525 A 3.763 3.763 0 0 0 227.133 62.691 Q 227.878 63.142 228.538 63.017 A 1.688 1.688 0 0 0 229.106 62.794 A 2.608 2.608 0 0 0 229.892 62.071 A 2.663 2.663 0 0 0 230.327 61.012 A 2.157 2.157 0 0 0 230.332 60.983 Q 230.481 60.122 229.874 59.446 Z M 456.898 97.367 A 0.554 0.554 0 0 0 456.816 97.34 Q 455.351 97.438 453.935 97.828 Q 455.009 94.606 454.594 91.651 A 8.055 8.055 0 0 0 453.405 88.44 A 10.439 10.439 0 0 0 451.64 86.354 Q 453.3 84.303 454.692 82.032 A 15.145 15.145 0 0 0 456.621 77.223 A 16.969 16.969 0 0 0 456.707 76.405 Q 456.965 73.218 455.815 71.266 Q 454.648 69.285 452.609 69.288 A 4.519 4.519 0 0 0 452.153 69.313 A 3.939 3.939 0 0 0 451.324 69.493 Q 449.312 70.156 447.05 73.024 A 0.824 0.824 0 0 0 447.011 73.076 Q 446.92 73.211 446.92 73.338 A 0.364 0.364 0 0 0 446.953 73.487 A 0.564 0.564 0 0 0 446.956 73.496 Q 447.015 73.622 447.123 73.69 A 0.504 0.504 0 0 0 447.295 73.756 A 0.538 0.538 0 0 0 447.301 73.757 Q 447.541 73.802 447.734 73.609 Q 448.271 73.024 448.955 72.486 Q 451.836 70.191 453.203 71.217 Q 454.447 72.15 454.357 74.903 A 13.151 13.151 0 0 1 454.326 75.465 A 9.107 9.107 0 0 1 452.592 79.859 A 31.118 31.118 0 0 1 452.046 80.578 A 27.556 27.556 0 0 1 449.541 83.375 A 21.903 21.903 0 0 0 448.551 84.396 Q 447.64 85.403 447.148 86.256 A 2.579 2.579 0 0 0 447.141 86.268 Q 446.553 87.301 447.324 88.172 A 3.032 3.032 0 0 0 447.734 88.551 A 8.169 8.169 0 0 1 448.33 89.048 Q 450.277 90.842 450.277 93.365 A 6.666 6.666 0 0 1 450.273 93.58 Q 450.175 96.607 448.32 100.123 Q 443.437 103.102 439.702 107.716 A 42.288 42.288 0 0 0 437.541 110.626 A 34.875 34.875 0 0 0 434.013 117.213 Q 433.945 117.511 433.994 117.701 A 0.405 0.405 0 0 0 434.257 117.994 A 1.319 1.319 0 0 0 434.491 118.057 Q 434.707 118.096 434.966 118.075 A 2.716 2.716 0 0 0 435.21 118.043 Q 435.561 117.982 435.845 117.921 A 9.771 9.771 0 0 0 436.162 117.848 Q 440.556 116.188 443.828 112.77 A 47.374 47.374 0 0 0 446.437 109.981 A 62.238 62.238 0 0 0 449.394 106.275 A 35.711 35.711 0 0 0 450.233 105.093 A 31.248 31.248 0 0 0 453.691 98.463 A 16.55 16.55 0 0 1 456.767 97.877 A 0.521 0.521 0 0 0 456.826 97.874 Q 456.97 97.857 457.011 97.755 A 0.496 0.496 0 0 0 457.019 97.735 Q 457.044 97.663 457.044 97.592 A 0.414 0.414 0 0 0 457.036 97.511 Q 457.017 97.417 456.898 97.367 Z M 225.566 75.367 A 1.519 1.519 0 0 0 226.025 75.586 A 2.114 2.114 0 0 0 226.421 75.66 A 10.801 10.801 0 0 0 227.09 75.702 A 13.101 13.101 0 0 0 227.519 75.709 A 6.705 6.705 0 0 1 227.826 75.692 Q 228.27 75.679 228.618 75.733 A 0.879 0.879 0 0 1 228.824 75.79 Q 229.092 75.903 229.13 76.193 A 0.684 0.684 0 0 1 229.13 76.197 Q 228.935 76.783 228.032 77.003 A 6.46 6.46 0 0 1 226.726 77.178 Q 226.6 77.183 226.472 77.183 A 7.754 7.754 0 0 1 226.103 77.174 A 7.974 7.974 0 0 1 225.505 77.124 Q 224.915 77.051 224.519 76.892 A 2.352 2.352 0 0 1 224.492 76.881 A 5.263 5.263 0 0 1 223.302 76.081 A 4.174 4.174 0 0 1 222.295 74.708 A 6.627 6.627 0 0 1 221.71 72.176 Q 221.705 72.035 221.705 71.892 A 8.021 8.021 0 0 1 221.709 71.656 Q 216.777 75.904 213.188 81.422 A 74.815 74.815 0 0 0 207.06 92.897 Q 206.914 93.287 206.547 93.482 A 0.806 0.806 0 0 1 206.163 93.58 Q 206.043 93.58 205.918 93.546 A 1.232 1.232 0 0 1 205.742 93.482 A 0.986 0.986 0 0 1 205.387 93.193 A 0.998 0.998 0 0 1 205.229 92.872 Q 205.107 92.457 205.107 92.018 A 3.385 3.385 0 0 0 205.086 91.627 Q 205.061 91.418 205.009 91.236 A 33.948 33.948 0 0 1 204.946 89.172 A 30.989 30.989 0 0 1 209.257 73.316 A 2.613 2.613 0 0 1 209.659 72.858 Q 210.142 72.429 210.742 72.429 A 1.759 1.759 0 0 1 210.918 72.438 Q 211.894 72.535 212.529 73.316 A 1.597 1.597 0 0 1 212.823 73.856 Q 213.005 74.448 212.675 75.172 A 31.691 31.691 0 0 0 210.625 80.348 A 45.19 45.19 0 0 1 223.564 65.455 A 2.445 2.445 0 0 1 224.013 65.216 Q 224.662 64.957 225.297 65.211 A 2.199 2.199 0 0 1 226.175 65.829 A 2.257 2.257 0 0 1 226.518 66.383 Q 226.868 67.176 226.305 68.013 A 2.889 2.889 0 0 1 226.25 68.092 A 11.976 11.976 0 0 0 225.27 69.931 A 16.287 16.287 0 0 0 224.589 71.852 Q 223.955 74.049 225.566 75.367 Z M 447.169 73.545 A 0.746 0.746 0 0 0 447.148 73.414 Q 447.05 73.219 446.855 73.121 A 0.51 0.51 0 0 0 446.809 73.101 Q 446.692 73.056 446.574 73.082 A 0.47 0.47 0 0 0 446.464 73.121 A 35.005 35.005 0 0 1 434.044 75.368 A 37.053 37.053 0 0 1 433.769 75.367 A 24.809 24.809 0 0 1 432.956 75.353 Q 431.974 75.32 430.601 75.216 A 110.675 110.675 0 0 1 429.179 75.099 A 22.211 22.211 0 0 1 426.991 74.798 A 17.74 17.74 0 0 1 423.711 73.854 A 11.125 11.125 0 0 0 423.415 72.496 A 8.716 8.716 0 0 0 421.611 69.117 A 1.841 1.841 0 0 0 421.521 69.075 Q 420.898 68.805 420.488 69.215 A 2.193 2.193 0 0 0 420.438 69.161 Q 419.748 68.44 418.701 68.693 A 3.147 3.147 0 0 0 418.291 68.824 A 14.168 14.168 0 0 0 413.359 72.877 A 19.692 19.692 0 0 0 413.257 73.017 Q 409.462 78.284 410.185 84.645 A 10.484 10.484 0 0 0 410.35 85.36 Q 410.604 86.308 411.009 87.035 A 4.374 4.374 0 0 0 413.31 89.088 A 4.307 4.307 0 0 0 414.852 89.372 Q 416.649 89.372 418.681 87.916 A 10.273 10.273 0 0 0 421.251 85.168 A 14.438 14.438 0 0 0 422.563 82.594 A 18.163 18.163 0 0 0 423.863 75.853 A 18.468 18.468 0 0 0 423.857 75.367 A 20.631 20.631 0 0 0 424.004 75.413 A 22.095 22.095 0 0 0 428.789 76.295 Q 430.406 76.417 431.756 76.482 A 68.458 68.458 0 0 0 433.281 76.539 L 433.769 76.539 Q 438.798 76.49 443.681 75.221 A 3.42 3.42 0 0 1 443.839 75.158 Q 444.069 75.073 444.414 74.974 A 17.588 17.588 0 0 1 444.755 74.879 A 10.395 10.395 0 0 0 445.099 74.801 A 9.159 9.159 0 0 0 446.489 74.342 A 1.981 1.981 0 0 0 446.761 74.203 Q 447.195 73.933 447.169 73.545 Z M 568.263 73.545 A 0.746 0.746 0 0 0 568.242 73.414 Q 568.144 73.219 567.949 73.121 A 0.51 0.51 0 0 0 567.903 73.101 Q 567.786 73.056 567.668 73.082 A 0.47 0.47 0 0 0 567.558 73.121 A 35.005 35.005 0 0 1 555.137 75.368 A 37.053 37.053 0 0 1 554.863 75.367 A 24.809 24.809 0 0 1 554.05 75.353 Q 553.067 75.32 551.695 75.216 A 110.675 110.675 0 0 1 550.273 75.099 A 22.211 22.211 0 0 1 548.085 74.798 A 17.74 17.74 0 0 1 544.804 73.854 A 11.125 11.125 0 0 0 544.508 72.496 A 8.716 8.716 0 0 0 542.705 69.117 A 1.841 1.841 0 0 0 542.615 69.075 Q 541.992 68.805 541.582 69.215 A 2.193 2.193 0 0 0 541.532 69.161 Q 540.842 68.44 539.794 68.693 A 3.147 3.147 0 0 0 539.384 68.824 A 14.168 14.168 0 0 0 534.453 72.877 A 19.692 19.692 0 0 0 534.351 73.017 Q 530.556 78.284 531.279 84.645 A 10.484 10.484 0 0 0 531.443 85.36 Q 531.698 86.308 532.103 87.035 A 4.374 4.374 0 0 0 534.404 89.088 A 4.307 4.307 0 0 0 535.946 89.372 Q 537.743 89.372 539.775 87.916 A 10.273 10.273 0 0 0 542.345 85.168 A 14.438 14.438 0 0 0 543.657 82.594 A 18.163 18.163 0 0 0 544.957 75.853 A 18.468 18.468 0 0 0 544.951 75.367 A 20.631 20.631 0 0 0 545.097 75.413 A 22.095 22.095 0 0 0 549.882 76.295 Q 551.5 76.417 552.85 76.482 A 68.458 68.458 0 0 0 554.375 76.539 L 554.863 76.539 Q 559.892 76.49 564.775 75.221 A 3.42 3.42 0 0 1 564.933 75.158 Q 565.162 75.073 565.507 74.974 A 17.588 17.588 0 0 1 565.849 74.879 A 10.395 10.395 0 0 0 566.193 74.801 A 9.159 9.159 0 0 0 567.583 74.342 A 1.981 1.981 0 0 0 567.855 74.203 Q 568.289 73.933 568.263 73.545 Z M 193.144 73.219 Q 194.365 73.072 193.999 73.732 A 2.674 2.674 0 0 1 193.753 74.09 Q 193.301 74.659 192.31 75.477 A 22.25 22.25 0 0 1 192.265 75.514 A 62.733 62.733 0 0 1 190.451 76.946 A 76.799 76.799 0 0 1 189.262 77.833 A 79.647 79.647 0 0 1 187.892 78.814 Q 187.05 79.403 186.308 79.884 Q 184.99 80.738 184.697 80.885 Q 181.035 83.18 177.177 85.157 Q 173.32 87.135 169.072 88.258 A 9.084 9.084 0 0 1 168.275 88.457 Q 165.448 89.021 164.287 87.086 A 6.616 6.616 0 0 1 163.374 84.151 Q 163.308 83.299 163.423 82.362 A 11.054 11.054 0 0 1 163.505 81.813 A 18.334 18.334 0 0 1 166.875 73.024 Q 167.681 72.122 168.65 72.35 A 1.897 1.897 0 0 1 168.706 72.364 A 2.358 2.358 0 0 1 169.692 72.887 A 2.404 2.404 0 0 1 170.195 73.536 A 1.602 1.602 0 0 1 170.371 74.042 Q 170.482 74.722 169.951 75.465 A 23.045 23.045 0 0 0 167.542 79.874 A 25.93 25.93 0 0 0 167.265 80.567 A 11.744 11.744 0 0 0 166.527 83.648 Q 166.477 84.161 166.477 84.672 A 10.68 10.68 0 0 0 166.582 86.158 A 2.594 2.594 0 0 0 168.099 86.856 Q 168.537 86.91 169.042 86.85 A 5.392 5.392 0 0 0 169.414 86.793 A 16.647 16.647 0 0 0 172.832 85.768 A 17.257 17.257 0 0 1 173.39 85.569 Q 173.667 85.476 173.913 85.405 A 8.755 8.755 0 0 1 174.199 85.328 A 70.735 70.735 0 0 0 184.282 80.201 Q 189.14 77.223 193.144 73.219 Z M 261.259 73.219 Q 262.48 73.072 262.114 73.732 A 2.674 2.674 0 0 1 261.868 74.09 Q 261.416 74.659 260.426 75.477 A 22.25 22.25 0 0 1 260.38 75.514 A 62.733 62.733 0 0 1 258.567 76.946 A 76.799 76.799 0 0 1 257.378 77.833 A 79.647 79.647 0 0 1 256.007 78.814 Q 255.165 79.403 254.423 79.884 Q 253.105 80.738 252.812 80.885 Q 249.15 83.18 245.293 85.157 Q 241.435 87.135 237.187 88.258 A 9.084 9.084 0 0 1 236.39 88.457 Q 233.563 89.021 232.402 87.086 A 6.616 6.616 0 0 1 231.489 84.151 Q 231.423 83.299 231.539 82.362 A 11.054 11.054 0 0 1 231.621 81.813 A 18.334 18.334 0 0 1 234.99 73.024 Q 235.797 72.122 236.765 72.35 A 1.897 1.897 0 0 1 236.821 72.364 A 2.358 2.358 0 0 1 237.807 72.887 A 2.404 2.404 0 0 1 238.31 73.536 A 1.602 1.602 0 0 1 238.486 74.042 Q 238.597 74.722 238.066 75.465 A 23.045 23.045 0 0 0 235.657 79.874 A 25.93 25.93 0 0 0 235.38 80.567 A 11.744 11.744 0 0 0 234.642 83.648 Q 234.593 84.161 234.593 84.672 A 10.68 10.68 0 0 0 234.697 86.158 A 2.594 2.594 0 0 0 236.214 86.856 Q 236.652 86.91 237.157 86.85 A 5.392 5.392 0 0 0 237.529 86.793 A 16.647 16.647 0 0 0 240.947 85.768 A 17.257 17.257 0 0 1 241.505 85.569 Q 241.782 85.476 242.029 85.405 A 8.755 8.755 0 0 1 242.314 85.328 A 70.735 70.735 0 0 0 252.397 80.201 Q 257.255 77.223 261.259 73.219 Z M 249.15 130.152 A 208.556 208.556 0 0 0 257.415 114.838 A 262.613 262.613 0 0 0 262.773 103.15 A 24.545 24.545 0 0 0 252.861 113.111 A 32.801 32.801 0 0 0 249.101 123.121 A 4.401 4.401 0 0 0 249.065 123.28 Q 249.049 123.353 249.034 123.435 A 9.392 9.392 0 0 0 249.004 123.609 A 24.774 24.774 0 0 0 248.807 125.074 Q 248.725 125.845 248.675 126.706 A 41.325 41.325 0 0 0 248.662 126.954 A 10.135 10.135 0 0 0 248.648 127.48 Q 248.648 128.968 249.115 130.072 A 4.918 4.918 0 0 0 249.15 130.152 Z M 415.019 87.135 A 7.913 7.913 0 0 0 420.218 83.23 A 10.976 10.976 0 0 0 420.61 82.496 Q 422.441 78.736 422.099 74.586 A 5.159 5.159 0 0 1 420.918 73.713 A 4.202 4.202 0 0 1 420 72.34 A 11.197 11.197 0 0 0 415.629 76.319 A 14.589 14.589 0 0 0 413.505 81.861 A 1.605 1.605 0 0 1 413.457 82.252 A 12.897 12.897 0 0 0 413.389 83.58 A 14.272 14.272 0 0 0 413.481 85.182 A 2.725 2.725 0 0 0 413.703 86.018 Q 414.05 86.775 414.889 87.09 A 2.852 2.852 0 0 0 415.019 87.135 Z M 536.113 87.135 A 7.913 7.913 0 0 0 541.312 83.23 A 10.976 10.976 0 0 0 541.704 82.496 Q 543.535 78.736 543.193 74.586 A 5.159 5.159 0 0 1 542.012 73.713 A 4.202 4.202 0 0 1 541.093 72.34 A 11.197 11.197 0 0 0 536.723 76.319 A 14.589 14.589 0 0 0 534.599 81.861 A 1.605 1.605 0 0 1 534.55 82.252 A 12.897 12.897 0 0 0 534.483 83.58 A 14.272 14.272 0 0 0 534.575 85.182 A 2.725 2.725 0 0 0 534.796 86.018 Q 535.144 86.775 535.983 87.09 A 2.852 2.852 0 0 0 536.113 87.135 Z M 436.406 115.016 A 57.784 57.784 0 0 0 438.797 112.66 Q 440.388 111.004 442.119 108.985 Q 445.195 105.397 447.539 101.539 A 35.248 35.248 0 0 0 436.406 115.016 Z M 194.17 69.801 A 375.396 375.396 0 0 0 197.441 60.133 A 150.243 150.243 0 0 0 187.48 61.647 A 10.453 10.453 0 0 1 190.177 63.093 A 8.995 8.995 0 0 1 191.899 64.796 A 12.122 12.122 0 0 1 193.896 68.747 A 14.546 14.546 0 0 1 194.17 69.801 Z M 321.806 137.574 A 142.257 142.257 0 0 0 320.341 142.897 A 7.193 7.193 0 0 0 320.097 143.678 A 164.538 164.538 0 0 0 318.584 150.074 Q 317.509 143.58 316.728 136.94 A 216.211 216.211 0 0 0 321.806 137.574 Z M 188.554 95.533 A 23.632 23.632 0 0 0 190.728 91.363 A 29.208 29.208 0 0 0 191.606 88.868 A 57.756 57.756 0 0 0 192.799 84.295 A 47.256 47.256 0 0 0 193.291 81.666 A 240.017 240.017 0 0 0 188.554 95.533 Z M 508.72 77.613 A 36.496 36.496 0 0 0 502.861 84.986 Q 503.886 83.766 504.961 82.496 A 80.754 80.754 0 0 0 508.72 77.613 Z M 168.071 66.774 A 1.465 1.465 0 0 0 168.602 67.88 Q 169.07 68.266 169.951 68.385 A 2.113 2.113 0 0 0 170.966 68.069 A 2.638 2.638 0 0 0 171.562 67.555 A 3.744 3.744 0 0 0 171.705 67.382 A 3.012 3.012 0 0 0 172.343 65.821 A 1.835 1.835 0 0 0 172.353 65.634 Q 172.353 65.078 171.996 64.637 A 2.247 2.247 0 0 0 171.562 64.234 Q 170.097 63.356 169.047 64.381 A 3.967 3.967 0 0 0 168.858 64.579 Q 168.005 65.536 168.071 66.774 Z M 236.186 66.774 A 1.465 1.465 0 0 0 236.717 67.88 Q 237.186 68.266 238.066 68.385 A 2.113 2.113 0 0 0 239.082 68.069 A 2.638 2.638 0 0 0 239.677 67.555 A 3.744 3.744 0 0 0 239.82 67.382 A 3.012 3.012 0 0 0 240.459 65.821 A 1.835 1.835 0 0 0 240.468 65.634 Q 240.468 65.078 240.111 64.637 A 2.247 2.247 0 0 0 239.677 64.234 Q 238.212 63.356 237.163 64.381 A 3.967 3.967 0 0 0 236.973 64.579 Q 236.12 65.536 236.186 66.774 Z M 421.709 72.535 A 7.139 7.139 0 0 0 421.269 71.119 A 2.431 2.431 0 0 0 421.709 72.535 Z M 542.802 72.535 A 7.139 7.139 0 0 0 542.363 71.119 A 2.431 2.431 0 0 0 542.802 72.535 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </svg>
            <p className="review__content-text">
              Даннное портфолио представляет лишь малую часть моих возможностей,
              которые растут с каждым днем{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
