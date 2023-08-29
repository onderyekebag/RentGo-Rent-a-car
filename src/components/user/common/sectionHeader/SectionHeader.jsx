import React from "react";
import "./sectionHeader.scss";
const SectionHeader = ({ title1, title2, desc }) => {
  return (
    <div className="section-header">
      <h2>
        {title1} <span>{title2}</span>
      </h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionHeader;
