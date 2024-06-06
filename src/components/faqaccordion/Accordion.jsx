import React from "react";
import AccordionItem from "./AccordionItem";
import { accordianData } from "./accordiondata";
import { factoryImg } from "../../assets/imagesPath";
import SectionTitle from "../commonProductSlider/SectionTitle";

function Accordion() {
  return (
    <section id="accordianSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto ">
            <div className="row bgImg">
              <div className="col-md-7">
                <div className="imgWrap">
                  <img
                    src={factoryImg}
                    alt="Factory Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="rightBox">
                <div className="accordionWrap">
                  <SectionTitle title="Why Choose" spanTitle="Baldota?" />
                  <div className="accordianContainer">
                    {accordianData.map((item, index) => {
                      return (
                        <AccordionItem key={index} index={index} item={item} />
                      );
                    })}
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

export default Accordion;
