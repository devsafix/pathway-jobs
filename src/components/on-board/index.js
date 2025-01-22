"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import { initialRecruiterFormData, recruiterOnboardFromControls } from "@/utils";

const OnBoard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );

  const handleTabChange = (value) => {
    setCurrentTab(value);
  };

  return (
    <div>
      <Tabs
        defaultValue={currentTab}
        onValueChange={handleTabChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="candidate">Candidate</TabsTrigger>
          <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        </TabsList>
        <TabsContent value="candidate"></TabsContent>
        <TabsContent value="recruiter" className="mt-4">
          <CommonForm
            formControls={recruiterOnboardFromControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
