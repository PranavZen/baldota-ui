import React from "react";
import { Link } from "react-router-dom";

function SpecificationTabs() {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-Specifications-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Specifications"
            type="button"
            role="tab"
            aria-controls="pills-Specifications"
            aria-selected="true"
          >
            Specifications
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-Downloads-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Downloads"
            type="button"
            role="tab"
            aria-controls="pills-Downloads"
            aria-selected="false"
          >
            Downloads
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-Specifications"
          role="tabpanel"
          aria-labelledby="pills-Specifications-tab"
        >
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>Body Material</td>
                  <td>316 Stainless Steel</td>
                </tr>
                <tr>
                  <td>Port 1 Type</td>
                  <td>Fractional Ferrule</td>
                </tr>
                <tr>
                  <td>Port 1 Size</td>
                  <td>1/4 in.</td>
                </tr>
                <tr>
                  <td>Port 2 Type</td>
                  <td>Fractional Ferrule</td>
                </tr>
                <tr>
                  <td>Port 2 Size</td>
                  <td>1/4 in.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-Downloads"
          role="tabpanel"
          aria-labelledby="pills-Downloads-tab"
        >
          <div className="downloadListWrap">
            <ul className="downloadUl">
              <li className="mainList">
                Product Catalogs
                <ul>
                  <li className="subList">
                    <Link to="" target="_blank">
                      6D Series Tube Fittings
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mainList">
                Drawings
                <ul>
                  <li className="subList">
                    <Link to="" target="_blank">
                      3D Drawings
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="" target="_blank">
                      2D Sales Drawings
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mainList">
                Other Resources
                <ul>
                  <li className="subList">
                    <Link to="" target="_blank">
                      FITOK Products for Hydrogen Applications
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="" target="_blank">
                      Brochure for Hydrogen Applications
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="" target="_blank">
                      Installation Instructions - For FITOK Tube Fittings over 1
                      in. (25mm) O.D.
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="" target="_blank">
                      Installation Instructions - For FITOK Tube Fittings up to
                      1 in. (25mm) O.D.
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="" target="_blank">
                      FITOK Company Brochure
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificationTabs;
