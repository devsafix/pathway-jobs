"use client";

import { getCandidateDetailsById } from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

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
            <Button>Resume</Button>
            <Button>Select</Button>
            <Button>Reject</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
