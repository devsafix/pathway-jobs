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

const RecruiterJobCard = ({ job, jobApplicationList }) => {
  return (
    <Card>
      <CardHeader>
        {/* add one icon also */}
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{job.location}</p>
        <p>{job.experience}</p>
        <Button className="mt-5">
          {jobApplicationList?.filter((item) => item.jobId === job?._id).length}{" "}
          Applicants
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecruiterJobCard;
