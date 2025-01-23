"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import JobApplicants from "../job-applicants";

const RecruiterJobCard = ({ job, jobApplicationList }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentCandidateDetails, setCurrentCandidateDetails] = useState(null);
  const [currentCandidateModal, setCurrentCandidateModal] = useState(false);

  return (
    <div>
      <Card>
        <CardHeader>
          {/* add one icon also */}
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>{job.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{job.location}</p>
          <p>{job.experience}</p>
          <Button
            disabled={
              jobApplicationList?.filter((item) => item.jobId === job?._id)
                .length === 0
            }
            onClick={() => setIsDrawerOpen(true)}
            className="mt-5"
          >
            {
              jobApplicationList?.filter((item) => item.jobId === job?._id)
                .length
            }{" "}
            Applicants
          </Button>
        </CardContent>
      </Card>
      <JobApplicants
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        currentCandidateDetails={currentCandidateDetails}
        setCurrentCandidateDetails={setCurrentCandidateDetails}
        currentCandidateModal={currentCandidateModal}
        setCurrentCandidateModal={setCurrentCandidateModal}
        job={job}
        jobApplicationList={jobApplicationList?.filter(
          (item) => item.jobId === job?._id
        )}
      />
    </div>
  );
};

export default RecruiterJobCard;
