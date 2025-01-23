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

const CandidateJobCard = ({ job }) => {
  return (
    <Card>
      <CardHeader>
        {/* add one icon also */}
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{job.location}</p>
        <p>{job.name}</p>
        <Button className="mt-5">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default CandidateJobCard;
