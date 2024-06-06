import React from "react";
import "../features/feature.css";
function FeaturesList() {
  return (
    <section id="featureSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="row rowGap">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="fetBoxWrap">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="37"
                      viewBox="0 0 40 37"
                      fill="none"
                    >
                      <path
                        d="M40 15C40 10.405 36.2617 6.66667 31.6667 6.66667H28.3333V5C28.3333 2.24333 26.09 0 23.3333 0H20V3.33333H23.3333C24.2533 3.33333 25 4.08167 25 5V26.6667H3.33333V20H0V30H3.395C3.355 30.275 3.33333 30.5517 3.33333 30.8333C3.33333 34.05 5.95 36.6667 9.16667 36.6667C12.3833 36.6667 15 34.05 15 30.8333C15 30.5517 14.9783 30.275 14.9383 30H25.0617C25.0217 30.275 25 30.5517 25 30.8333C25 34.05 27.6167 36.6667 30.8333 36.6667C34.05 36.6667 36.6667 34.05 36.6667 30.8333C36.6667 30.5517 36.645 30.275 36.605 30H40V15ZM11.6667 30.8333C11.6667 32.2117 10.545 33.3333 9.16667 33.3333C7.78833 33.3333 6.66667 32.2117 6.66667 30.8333C6.66667 30.5183 6.72833 30.24 6.81833 30H11.5167C11.6067 30.24 11.6667 30.5183 11.6667 30.8333ZM31.6667 10C34.4233 10 36.6667 12.2433 36.6667 15V16.6667H28.3333V10H31.6667ZM33.3333 30.8333C33.3333 32.2117 32.2117 33.3333 30.8333 33.3333C29.455 33.3333 28.3333 32.2117 28.3333 30.8333C28.3333 30.5183 28.395 30.24 28.485 30H33.1833C33.2733 30.24 33.3333 30.5183 33.3333 30.8333ZM28.3333 26.6667V20H36.6667V26.6667H28.3333ZM16.6667 3.33333H0V0H16.6667V3.33333ZM13.3333 10H0V6.66667H13.3333V10ZM10 16.6667H0V13.3333H10V16.6667Z"
                        fill="#007078"
                      />
                    </svg>
                  </span>
                  <div className="fetContentBox">
                    <h5>FREE DELIVERY</h5>
                    <p>Free shipping on all order</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="fetBoxWrap">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M27.2647 16.3319C27.2647 17.0232 26.7236 17.5813 26.0533 17.5813H24.8257C24.6158 20.83 21.983 23.4122 18.7849 23.4122H17.3312L23.5901 28.6934C24.107 29.1265 24.1877 29.9179 23.7597 30.451C23.5174 30.7509 23.1702 30.9091 22.8229 30.9091C22.5564 30.9091 22.2818 30.8175 22.0557 30.6259L13.1721 23.129C12.7764 22.7958 12.6229 22.2377 12.8006 21.7379C12.9702 21.2381 13.4305 20.905 13.9393 20.905H18.7849C20.6505 20.905 22.193 19.4472 22.3949 17.573H13.9393C13.269 17.573 12.7279 17.0149 12.7279 16.3235C12.7279 15.6322 13.269 15.074 13.9393 15.074H21.8053C21.1512 14.0661 20.0448 13.4081 18.7849 13.4081H13.9393C13.269 13.4081 12.7279 12.85 12.7279 12.1586C12.7279 11.4672 13.269 10.9091 13.9393 10.9091H26.0533C26.7236 10.9091 27.2647 11.4672 27.2647 12.1586C27.2647 12.85 26.7236 13.4081 26.0533 13.4081H23.6305C23.9939 13.9079 24.2927 14.4743 24.5027 15.074H26.0614C26.7317 15.074 27.2727 15.6322 27.2727 16.3235L27.2647 16.3319Z"
                        fill="#007078"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="18.5"
                        stroke="#007078"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                  <div className="fetContentBox">
                    <h5>RETURNS</h5>
                    <p>Back guarantee under 7 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="fetBoxWrap">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="40"
                      viewBox="0 0 31 40"
                      fill="none"
                    >
                      <path
                        d="M9.63935 15.8332C9.63935 16.7516 9.84967 17.6216 10.2243 18.3949C9.41917 19.4416 8.91802 20.7399 8.85065 22.1549C7.30447 20.5083 6.35311 18.2816 6.35311 15.8349C6.35311 10.1499 11.4829 5.65654 17.2947 6.86654C20.7156 7.57988 23.4876 10.3749 24.2171 13.8399C24.4373 14.8866 24.4784 15.9116 24.3667 16.8916C24.2714 17.7216 23.5533 18.3349 22.7285 18.3349H22.6545C21.6818 18.3349 20.9983 17.4566 21.1051 16.4766C21.1774 15.8182 21.1396 15.1266 20.9736 14.4216C20.484 12.3332 18.8047 10.6416 16.7426 10.1599C12.9864 9.28489 9.63771 12.1716 9.63771 15.8349L9.63935 15.8332ZM3.2476 13.6749C3.69782 11.0199 4.97781 8.59988 6.9627 6.71154C9.47504 4.3232 12.7646 3.14319 16.2135 3.35986C22.7088 3.78653 27.7876 9.55822 27.7121 16.4682C27.6808 19.3616 25.2917 21.6649 22.4409 21.6649H18.4876C18.0866 20.2833 16.8412 19.2666 15.3492 19.2666C13.5336 19.2666 12.063 20.7583 12.063 22.5999C12.063 24.4416 13.5336 25.9333 15.3492 25.9333C16.2332 25.9333 17.0334 25.5749 17.6233 24.9983H22.4409C27.0729 24.9983 30.9326 21.2566 30.9983 16.5599C31.1199 7.85821 24.6756 0.574852 16.4254 0.0348496C12.0482 -0.253485 7.896 1.25485 4.71655 4.28153C2.25351 6.62321 0.615319 9.72322 0.0254378 13.0582C-0.153663 14.0716 0.63668 15.0016 1.65049 15.0016C2.42604 15.0016 3.1178 14.4532 3.2476 13.6766V13.6749ZM15.3903 28.3333C9.31894 28.3333 4.06588 32.1533 2.31924 37.8367C2.04812 38.715 2.53284 39.65 3.39877 39.925C4.26305 40.19 5.18484 39.7067 5.45596 38.83C6.0327 36.9517 7.18453 35.3483 8.66334 34.1216L10.9654 37.6233C11.5487 38.51 12.8319 38.51 13.4152 37.6233L15.4757 34.4866L17.5362 37.6233C18.1195 38.51 19.4028 38.51 19.9861 37.6233L22.2257 34.2166C23.6503 35.4317 24.7594 37 25.3213 38.83C25.5415 39.5433 26.1889 40 26.8905 40C27.0532 40 27.2158 39.975 27.3802 39.925C28.2461 39.65 28.7292 38.715 28.4597 37.8367C26.713 32.1533 21.46 28.3333 15.3886 28.3333H15.3903Z"
                        fill="#007078"
                      />
                    </svg>
                  </span>
                  <div className="fetContentBox">
                    <h5>SUPPORT 24/7</h5>
                    <p>Support online 24 hours a day</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="fetBoxWrap">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_227_208)">
                        <path
                          d="M18.3333 16.6667V18.3333C18.3333 19.2533 17.5867 20 16.6667 20H8.33333C7.41333 20 6.66667 19.2533 6.66667 18.3333V16.6667C6.66667 15.7467 7.41333 15 8.33333 15H16.6667C17.5867 15 18.3333 15.7467 18.3333 16.6667ZM40 10.8333V28.3333C40 28.9283 39.6833 29.48 39.1667 29.7767C38.6517 30.0733 38.0167 30.0733 37.5017 29.7767L33.885 27.6933L30.94 29.7083C30.6533 29.905 30.325 30 30.0017 30C29.47 30 28.9467 29.7467 28.625 29.2733C28.105 28.515 28.3 27.4783 29.06 26.9567L32.8683 24.35C33.3933 23.9883 34.0867 23.96 34.64 24.2817L36.6667 25.4483V10.8333C36.6667 6.69833 33.3017 3.33333 29.1667 3.33333C25.4183 3.33333 22.3383 6.04 21.7817 9.69167C23.7217 11.0483 25 13.2917 25 15.8333V32.5C25 36.635 21.635 40 17.5 40H7.5C3.365 40 0 36.635 0 32.5V15.8333C0 13.2383 1.325 10.95 3.33333 9.60333V8.33333C3.33333 3.73833 7.07167 0 11.6667 0H29.1667C35.14 0 40 4.86 40 10.8333ZM21.6667 15.8333C21.6667 13.535 19.7983 11.6667 17.5 11.6667H7.5C5.20167 11.6667 3.33333 13.535 3.33333 15.8333V32.5C3.33333 34.7983 5.20167 36.6667 7.5 36.6667H17.5C19.7983 36.6667 21.6667 34.7983 21.6667 32.5V15.8333ZM18.6067 8.445C19.045 6.47333 20.0017 4.72333 21.3317 3.33333H11.6667C8.91 3.33333 6.66667 5.57667 6.66667 8.33333V8.41833C6.94333 8.38667 7.215 8.33333 7.5 8.33333H17.5C17.8783 8.33333 18.2433 8.39 18.6067 8.445ZM16.6667 23.3333H15C14.0783 23.3333 13.3333 24.0783 13.3333 25C13.3333 25.9217 14.0783 26.6667 15 26.6667H16.6667C17.5883 26.6667 18.3333 25.9217 18.3333 25C18.3333 24.0783 17.5883 23.3333 16.6667 23.3333ZM16.6667 30H15C14.0783 30 13.3333 30.745 13.3333 31.6667C13.3333 32.5883 14.0783 33.3333 15 33.3333H16.6667C17.5883 33.3333 18.3333 32.5883 18.3333 31.6667C18.3333 30.745 17.5883 30 16.6667 30ZM10 23.3333H8.33333C7.41167 23.3333 6.66667 24.0783 6.66667 25C6.66667 25.9217 7.41167 26.6667 8.33333 26.6667H10C10.9217 26.6667 11.6667 25.9217 11.6667 25C11.6667 24.0783 10.9217 23.3333 10 23.3333ZM10 30H8.33333C7.41167 30 6.66667 30.745 6.66667 31.6667C6.66667 32.5883 7.41167 33.3333 8.33333 33.3333H10C10.9217 33.3333 11.6667 32.5883 11.6667 31.6667C11.6667 30.745 10.9217 30 10 30Z"
                          fill="#007078"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_227_208">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="fetContentBox">
                    <h5>PAYMENTS</h5>
                    <p>100% payment security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;
