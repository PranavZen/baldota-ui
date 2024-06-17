import React from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import SectionTitle from "../components/commonProductSlider/SectionTitle";
import { Helmet } from "react-helmet-async";
import singlepopulardata from "../components/popularproducts/singlepopulardata";

function ProductDetails() {
  const { slug } = useParams();
  const allProducts = [...singlepopulardata];
  const product = allProducts.find(
    (item) => slugify(item.slugUrl.replace("#", ""), { lower: true }) === slug
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
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.longDescription}</p>
      <p>{product.offerPrice}% off</p>
      <p>₹ {product.price}/-</p>
      <img src={product.productImage} alt={product.name} />
    </section>
  );
}

export default ProductDetails;
