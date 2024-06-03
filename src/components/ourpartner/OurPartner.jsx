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
                <li className="col-md-2">
                  <img src={partner1} alt="" />
                </li>
                <li className="col-md-2">
                  <img src={partner2} alt="" />
                </li>
                <li className="col-md-2">
                  <img src={partner3} alt="" />
                </li>
                <li className="col-md-2">
                  <img src={partner4} alt="" />
                </li>
                <li className="col-md-2">
                  <img src={partner5} alt="" />
                </li>
                <li className="col-md-2">
                  <img src={partner6} alt="" />
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
