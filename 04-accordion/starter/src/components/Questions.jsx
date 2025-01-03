import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, setActiveId }) => {
  return (
    <div className="container">
      <h1> questions </h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
};

export default Questions;
