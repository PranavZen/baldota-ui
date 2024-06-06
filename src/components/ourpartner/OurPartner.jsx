import React from "react";
import { partner1, partner2, partner3, partner4, partner5, partner6 } from "../../assets/imagesPath";
import "../ourpartner/ourpartner.css";
import SectionTitle from "../commonProductSlider/SectionTitle";
function OurPartner() {
  return (
    <section id="ourPartnerSection">
      <div className="container">
        <SectionTitle title="Our" spanTitle="Partners" />
        <i data-feather="circle"></i>
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto">
            <div className="logosWrap">
              <ul className="row">
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner1} alt="" />
                </li>
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner2} alt="" />
                </li>
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner3} alt="" />
                </li>
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner4} alt="" />
                </li>
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner5} alt="" />
                </li>
                <li className="col-lg-2 col-md-3 col-6">
                  <img className="img-fluid" src={partner6} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartner;
