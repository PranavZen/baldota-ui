import React from "react";
import "../expertise/expertise.css";
import SectionTitle from "../commonProductSlider/SectionTitle";

function OurExpertise() {
  return (
    <section id="expertiseSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto">
            <SectionTitle title="Our" spanTitle="Expertise" />
            <p className="commonPara">
              We are a group of EPC engineers and work on large infrastructure
              projects
            </p>
            <div className="expertiseGrid">
              <div className="parent">
                <div className="div1 gridBox">
                  <div className="overlayText">
                    <h3>Manufacturing</h3>
                    <p>
                      CNC Lathe and Turning Operations, Abrasive Machining,
                      Milling, Thermal Cutting, High Pressure Fabrication
                    </p>
                  </div>
                </div>
                <div className="div2 gridBox">
                  <div className="overlayText">
                    <h3>Erection & Commissioning</h3>
                    <p>
                      Baldota has the experience and capacity to perform turnkey
                      installations for the complete scope of the project
                      including erection, commissioning, project management and
                      construction.
                    </p>
                  </div>
                </div>
                <div className="div3 gridBox">
                  <div className="overlayText">
                    <h3>High Pressure Fabrication</h3>
                    <p>
                      With 3 welding stations and multi axis positioners we
                      ensure top quality welding and metal fabrication. A
                      job-shop type setting enables orders from small,
                      single-part orders to large assemblies and multiple-run
                      parts.
                    </p>
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

export default OurExpertise;
