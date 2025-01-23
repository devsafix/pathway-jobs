"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { use, useEffect, useState } from "react";
import CommonForm from "../common-form";
import {
  candidateOnboardFromControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFromControls,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfile, getProfile } from "@/actions";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://pazidwcerbvmwdkliftv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhemlkd2NlcmJ2bXdka2xpZnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MDI2NTYsImV4cCI6MjA1MzE3ODY1Nn0.tGUZvMdY-Y9YceO_Yh-tRHm1eNjZCHWaFjhY85LRHiY"
);

const OnBoard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );

  const [file, setFile] = useState(null);

  const currentAuthUser = useUser();

  const { user } = currentAuthUser;

  const createProfileAction = async () => {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateFormData,
            userId: user?.id,
            email: user?.emailAddresses[0].emailAddress,
            role: "candidate",
            isPremiumUser: false,
          }
        : {
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

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const uploadImage = async () => {
        const { data, error } = await supabaseClient.storage
          .from("pathway-job")
          .upload(`/public/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (data) {
          setCandidateFormData({
            ...candidateFormData,
            resume: data.path,
          });
        } else {
          console.log(error);
        }
      };
      uploadImage();
    }
  }, [file]);

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
            handleFileChange={handleFileChange}
            action={createProfileAction}
          />
        </TabsContent>
        <TabsContent value="recruiter" className="mt-4">
          <CommonForm
            formControls={recruiterOnboardFromControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            action={createProfileAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
