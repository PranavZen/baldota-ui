import React from "react";
import { Link } from "react-router-dom";
import SquareBtn from "../cta/SquareBtn";
import slugify from "slugify";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../redux/selectors";
import { toggleWishlist } from "../../redux/actions";
import "../card/card.css";
const ProductCardItem = ({ item, index, isWishlisted }) => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M10.028 0C9.38289 0.0100337 8.75188 0.190108 8.19866 0.522038C7.64545 0.853969 7.18961 1.326 6.87719 1.89047C6.56477 1.326 6.10894 0.853969 5.55572 0.522038C5.0025 0.190108 4.3715 0.0100337 3.72642 0C2.69808 0.0446784 1.72923 0.494531 1.03152 1.25128C0.333811 2.00802 -0.0360388 3.01015 0.00277331 4.03872C0.00277331 7.91991 6.27912 12.4026 6.54607 12.5928L6.87719 12.8271L7.20831 12.5928C7.47527 12.4037 13.7516 7.91991 13.7516 4.03872C13.7904 3.01015 13.4206 2.00802 12.7229 1.25128C12.0252 0.494531 11.0563 0.0446784 10.028 0ZM6.87719 11.4167C5.01365 10.0246 1.14851 6.6046 1.14851 4.03872C1.10935 3.31388 1.35839 2.60296 1.84132 2.06101C2.32424 1.51906 3.00187 1.19005 3.72642 1.14574C4.45096 1.19005 5.12859 1.51906 5.61152 2.06101C6.09444 2.60296 6.34349 3.31388 6.30432 4.03872H7.45006C7.4109 3.31388 7.65994 2.60296 8.14287 2.06101C8.62579 1.51906 9.30342 1.19005 10.028 1.14574C10.7525 1.19005 11.4301 1.51906 11.9131 2.06101C12.396 2.60296 12.645 3.31388 12.6059 4.03872C12.6059 6.60574 8.74073 10.0246 6.87719 11.4167Z"
              fill="#007078"
            />
          </svg>
        </span>
      </div>

      <div className="cardInner">
        <div className="topBoxWrap">
          <div className="topWrap">
            <div className="offerTagWrap">
              <span>{item.offerPrice}% Off</span>
            </div>
          </div>
          <Link to={`/products/${slug}`} rel="noopener noreferrer">
            <div className="proImgWrap">
              <img src={item.productImage} alt={item.name} />
            </div>
          </Link>
        </div>
        <Link to={`/products/${slug}`} rel="noopener noreferrer">
          <div className="productDetailsWrap">
            <h6>{item.name}</h6>
            <p>{item.description}</p>
          </div>
        </Link>
        <div className="bottomBoxWrap">
          <h6>₹ {item.price}/-</h6>
          <SquareBtn
            sBtnName="All Products"
            btnBgColor="#FFA700"
            color="#000000"
            className="iconSvgWrap cartIcon"
          />
        </div>
      </div>
    </div>
  );
};

ProductCardItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isWishlisted: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductCardItem;
