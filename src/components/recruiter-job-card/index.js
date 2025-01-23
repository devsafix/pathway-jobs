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

const RecruiterJobCard = ({ job }) => {
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
        <Button className="mt-5">10 Applicants</Button>
      </CardContent>
    </Card>
  );
};

export default RecruiterJobCard;
