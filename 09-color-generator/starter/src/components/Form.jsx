import React, { useState } from "react";

const Form = ({ generateColors }) => {
  const [color, setColor] = useState("#f15025");

  const handleSubmit = (e) => {
    e.preventDefault();
    generateColors(color);
  };

  return (
    <section className="container">
      <h4> color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
