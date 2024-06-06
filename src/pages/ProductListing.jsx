import React from "react";
import BannerSlider from "../components/bannerSlider/BannerSlider";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import CommonSlider from "../components/commonProductSlider/CommonSlider";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import data from "../components/card/productData";
import newProductData from "../components/card/newProductData";
import Grid from "../components/popularproducts/Grid";
import ProductCardItem from "../components/card/ProductCardItem";
function ProductListing() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };
  return (
    <>
      <BannerSlider />
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
                    />
                  );
                })}
              </CommonSlider>
            </div>
          </div>
        </div>
      </div>
      <div id="productSliderSection" className="productSliderSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <SectionTitle title="New" spanTitle="Products" />
              <CommonSlider>
                {newProductData.map((item, index) => {
                  const isWishlisted = wishlist.includes(index + data.length);
                  return (
                    <ProductCardItem
                      key={index}
                      item={item}
                      index={index + data.length}
                      isWishlisted={isWishlisted}
                      handleClick={() => handleClick(index + data.length)}
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
    </>
  );
}

export default ProductListing;
