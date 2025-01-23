"use client";

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
import { ScrollArea } from "../ui/scroll-area";
import CandidateList from "../candidate-list";

const JobApplicants = ({
  isDrawerOpen,
  setIsDrawerOpen,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  currentCandidateModal,
  setCurrentCandidateModal,
  job,
  jobApplicationList,
}) => {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent className="p-5 h-60">
        <DrawerTitle>{""}</DrawerTitle>
        <ScrollArea className="h-auto overflow-y-auto">
          <CandidateList
            currentCandidateDetails={currentCandidateDetails}
            setCurrentCandidateDetails={setCurrentCandidateDetails}
            jobApplicationList={jobApplicationList}
            currentCandidateModal={currentCandidateModal}
            setCurrentCandidateModal={setCurrentCandidateModal}
          />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default JobApplicants;
