import React, { useEffect, useState } from "react";
import InputSelectCombo from "../../inputselectcombo/InputSelectCombo";
import { logo, smallproImg } from "../../../assets/imagesPath";
import SquareBtn from "../../cta/SquareBtn";
import { Link } from "react-router-dom";
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

  // Function to toggle the show/hide class
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
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Produtcs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item cartMenu">
                  <Link className="nav-link" to="#">
                    <span className="cartBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14 4H12C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4H2C1.46957 4 0.960859 4.21071 0.585786 4.58579C0.210714 4.96086 0 5.46957 0 6L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4ZM8 1.33333C8.70724 1.33333 9.38552 1.61429 9.88562 2.11438C10.3857 2.61448 10.6667 3.29276 10.6667 4H5.33333C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61429 7.29276 1.33333 8 1.33333ZM14.6667 12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V6C1.33333 5.82319 1.40357 5.65362 1.5286 5.5286C1.65362 5.40357 1.82319 5.33333 2 5.33333H4V6.66667C4 6.84348 4.07024 7.01305 4.19526 7.13807C4.32029 7.2631 4.48986 7.33333 4.66667 7.33333C4.84348 7.33333 5.01305 7.2631 5.13807 7.13807C5.2631 7.01305 5.33333 6.84348 5.33333 6.66667V5.33333H10.6667V6.66667C10.6667 6.84348 10.7369 7.01305 10.8619 7.13807C10.987 7.2631 11.1565 7.33333 11.3333 7.33333C11.5101 7.33333 11.6797 7.2631 11.8047 7.13807C11.9298 7.01305 12 6.84348 12 6.66667V5.33333H14C14.1768 5.33333 14.3464 5.40357 14.4714 5.5286C14.5964 5.65362 14.6667 5.82319 14.6667 6V12.6667Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="dotSpan"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M9.16242 5.66242L7.82483 7L9.16242 8.33758C9.3905 8.56567 9.3905 8.93433 9.16242 9.16242C9.04867 9.27617 8.89933 9.33333 8.75 9.33333C8.60067 9.33333 8.45133 9.27617 8.33758 9.16242L7 7.82483L5.66242 9.16242C5.54867 9.27617 5.39933 9.33333 5.25 9.33333C5.10067 9.33333 4.95133 9.27617 4.83758 9.16242C4.6095 8.93433 4.6095 8.56567 4.83758 8.33758L6.17517 7L4.83758 5.66242C4.6095 5.43433 4.6095 5.06567 4.83758 4.83758C5.06567 4.6095 5.43433 4.6095 5.66242 4.83758L7 6.17517L8.33758 4.83758C8.56567 4.6095 8.93433 4.6095 9.16242 4.83758C9.3905 5.06567 9.3905 5.43433 9.16242 5.66242ZM14 7C14 10.8599 10.8599 14 7 14C3.14008 14 0 10.8599 0 7C0 3.14008 3.14008 0 7 0C10.8599 0 14 3.14008 14 7ZM12.8333 7C12.8333 3.7835 10.2165 1.16667 7 1.16667C3.7835 1.16667 1.16667 3.7835 1.16667 7C1.16667 10.2165 3.7835 12.8333 7 12.8333C10.2165 12.8333 12.8333 10.2165 12.8333 7Z"
                fill="#007078"
              ></path>
            </svg>
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
                    {getPaginatedItems(groupedProducts[type], currentPage, itemsPerPage).map(
                      (item, index) => {
                        const isWishlisted = wishlist.includes(item.id);
                        return (
                          <div
                            className="col-lg-6 col-md-6 col-12 position-relative mb-4"
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
                      }
                    )}
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
