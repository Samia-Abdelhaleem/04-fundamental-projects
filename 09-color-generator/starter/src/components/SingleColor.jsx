import React from "react";

const SingleColor = ({ color }) => {
  const { hex, brightness } = color;
  return (
    <article
      style={{ backgroundColor: hex }}
      className={brightness < 50 ? "color color-light" : "color"}
    >
      <p className="percent-value">{brightness} %</p>
      <p className="color-value"> {hex}</p>
    </article>
  );
};

export default SingleColor;
