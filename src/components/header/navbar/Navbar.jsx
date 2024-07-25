import React, { useEffect, useState } from "react";
import InputSelectCombo from "../../inputselectcombo/InputSelectCombo";
import { logo, smallproImg } from "../../../assets/imagesPath";
import SquareBtn from "../../cta/SquareBtn";
import { Link, useLocation } from "react-router-dom";
import "../navbar/navbar.css";
import singlepopulardata from "../../popularproducts/singlepopulardata";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../../redux/selectors";
import { toggleWishlist } from "../../../redux/actions";
import ProductCardItem from "../../card/ProductCardItem";
import SectionTitle from "../../commonProductSlider/SectionTitle";

function Navbar() {
  const uniqueTypes = [...new Set(singlepopulardata.map((item) => item.type))];
  const [show, setShow] = useState(false);
  const [hideBox, sethideBox] = useState(false);
  const [activeTab, setActiveTab] = useState(
    uniqueTypes.length > 0 ? uniqueTypes[0] : ""
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);
  const [isToggled, setIsToggled] = useState(false);

  const location = useLocation();

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };

  const handleHideClick = () => {
    sethideBox(!hideBox);
    setShow(!show);
  };

  useEffect(() => {
    if (show) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [show]);

  useEffect(() => {
    // Close the navbar collapse when the route changes
    setIsToggled(false);
  }, [location]);

  const showAlertMessage = () => {
    setShow((prevShow) => !prevShow);
  };

  const typeToImageMap = uniqueTypes.reduce((acc, type) => {
    const representativeProduct = singlepopulardata.find(
      (item) => item.type === type
    );
    if (representativeProduct) {
      acc[type] = representativeProduct.productImage;
    }
    return acc;
  }, {});

  const groupedProducts = uniqueTypes.reduce((acc, type) => {
    acc[type] = singlepopulardata.filter((item) => item.type === type);
    return acc;
  }, {});

  const handleProductClick = () => {
    setShow(!show);
  };

  const totalItems = groupedProducts[activeTab]?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginatedItems = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const toggleNavbarIcon = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="custNav">
            <div className="col-md-3">
              <div className="navLeftBox">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Baldota Logo" className="img-fluid" />
                </Link>
                <SquareBtn
                  sBtnName="All Products"
                  btnBgColor="#007078"
                  color="#fff"
                  className="iconSvgWrap hamb"
                  onClick={showAlertMessage}
                />
              </div>
            </div>
            <div className="col-md-5">
              <InputSelectCombo />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbarIcon}
            >
              {isToggled ? (
                <>
                  <img src="/images/toggleHamburgerIcon.svg" alt="hamburger" />
                </>
              ) : (
                <>
                  <img src="/images/toggleCloseIcon.svg" alt="close" />
                </>
              )}
            </button>
            <div className={`collapse navbar-collapse ${isToggled ? "show" : ""}`} id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/about-us" onClick={() => setIsToggled(false)}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" onClick={() => setIsToggled(false)}>
                    Produtcs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => setIsToggled(false)}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item cartMenu">
                  <Link className="nav-link" to="#" onClick={() => setIsToggled(false)}>
                    <span className="cartBox">
                      <img src="/images/cartIcon.svg" alt="cart" />
                    </span>
                    <span className="dotSpan"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => setIsToggled(false)}>
                    <span className="cartBox profileBox">
                      <img
                        src={smallproImg}
                        alt="profile imag"
                        className="img-fluid"
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={
          show ? "allProductsDisplayBox show" : "allProductsDisplayBox hide"
        }
      >
        <div className="tabsWrap">
          <span className="closeBtn" onClick={handleHideClick}>
            <img src="/images/close.svg" alt="close" />
          </span>
          <div
            className="nav nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {uniqueTypes.map((type, index) => (
              <button
                className={`nav-link ${activeTab === type ? "active" : ""}`}
                id={type}
                data-bs-toggle="pill"
                data-bs-target={`#v-pills-${type}`}
                type="button"
                role="tab"
                aria-controls={type}
                aria-selected={activeTab === type ? "true" : "false"}
                key={index}
                onClick={() => setActiveTab(type)}
              >
                <span>
                  <img
                    src={typeToImageMap[type]}
                    alt={type}
                    className="nav-type-image"
                  />
                </span>
                {type}
              </button>
            ))}
          </div>

          <div className="tab-content" id="v-pills-tabContent">
            {uniqueTypes.map((type, index) => (
              <div
                className={`tab-pane fade ${
                  activeTab === type ? "show active" : ""
                }`}
                id={type}
                role="tabpanel"
                aria-labelledby={type}
                key={index}
              >
                <div className="container">
                  <div className="row">
                    {groupedProducts[type].length > 0 && (
                      <SectionTitle
                        title={groupedProducts[type][0].type}
                        spanTitle="Products"
                      />
                    )}
                    {getPaginatedItems(
                      groupedProducts[type],
                      currentPage,
                      itemsPerPage
                    ).map((item, index) => {
                      const isWishlisted = wishlist.includes(item.id);
                      return (
                        <div
                          className="col-lg-4 col-md-6 col-12 position-relative mb-4"
                          key={index}
                        >
                          <ProductCardItem
                            key={index}
                            item={item}
                            index={item.id}
                            isWishlisted={isWishlisted}
                            handleClick={() => handleClick(item.id)}
                            onProductClick={handleProductClick}
                          />
                        </div>
                      );
                    })}
                  </div>
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        className="prevBtn"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      {[...Array(totalPages).keys()].map((number) => (
                        <button
                          key={number + 1}
                          className={`pageBtn ${
                            currentPage === number + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(number + 1)}
                        >
                          {number + 1}
                        </button>
                      ))}
                      <button
                        className="nextBtn"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
