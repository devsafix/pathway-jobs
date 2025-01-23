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

const CandidateJobCard = ({ job }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
              <Button>Apply</Button>
              <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
            </div>
          </DrawerTitle>
          <DrawerDescription>{job.description}</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CandidateJobCard;
