"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import CommonForm from "../common-form";
import { useState } from "react";
import { initialPostNewJobFormData, postNewJobControls } from "@/utils";
import { postNewJob } from "@/actions";

const PostNewJob = ({ profileInfo, user }) => {
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    ...initialPostNewJobFormData,
    companyName: profileInfo?.recruiterInfo?.companyName,
  });

  const createJob = async () => {
    await postNewJob(
      {
        ...jobFormData,
        recruiterId: user.id,
        applicants: [],
      },
      "/jobs"
    );
  };
  return (
    <>
      <div>
        <Button onClick={() => setShowJobDialog(true)}>Post a new job</Button>
      </div>
      <div>
        <Dialog
          open={showJobDialog}
          onOpenChange={() => {
            setShowJobDialog(false);
            setJobFormData({
              ...initialPostNewJobFormData,
              companyName: profileInfo?.recruiterInfo?.companyName,
            });
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Job</DialogTitle>
              {""}
            </DialogHeader>
            <div>
              <CommonForm
                buttonText={"Post Job"}
                formData={jobFormData}
                setFormData={setJobFormData}
                formControls={postNewJobControls}
                action={createJob}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PostNewJob;
