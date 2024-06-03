import React from "react";
import "../newsletter/newslwtter.css";
import SectionTitle from "../commonProductSlider/SectionTitle";
function NewsLetter() {
  return (
    <section id="newsletterSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto">
            <div className="bgWrpper">
              <div className="leftBox">
                <SectionTitle
                  title="Sign Up For Newsletter &"
                  spanTitle="Get 20% Off"
                />
                <form>
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email..."
                    />
                    <button>Subscribe</button>
                  </div>
                </form>
                <p className="commonPara">
                  Threads with smooth surface finish avoid galling and help to
                  extend the fitting service life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
