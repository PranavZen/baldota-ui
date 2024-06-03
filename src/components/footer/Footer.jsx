import React from "react";
import "../footer/footer.css";
import RoundBtn from "../cta/RoundBtn";
import { fooLogo } from "../../assets/imagesPath";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footerSection">
      <div className="topSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="footerTopWrap">
                <div className="col-md-5">
                  <div className="leftTopWrap">
                    <h6>Contact us now and give your project a boost</h6>
                    <p>We are process instrumentation engineers</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <RoundBtn
                    rBtnLink="#"
                    rBtnName="Contact Us"
                    color="#fff"
                    fill="#fff"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="midSec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-5">
                  <div className="wrap">
                    <div className="foologoWrap">
                      <Link to="">
                        <img
                          src={fooLogo}
                          alt="Baldota Logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <p className="commonPara">
                      Baldota Instruments and Fittings LLP is a family run
                      business that has been built on creative energy and a long
                      tradition of helping people and serving many industries
                      including Oil & Gas, Medical, Automotive, and Mechanical.
                    </p>
                    <ul className="socialLinksWrap">
                      <li>
                        <Link to="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle cx="12" cy="12" r="11.5" stroke="#FFA700" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.54309 7.46877C6.54309 7.22388 6.63702 6.98902 6.80421 6.81586C6.9714 6.64269 7.19816 6.54541 7.43461 6.54541H16.3216C16.4388 6.54521 16.5549 6.56895 16.6632 6.61527C16.7715 6.66159 16.8699 6.72959 16.9528 6.81535C17.0357 6.90112 17.1015 7.00298 17.1463 7.1151C17.1911 7.22723 17.2142 7.34741 17.2141 7.46877V16.6732C17.2142 16.7946 17.1913 16.9148 17.1465 17.027C17.1017 17.1391 17.036 17.2411 16.9532 17.3269C16.8703 17.4128 16.7719 17.4809 16.6637 17.5273C16.5554 17.5737 16.4393 17.5976 16.3221 17.5975H7.43461C7.31749 17.5975 7.20152 17.5736 7.09333 17.5272C6.98513 17.4808 6.88683 17.4127 6.80404 17.3269C6.72125 17.2411 6.65559 17.1393 6.61081 17.0272C6.56604 16.9151 6.54303 16.795 6.54309 16.6737V7.46877ZM10.7669 10.7593H12.2118V11.5108C12.4204 11.0788 12.954 10.69 13.7557 10.69C15.2928 10.69 15.6571 11.5505 15.6571 13.1295V16.0543H14.1016V13.4892C14.1016 12.5899 13.893 12.0825 13.3633 12.0825C12.6285 12.0825 12.3229 12.6296 12.3229 13.4892V16.0543H10.7669V10.7593ZM8.09912 15.9854H9.65515V10.69H8.09912V15.9849V15.9854ZM9.87779 8.96281C9.88072 9.1008 9.85701 9.23801 9.80806 9.36638C9.7591 9.49474 9.68588 9.61169 9.59269 9.71036C9.49951 9.80902 9.38823 9.88741 9.26539 9.94093C9.14256 9.99445 9.01064 10.022 8.87738 10.022C8.74412 10.022 8.6122 9.99445 8.48936 9.94093C8.36653 9.88741 8.25525 9.80902 8.16206 9.71036C8.06888 9.61169 7.99566 9.49474 7.9467 9.36638C7.89774 9.23801 7.87404 9.1008 7.87697 8.96281C7.88273 8.69196 7.99066 8.43422 8.17764 8.24477C8.36463 8.05532 8.6158 7.94924 8.87738 7.94924C9.13895 7.94924 9.39013 8.05532 9.57711 8.24477C9.7641 8.43422 9.87203 8.69196 9.87779 8.96281Z"
                              fill="#FFA700"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <circle
                              cx="12.6274"
                              cy="12"
                              r="11.5"
                              stroke="#FFA700"
                            />
                            <path
                              d="M19.5019 7.83943C19.0084 8.0581 18.4782 8.20585 17.9209 8.27263C18.496 7.92854 18.9262 7.38699 19.1313 6.74902C18.591 7.06993 17.9997 7.29582 17.3831 7.41686C16.9685 6.97412 16.4192 6.68066 15.8207 6.58205C15.2222 6.48344 14.6078 6.58519 14.073 6.87151C13.5383 7.15783 13.113 7.61269 12.8632 8.16548C12.6134 8.71828 12.5532 9.33806 12.6917 9.92863C11.597 9.87366 10.5261 9.58912 9.54842 9.09348C8.57078 8.59784 7.70828 7.90217 7.0169 7.05162C6.7805 7.45941 6.64456 7.93221 6.64456 8.43575C6.6443 8.88905 6.75593 9.3354 6.96955 9.73521C7.18316 10.135 7.49216 10.4759 7.86913 10.7277C7.43195 10.7138 7.00441 10.5956 6.62211 10.3831V10.4186C6.62206 11.0543 6.84198 11.6705 7.24454 12.1626C7.6471 12.6547 8.20752 12.9924 8.83069 13.1183C8.42513 13.228 7.99994 13.2442 7.58722 13.1656C7.76304 13.7126 8.10552 14.191 8.56673 14.5337C9.02793 14.8764 9.58476 15.0663 10.1593 15.0769C9.18401 15.8425 7.97958 16.2577 6.73972 16.2559C6.52009 16.256 6.30065 16.2432 6.08252 16.2175C7.34105 17.0267 8.80607 17.4561 10.3023 17.4545C15.3672 17.4545 18.1361 13.2595 18.1361 9.6213C18.1361 9.5031 18.1331 9.38372 18.1278 9.26552C18.6664 8.87603 19.1313 8.39373 19.5007 7.8412L19.5019 7.83943Z"
                              fill="#FFA700"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <circle
                              cx="12.2583"
                              cy="12"
                              r="11.5"
                              stroke="#FFA700"
                            />
                            <path
                              d="M15.4664 12.4035L15.8494 9.89778H13.455V8.27172C13.455 7.58634 13.7894 6.91783 14.8618 6.91783H15.9503V4.78466C15.9503 4.78466 14.9627 4.61548 14.0182 4.61548C12.0464 4.61548 10.7576 5.81576 10.7576 7.98831V9.89821H8.56567V12.4039H10.7576V18.4616H13.455V12.4039L15.4664 12.4035Z"
                              fill="#FFA700"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="wrap">
                    <h6 className="sectionTitle">Product</h6>
                    <ul className="fooLinks">
                      <li>
                        <Link to="">Fittings</Link>
                      </li>
                      <li>
                        <Link to="">Valves</Link>
                      </li>
                      <li>
                        <Link to="">Manifolds</Link>
                      </li>
                      <li>
                        <Link to="">Condensate Pots</Link>
                      </li>
                      <li>
                        <Link to="">Cylinders</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="wrap">
                    <h6 className="sectionTitle">Company</h6>
                    <ul className="fooLinks">
                      <li>
                        <Link to="">About Us</Link>
                      </li>
                      <li>
                        <Link to="">News</Link>
                      </li>
                      <li>
                        <Link to="">Careers</Link>
                      </li>
                      <li>
                        <Link to="">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
