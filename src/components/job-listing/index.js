"use client";

import PostNewJob from "../post-new-job";

const JobListing = ({ user, profileInfo }) => {
  return (
    <div>
      <div className="p-20 flex justify-between items-center">
        <h1>
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
      <div>job listing</div>
    </div>
  );
};

export default JobListing;
