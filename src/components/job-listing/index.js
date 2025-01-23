"use client";



import PostNewJob from "../post-new-job";
import { Button } from "../ui/button";
import CandidateJobCard from "../candidate-job-card";
import RecruiterJobCard from "../recruiter-job-card";

const JobListing = ({
  user,
  profileInfo,
  jobListForRecruiter,
  jobListForCandidate,
}) => {
  return (
    <div>
      <div className="my-10 pb-3 flex justify-between items-center border-b-4">
        <h1 className="text-2xl font-bold">
          {profileInfo?.role === "candidate"
            ? "explore jobs"
            : "Jobs dashboard"}
        </h1>
        <div>
          {profileInfo?.role === "candidate" ? (
            <p>filter</p>
          ) : (
            <PostNewJob user={user} profileInfo={profileInfo} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {jobListForRecruiter &&
          jobListForRecruiter.map((job) => (
            <RecruiterJobCard key={job._id} job={job} />
          ))}
        {jobListForCandidate &&
          jobListForCandidate.map((job) => (
            <CandidateJobCard key={job._id} job={job} />
          ))}
      </div>
    </div>
  );
};

export default JobListing;
