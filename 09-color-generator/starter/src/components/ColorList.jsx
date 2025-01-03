import React from "react";

import SingleColor from "./SingleColor";

import { nanoid } from "nanoid";
const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color) => (
        <SingleColor key={nanoid()} color={color} />
      ))}
    </div>
  );
};

export default ColorList;
