import React from "react";

const Companies = ({ companies, currentJob, filterCompanyJob }) => {
  return (
    <div className="btn-container">
      {companies.map((company) => (
        <button
          key={company}
          className={
            currentJob.company === company ? "job-btn active-btn" : "job-btn"
          }
          onClick={() => filterCompanyJob(company)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default Companies;
