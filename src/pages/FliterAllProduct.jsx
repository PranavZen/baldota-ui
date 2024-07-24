import React from "react";
import FilterSelectionBox from "../components/filtercomponents/FilterSelectionBox";
import FilterListingMenus from "../components/filtercomponents/FilterListingMenus";

function FliterAllProduct() {
  return (
    <div id="filterPage">
      <div className="container">
        <form>
          <FilterSelectionBox />
          <FilterListingMenus />
        </form>
      </div>
    </div>
  );
}

export default FliterAllProduct;
