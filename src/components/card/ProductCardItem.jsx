import React from "react";
import { Link } from "react-router-dom";
// import SquareBtn from "../cta/SquareBtn";
import slugify from "slugify";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../redux/selectors";
import { toggleWishlist } from "../../redux/actions";
import "../card/card.css";

const ProductCardItem = ({ item, index, isWishlisted, onProductClick }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };

  const slug = item.slug
    ? item.slug
    : typeof item.slugUrl === "string"
    ? slugify(item.slugUrl.replace("#", ""), { lower: true })
    : "";

  return (
    <div className="ddd" key={index}>
      <div
        className={isWishlisted ? "wishlistWrap bgAdd" : "wishlistWrap"}
        onClick={() => handleClick(index)}
      >
        <span>
          {isWishlisted ? (
            <>
              <img src="/images/whiteHeartIcon.svg" alt="whiteHeartIcon" />
            </>
          ) : (
            <>
              <img src="/images/greenHeartIcon.svg" alt="greenHeartIcon" />
            </>
          )}
        </span>
      </div>

      <div className="cardInner">
        <div className="topBoxWrap">
          <div className="topWrap">
            <div className="offerTagWrap">
              <span>{item.offerPrice}% Off</span>
            </div>
          </div>
          <Link
            to={`/products/${slug}`}
            rel="noopener noreferrer"
            onClick={onProductClick}
          >
            <div className="proImgWrap">
              <img src={item.productImage} alt={item.name} />
            </div>
          </Link>
        </div>
        <Link
          to={`/products/${slug}`}
          rel="noopener noreferrer"
          onClick={onProductClick}
        >
          <div className="productDetailsWrap">
            <h6>{item.name}</h6>
            <p>{item.description}</p>
          </div>
        </Link>
        {/* <div className="bottomBoxWrap">
          <h6>₹ {item.price}/-</h6>
          <SquareBtn
            sBtnName="All Products"
            btnBgColor="#FFA700"
            color="#000000"
            className="iconSvgWrap cartIcon"
          />
        </div> */}
      </div>
    </div>
  );
};

ProductCardItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isWishlisted: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  onProductClick: PropTypes.func,
};

export default ProductCardItem;
