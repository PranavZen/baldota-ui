import React, { useState } from "react";
import ProductCardItem from "../card/ProductCardItem";
import singlepopulardata from "../popularproducts/singlepopulardata";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../redux/selectors";
import { toggleWishlist } from "../../redux/actions";
import data from "../card/productData";

function FilterListingMenus() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleClick = (index) => {
    dispatch(toggleWishlist(index));
  };
  const initialFilters = [
    {
      title: "Body Material",
      items: [
        "316 Stainless Steel",
        "316L Stainless Steel",
        "321 Stainless Steel",
        "3022 Stainless Steel",
        "3042 Stainless Steel",
        "3041 Stainless Steel",
      ],
      selectedItems: [],
      viewAll: false,
    },
    {
      title: "Another Material",
      items: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
      ],
      selectedItems: [],
      viewAll: false,
    },
  ];

  const [filters, setFilters] = useState(initialFilters);

  function handleSelectedItem(filterIndex, item) {
    setFilters((prevFilters) =>
      prevFilters.map((filter, index) =>
        index === filterIndex
          ? {
              ...filter,
              selectedItems: filter.selectedItems.includes(item)
                ? filter.selectedItems.filter((i) => i !== item)
                : [...filter.selectedItems, item],
            }
          : filter
      )
    );
  }

  function handleViewAll(filterIndex) {
    setFilters((prevFilters) =>
      prevFilters.map((filter, index) =>
        index === filterIndex ? { ...filter, viewAll: !filter.viewAll } : filter
      )
    );
  }

  function clearAllSelectedItems() {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => ({ ...filter, selectedItems: [] }))
    );
  }

  const allSelectedItems = filters.map((filter) => filter.selectedItems).flat();

  return (
    <>
      <div className="filter-list">
        {filters.map((filter, filterIndex) => (
          <div key={filterIndex} className="filter-item row">
            <div className="col-2">
              <div className="filterTitle">
                <p className="commonPara">{filter.title}</p>
              </div>
            </div>

            <div className="col-9">
              <div
                className="menusWraps"
                style={{
                  overflow: filter.viewAll ? "visible" : "hidden",
                  height: filter.viewAll ? "auto" : "4.5rem",
                }}
              >
                {filter.items.map((item, index) => (
                  <span
                    key={index}
                    className={
                      filter.selectedItems.includes(item)
                        ? "menuBoxItem active"
                        : "menuBoxItem"
                    }
                    onClick={() => handleSelectedItem(filterIndex, item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-1 d-flex justify-content-end">
              <span
                className="allBtn"
                onClick={() => handleViewAll(filterIndex)}
              >
                {filter.viewAll ? (
                  <>
                    <span className="de">Less</span> <i className="material-icons">&#xe5c7;</i>
                  </>
                ) : (
                  <>
                    <span className="de">All</span> <i className="material-icons">&#xe5c5;</i>
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      {allSelectedItems.length > 0 && (
        <div className="selectedMenusWrap">
          <div className="selectedMenusRows">
            {allSelectedItems.map((item, index) => (
              <span key={index} className="selectedBox">
                {item}
              </span>
            ))}
            <span className="clearBtn" onClick={clearAllSelectedItems}>
              Clear All <i className="material-icons">&#xe14c;</i>
            </span>
          </div>
        </div>
      )}
      
      <div className="filterdItemsListing">
        <div className="row g-4">
          {singlepopulardata
            .filter((item) => item.tag === "recent-product")
            .map((item, index) => {
              const isWishlisted = wishlist.includes(index + data.length);
              return (
                <div className="col-lg-3 col-md-4 col-12">
                  <ProductCardItem
                    key={index}
                    item={item}
                    index={index + data.length}
                    isWishlisted={isWishlisted}
                    handleClick={() => handleClick(index + data.length)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default FilterListingMenus;
