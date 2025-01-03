import React from "react";
import { nanoid } from "nanoid";
import SingleItem from "./SingleItem";
const Items = ({ items, setItems }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem key={item.id} {...item} setItems={setItems} />
      ))}
    </div>
  );
};

export default Items;
