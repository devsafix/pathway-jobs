"use client";

import { Button } from "../ui/button";

const CandidateList = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobApplicationList,
  setCurrentCandidateModal,
  currentCandidateModal,
}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {jobApplicationList &&
        jobApplicationList?.map((item, idx) => (
          <div key={idx} className="flex items-center p-3 gap-3 shadow-lg">
            <h1 className="text-2xl font-semibold">{item.name}</h1>
            <Button>View Details</Button>
          </div>
        ))}
    </div>
  );
};

export default CandidateList;
