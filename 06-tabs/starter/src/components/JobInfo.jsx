import React from "react";
import Companies from "./Companies";
import { useMemo } from "react";
import { useState } from "react";
import Job from "./Job";

const JobInfo = ({ currentJob }) => {
  return (
    <div className="btn-container">
      <Job {...currentJob} />
      <div></div>
    </div>
  );
};

export default JobInfo;
