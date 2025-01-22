"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import {
  candidateOnboardFromControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFromControls,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfile } from "@/actions";

const OnBoard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );

  const currentAuthUser = useUser();

  const { user } = currentAuthUser;

  const createProfileAction = async () => {
    const data = {
      recruiterInfo: recruiterFormData,
      userId: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      role: "recruiter",
      isPremiumUser: false,
    };

    await createProfile(data, "/onboard");
  };

  const handleTabChange = (value) => {
    setCurrentTab(value);
  };

  const handleRecruiterFormValid = () => {
    return Object.values(recruiterFormData).every((value) => value !== "");
  };

  const handleCandidateFormValid = () => {
    return Object.values(candidateFormData).every((value) => value !== "");
  };

  return (
    <div className="w-full">
      <Tabs
        defaultValue={currentTab}
        onValueChange={handleTabChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="candidate">Candidate</TabsTrigger>
          <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        </TabsList>
        <TabsContent value="candidate">
          <CommonForm
            formControls={candidateOnboardFromControls}
            buttonText={"Onboard as candidate"}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            isBtnDisabled={!handleCandidateFormValid()}
          />
        </TabsContent>
        <TabsContent value="recruiter" className="mt-4">
          <CommonForm
            formControls={recruiterOnboardFromControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
            action={createProfileAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
