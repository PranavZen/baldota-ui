import React from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import { Helmet } from "react-helmet-async";
import singlepopulardata from "../components/popularproducts/singlepopulardata";
import Breadcrumb from "../components/Breadcrumb";
import LeftBox from "../components/productDetailsPageComponents/LeftBox";
import RightBox from "../components/productDetailsPageComponents/RightBox";
import ProductCardItem from "../components/card/ProductCardItem";
import CommonSlider from "../components/commonProductSlider/CommonSlider";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import "../components/productDetailsPageComponents/details.css";
import SpecificationTabs from "../components/productDetailsPageComponents/SpecificationTabs";

function ProductDetails() {
  const { singleItem } = useParams();
  const allProducts = [...singlepopulardata];
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };
  const product = allProducts.find(
    (item) =>
      slugify(item.slugUrl.replace("#", ""), { lower: true }) === singleItem
  );

  if (!product) {
    return (
      <div className="emptyPage">
        <SectionTitle title="Product" spanTitle="not found" />
      </div>
    );
  }

  return (
    <section id="singleProductPage">
      <Helmet>
        <title>Baldota | {product.name}</title>
      </Helmet>
      <div className="container">
        <Breadcrumb />
        <div className="row">
          <div className="col-md-5 col-lg-5 col-12">
            <LeftBox productImg={product.productImage} altName={product.name} />
          </div>
          <div className="col-md-7 col-lg-7 col-12">
            <RightBox
              name={product.name}
              description={product.description}
              longDesc={product.longDescription}
            />
          </div>
        </div>
        <section id="specificationSection">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <SpecificationTabs />
            </div>
          </div>
        </section>
        <div id="productSliderSection" className="productSliderSection pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mx-auto">
                <SectionTitle title="Recent" spanTitle="Products" />
                <CommonSlider>
                  {singlepopulardata
                    .filter((item) => item.tag === "recent-product")
                    .map((item, index) => {
                      const isWishlisted = wishlist.includes(
                        index + item.length
                      );
                      return (
                        <ProductCardItem
                          key={index}
                          item={item}
                          index={index + item.length}
                          isWishlisted={isWishlisted}
                          handleClick={() => handleClick(index + item.length)}
                        />
                      );
                    })}
                </CommonSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
