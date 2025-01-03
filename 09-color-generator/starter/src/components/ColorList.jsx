import React from "react";

import SingleColor from "./SingleColor";

import { nanoid } from "nanoid";
const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, index) => (
        <SingleColor key={nanoid()} color={color} index={index} />
      ))}
    </div>
  );
};

export default ColorList;
