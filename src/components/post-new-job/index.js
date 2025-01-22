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

const PostNewJob = ({profileInfo}) => {
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    ...initialPostNewJobFormData,
    companyName: profileInfo?.recruiterInfo?.companyName,
  });

  

  return (
    <>
      <div>
        <Button onClick={() => setShowJobDialog(true)}>Post a new job</Button>
      </div>
      <div>
        <Dialog
          open={showJobDialog}
          onOpenChange={() => setShowJobDialog(false)}
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
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PostNewJob;
