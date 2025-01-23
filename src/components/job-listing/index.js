"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PostNewJob from "../post-new-job";
import { Button } from "../ui/button";

const JobListing = ({ user, profileInfo, jobList }) => {
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
        {jobList.map((job) => (
          <Card key={job._id}>
            <CardHeader>
              {/* add one icon also */}
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{job.location}</p>
              <p>{job.experience}</p>
              <Button className="mt-5">10 Applicants</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
