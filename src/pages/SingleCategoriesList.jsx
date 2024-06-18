import React from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import singlepopulardata from "../components/popularproducts/singlepopulardata";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../redux/selectors";
import { toggleWishlist } from "../redux/actions";
import ProductCardItem from "../components/card/ProductCardItem";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet-async";

function SingleCategoriesList() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);
  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };

  const { singleItem } = useParams();
  const product = singlepopulardata.find(
    (item) => slugify(item.url.replace("#", ""), { lower: true }) === singleItem
  );

  if (!product) {
    return (
      <div className="emptyPage">
        <SectionTitle title="Product" spanTitle="not found" />
      </div>
    );
  }

  // Filter the products based on the URL and type
  const filteredProducts = singlepopulardata.filter(
    (item) => slugify(item.url.replace("#", ""), { lower: true }) === singleItem
  );

  return (
    <section id="singleProductPage">
      <Helmet> 
        <title>Baldota | {product.type}</title>
      </Helmet>
      <div className="container">
        <Breadcrumb />
        <div className="row">
          {filteredProducts.length > 0 && (
            <SectionTitle 
              title={filteredProducts[0].type}
              spanTitle="Products"
            />
          )}
          {filteredProducts.map((item, index) => {
            const isWishlisted = wishlist.includes(
              index + filteredProducts.length
            );
            return (
              <div className="col-md-3" key={index}>
                <ProductCardItem
                  key={index}
                  item={item}
                  index={index + filteredProducts.length}
                  isWishlisted={isWishlisted}
                  handleClick={() =>
                    handleClick(index + filteredProducts.length)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SingleCategoriesList;
