import React from "react";

function SectionTitle({ title, spanTitle }) {
  return (
    <h3 className="sectionTitle">
      {title} <span className="highlightText">{spanTitle}</span>
    </h3>
  );
}

export default SectionTitle;
