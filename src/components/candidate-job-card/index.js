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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { applyForJob } from "@/actions";

const CandidateJobCard = ({ job, profileInfo, jobApplicationList }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log(jobApplicationList);
  

  const handleJobApply = async () => {
    await applyForJob(
      {
        recruiterUserId: job?.recruiterId,
        candidateUserId: profileInfo?.userId,
        name: profileInfo?.candidateInfo?.name,
        email: profileInfo?.email,
        status: ["Applied"],
        jobId: job?._id,
        jobAppliedDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    );
    setIsDrawerOpen(false);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Card>
        <CardHeader>
          {/* add one icon also */}
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>{job.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{job.location}</p>
          <p>{job.name}</p>
          <Button onClick={() => setIsDrawerOpen(true)} className="mt-5">
            View Details
          </Button>
        </CardContent>
      </Card>
      <DrawerContent className="p-5 h-60">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold flex justify-between items-center">
            {job.title}
            <div className="flex items-center gap-2">
              <Button onClick={handleJobApply}>Apply</Button>
              <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
            </div>
          </DrawerTitle>
          <DrawerDescription className="flex items-center gap-2">
            {job.description}
            {job.location}
          </DrawerDescription>
          <div>
            <p>experience: {job.experience}</p>
          </div>
          <div>
            <p>{job.type}</p>
          </div>
          <div>
            <div>
              {job?.skills?.split(",").map((skill, idx) => (
                <h2 key={idx}>{skill}</h2>
              ))}
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CandidateJobCard;
