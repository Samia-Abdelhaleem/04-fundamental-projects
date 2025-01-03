import React from "react";
import Duties from "./Duties";

const Job = ({ company, dates, duties, title, id }) => {
  return (
    <article className="job-info">
      <h3 className="title">{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default Job;
