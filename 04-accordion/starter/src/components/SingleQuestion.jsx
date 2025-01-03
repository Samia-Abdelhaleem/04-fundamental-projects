import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const SingleQuestion = ({ id, title, info, activeId, setActiveId }) => {
  const toggleQuestion = () => {
    setActiveId(id === activeId ? null : id);
  };
  return (
    <div className="question">
      <header>
        <h5> {title}</h5>
        <button className="question-btn " onClick={toggleQuestion}>
          {activeId === id ? <FaMinus /> : <FaPlus />}
        </button>
      </header>

      {activeId === id && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestion;
