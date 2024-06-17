import React from "react";
import InnerBanner from "../components/innerbanner/InnerBanner";
import { innerBanner1 } from "../assets/imagesPath";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import CommonSlider from "../components/commonProductSlider/CommonSlider";
import data from "../components/card/productData";
import ProductCardItem from "../components/card/ProductCardItem";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import OurPartner from "../components/ourpartner/OurPartner";
import OurExpertise from "../components/expertise/OurExpertise";
import WhoWeAre from "../components/whoweare/WhoWeAre";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };
  return (
    <>
      <Helmet>
        <title>Baldota | About Us</title>
        <meta
          name="description"
          content="This is the About Us page of our website."
        />
        <meta name="keywords" content="About Us, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us Page" />
        <meta
          property="og:description"
          content="This is the About Us page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/about" />
        <meta
          property="og:image"
          content="https://www.example.com/About Us-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us Page" />
        <meta
          name="twitter:description"
          content="This is the About Us page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/About Us-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/about" />
      </Helmet>
      <InnerBanner mainText="About" subText="Baldota" bgImg={innerBanner1} />
      <WhoWeAre />
      <OurExpertise />
      <div id="productSliderSection" className="productSliderSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mx-auto">
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
                    />
                  );
                })}
              </CommonSlider>
            </div>
          </div>
        </div>
      </div>
      <OurPartner />
    </>
  );
}

export default AboutUs;
