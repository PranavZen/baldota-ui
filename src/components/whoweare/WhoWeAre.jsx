import React from "react";
import SectionTitle from "../commonProductSlider/SectionTitle";
import "../whoweare/whoweare.css";
import { right1, right2, rightBg } from "../../assets/imagesPath";
function WhoWeAre() {
  return (
    <section id="whoWeAreSection">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto ">
            <div className="row px-2">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="leftBox">
                  <p className="commonPara">Who we are?</p>
                  <SectionTitle title="About" spanTitle="Baldota" />
                  <div className="contentWrap">
                    <p className="commonPara">
                      A family run business that has been built on creative
                      energy and a long tradition of helping people and serving
                      many industries including Oil & Gas, Medical, Automotive,
                      and Mechanical. A business that has a rich heritage and a
                      team that has an experience of more than 2 decades in the
                      Industry.
                    </p>
                    <p className="commonPara">
                      Since our establishment, our product line has expanded to
                      cover almost any conceivable primary and secondary
                      instrumentation fitting and valve application for a
                      variety of process industries. We specialize in the
                      design, development, and manufacturing of high quality
                      precision turned parts and instrumentation product
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="rightBox">
                  <span className="topRight">
                    <img src={right1} alt="" />
                  </span>
                  <div className="topLeftMid ">
                    <div className="box">
                      <div className="smallBox">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_314_3035)">
                            <path
                              d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75"
                              stroke="#007078"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z"
                              stroke="#007078"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.25 15.75V14.25C17.2495 13.5853 17.0283 12.9396 16.621 12.4142C16.2138 11.8889 15.6436 11.5136 15 11.3475"
                              stroke="#007078"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 2.34747C12.6453 2.5127 13.2173 2.888 13.6257 3.41421C14.0342 3.94041 14.2559 4.5876 14.2559 5.25372C14.2559 5.91985 14.0342 6.56703 13.6257 7.09324C13.2173 7.61945 12.6453 7.99475 12 8.15997"
                              stroke="#007078"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_314_3035">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="contentBox">
                        <h6>Partners</h6>
                        <p>27k +</p>
                      </div>
                    </div>
                  </div>
                  <span className="bottomLeft">
                    <img src={right2} alt="" />
                  </span>
                  <span className="topLeft">
                    <img src={rightBg} alt="" />
                  </span>
                  <div className="bottomRightMid ">
                    <div className="box">
                      <div className="smallBox">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="22"
                          viewBox="0 0 24 22"
                          fill="none"
                        >
                          <path
                            d="M11.936 5.801L13.35 7.215L9.152 11.414C8.762 11.804 8.25 11.999 7.738 11.999C7.226 11.999 6.714 11.804 6.324 11.414L3.651 8.741L5.065 7.327L7.738 10L11.936 5.801ZM24 18H21.959C21.983 18.165 22 18.331 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5C15 18.331 15.017 18.165 15.041 18H8.959C8.983 18.165 9 18.331 9 18.5C9 20.43 7.43 22 5.5 22C3.57 22 2 20.43 2 18.5C2 18.331 2.017 18.165 2.041 18H0V3C0 1.346 1.346 0 3 0H14C15.654 0 17 1.346 17 3V4H19C21.757 4 24 6.243 24 9V18ZM17 6V10H22V9C22 7.346 20.654 6 19 6H17ZM6.907 18H4.093C4.039 18.144 4 18.31 4 18.5C4 19.327 4.673 20 5.5 20C6.327 20 7 19.327 7 18.5C7 18.31 6.961 18.144 6.907 18ZM15 3C15 2.449 14.552 2 14 2H3C2.448 2 2 2.449 2 3V16H15V3ZM19.907 18H17.093C17.039 18.144 17 18.31 17 18.5C17 19.327 17.673 20 18.5 20C19.327 20 20 19.327 20 18.5C20 18.31 19.961 18.144 19.907 18ZM22 16V12H17V16H22Z"
                            fill="#007078"
                          />
                        </svg>
                      </div>
                      <div className="contentBox">
                        <h6>LD301 TXRs Supplied</h6>
                        <p>8,551 + </p>
                      </div>
                    </div>
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

export default WhoWeAre;
