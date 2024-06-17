import React from "react";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function Breadcrumb() {
  const { singleItem } = useParams();
  const paths = singleItem.split("/").filter((path) => path);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const text = capitalize(
            slugify(path.replace("-", " "), { lower: true })
          );
          return (
            <li key={index} className="breadcrumb-item">
              {text}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
