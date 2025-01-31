import React from "react";
import Category from "./Category";

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          className="btn"
          key={category}
          onClick={() => filterMenuItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
