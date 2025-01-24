"use client";

import { getCandidateDetailsById, updateJobApplication } from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://pazidwcerbvmwdkliftv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhemlkd2NlcmJ2bXdka2xpZnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MDI2NTYsImV4cCI6MjA1MzE3ODY1Nn0.tGUZvMdY-Y9YceO_Yh-tRHm1eNjZCHWaFjhY85LRHiY"
);

const CandidateList = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobApplicationList,
  setCurrentCandidateModal,
  currentCandidateModal,
}) => {
  const handleFetchUserById = async (id) => {
    const data = await getCandidateDetailsById(id);
    console.log(data);

    if (data) {
      setCurrentCandidateDetails(data);
      setCurrentCandidateModal(true);
    }
  };

  const handlePreviewResume = async () => {
    const { data } = supabaseClient.storage
      .from("pathway-job-public")
      .getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);

    const a = document.createElement("a");
    a.href = data?.publicUrl;
    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleUpdateJobStatus = async (status) => {
    let cpyJobApplicants = [...jobApplicationList];
    const indexOfCurrentJobApplicant = cpyJobApplicants.findIndex(
      (item) => item.candidateUserId === currentCandidateDetails?.userId
    );
    const jobApplicantsToUpdate = {
      ...cpyJobApplicants[indexOfCurrentJobApplicant],
      status:
        cpyJobApplicants[indexOfCurrentJobApplicant].status.concat(status),
    };

    console.log(jobApplicantsToUpdate, "jobApplicantsToUpdate");
    await updateJobApplication(jobApplicantsToUpdate, "/jobs");
  };

  console.log(jobApplicationList);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {jobApplicationList &&
          jobApplicationList?.map((item, idx) => (
            <div key={idx} className="flex items-center p-3 gap-3 shadow-lg">
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <Button
                onClick={() => handleFetchUserById(item?.candidateUserId)}
              >
                View Profile
              </Button>
            </div>
          ))}
      </div>
      <Dialog
        open={currentCandidateModal}
        onOpenChange={() => {
          setCurrentCandidateModal(false);
          setCurrentCandidateDetails(null);
        }}
      >
        <DialogContent>
          <DialogTitle>{""}</DialogTitle>
          <div>
            Name: {currentCandidateDetails?.candidateInfo.name},{" "}
            {currentCandidateDetails?.email}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handlePreviewResume}>Resume</Button>
            <Button
              onClick={() => handleUpdateJobStatus("selected")}
              disabled={
                jobApplicationList
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplicationList
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplicationList
                .find(
                  (item) =>
                    item.candidateUserId === currentCandidateDetails?.userId
                )
                ?.status.includes("selected")
                ? "Selected"
                : "Select"}
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("rejected")}
              disabled={
                jobApplicationList
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplicationList
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplicationList
                .find(
                  (item) =>
                    item.candidateUserId === currentCandidateDetails?.userId
                )
                ?.status.includes("rejected")
                ? "Rejected"
                : "Reject"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
