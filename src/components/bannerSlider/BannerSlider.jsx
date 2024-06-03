import React, { useEffect, useState } from "react";
import bannerdata from "./bannerdata";
import "../bannerSlider/banner.css";
import RoundBtn from "../cta/RoundBtn";
import SpanBox from "../spanbox/SpanBox";
function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerdata.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <section id="bannerSection">
      <div className="slider">
        <div
          className={`slides ${isTransitioning ? "transitioning" : ""}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerdata.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="overlay">
                <SpanBox
                  spanText="Today’s Deal"
                  bgColor="#FFA700"
                  color="#000"
                />
                <h1 className="mainText">
                  {slide.overlayText} <span>{slide.offerText}</span>
                </h1>
                <p className="subText">
                  From <span>₹ {slide.priceText}</span> Only
                </p>
                <RoundBtn
                  rBtnLink="#"
                  rBtnName="Contact Us"
                  color="#fff"
                  fill="#fff"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {bannerdata.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BannerSlider;
