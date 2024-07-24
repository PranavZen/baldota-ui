import React from "react";
import BannerSlider from "../components/bannerSlider/BannerSlider";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import CommonSlider from "../components/commonProductSlider/CommonSlider";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import data from "../components/card/productData";
import newProductData from "../components/card/newProductData";
import ProductCardItem from "../components/card/ProductCardItem";
import { product1 } from "../assets/imagesPath";
import { Link } from "react-router-dom";
function ProductListing() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };
  return (
    <>
      <BannerSlider />
      <section id="mainProductListSection">
        <div className="container">
          <SectionTitle title="All" spanTitle="Products" />
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20201113/Fittings.jpg"
                      alt="Fittings"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Fittings</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20201113/Valves.jpg"
                      alt="Valves"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Valves</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20201113/Manifolds.jpg"
                      alt="Manifolds"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Manifolds</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20201113/Filters.jpg"
                      alt="Quick-Connects
"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Quick-Connects</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://fitokgroup.com/u_file/photo/20201113/Quick-Connects.jpg"
                      alt="Hoses and Connectors"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Hoses and Connectors</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20210302/Tubing.jpg"
                      alt="Tubing"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Tubing</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="wraps">
                <Link to="/products-filter">
                  <div className="typeImag">
                    <img
                      src="https://www.fitokgroup.com/u_file/photo/20201113/Sampling_Systems.jpg"
                      alt="Sampling Systems"
                      className="img-fluid"
                    />
                  </div>
                  <div className="typeText">
                    <h6>Sampling Systems</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div id="productSliderSection" className="productSliderSection pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mx-auto">
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
    </>
  );
}

export default ProductListing;
