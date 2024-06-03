import React from "react";
import BannerSlider from "../components/bannerSlider/BannerSlider";
import FeaturesList from "../components/features/FeaturesList";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import ProductCardItem from "../components/card/ProductCardItem";
import data from "../components/card/productData";
import newProductData from "../components/card/newProductData";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import CommonSlider from "../components/commonProductSlider/CommonSlider";
import "../components/commonProductSlider/commonslider.css";
import "../components/faqaccordion/accordion.css";
import Grid from "../components/popularproducts/Grid";
import SpanBox from "../components/spanbox/SpanBox";
import OurPartner from "../components/ourpartner/OurPartner";
import Accordion from "../components/faqaccordion/Accordion";
import NewsLetter from "../components/newsletter/NewsLetter";
function HomePage() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
    dispatch(toggleWishlist(index));
  };
  return (
    <>
      {/* <SquareBtn
        sBtnName="All Products"
        btnBgColor="#007078"
        color="#fff"
        className="iconSvgWrap hamb"
      />
      <RoundBtn rBtnLink="#" rBtnName="Contact Us" color="green" fill="green" /> */}

      <BannerSlider />
      <FeaturesList />
      <div id="productSliderSection" className="productSliderSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <SectionTitle title="Recent" spanTitle="Products" />
              <CommonSlider>
                {data.map((item, index) => {
                  const isWishlisted = wishlist.includes(index);
                  return (
                    <ProductCardItem
                      key={index}
                      item={item}
                      index={index}
                      isWishlisted={isWishlisted}
                      handleClick={() => handleClick(index)}
                      dispatch={dispatch}
                      wishlist={wishlist}
                    />
                  );
                })}
              </CommonSlider>
            </div>
          </div>
        </div>
      </div>
      <section id="popularProductsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <SectionTitle title="Popular" spanTitle="Categories" />
              <p className="commonPara">
                Threads with smooth surface finish avoid galling and help to
                extend the fitting service life.
              </p>
              <Grid />
            </div>
          </div>
        </div>
      </section>
      <div id="productSliderSection" className="productSliderSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <SectionTitle title="New" spanTitle="Products" />
              <CommonSlider>
                {newProductData.map((item, index) => {
                  const isWishlisted = wishlist.includes(index);
                  return (
                    <ProductCardItem
                      key={index}
                      item={item}
                      index={index}
                      isWishlisted={isWishlisted}
                      handleClick={() => handleClick(index)}
                      dispatch={dispatch}
                      wishlist={wishlist}
                    />
                  );
                })}
              </CommonSlider>
            </div>
          </div>
        </div>
      </div>
      <section id="bestDealSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-10 mx-auto">
              <div className="dealWrap">
                <SpanBox spanText="Best Deal" bgColor="#09454A" color="#fff" />
                <h5>The Best Instrument Tube Fittings in Baldota</h5>
                <p>Upto 70% Off</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqSection">
        <Accordion />
      </section>
      <NewsLetter />
      <OurPartner />
    </>
  );
}

export default HomePage;
