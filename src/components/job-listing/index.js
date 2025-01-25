"use client";
import { filterMenuDataArray, formUrlQuery } from "@/utils";
import PostNewJob from "../post-new-job";
import { Button } from "../ui/button";
import CandidateJobCard from "../candidate-job-card";
import RecruiterJobCard from "../recruiter-job-card";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Label } from "../ui/label";

const JobListing = ({
  user,
  profileInfo,
  jobListForRecruiter,
  jobListForCandidate,
  jobApplicationList,
  filterCategories,
}) => {
  const [filterParams, setFilterParams] = useState({});
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(getSectionID, getCurrentOption) {
    let cpyFilterParams = { ...filterParams };
    const indexOfCurrentSection =
      Object.keys(cpyFilterParams).indexOf(getSectionID);
    if (indexOfCurrentSection === -1) {
      cpyFilterParams = {
        ...cpyFilterParams,
        [getSectionID]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilterParams[getSectionID].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1)
        cpyFilterParams[getSectionID].push(getCurrentOption);
      else cpyFilterParams[getSectionID].splice(indexOfCurrentOption, 1);
    }
    setFilterParams(cpyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(cpyFilterParams));
  }

  useEffect(() => {
    setFilterParams(JSON.parse(sessionStorage.getItem("filterParams")));
  }, []);

  useEffect(() => {
    if (filterParams && Object.keys(filterParams).length > 0) {
      let url = "";
      url = formUrlQuery({
        params: searchParams.toString(),
        dataToAdd: filterParams,
      });

      router.push(url, { scroll: false });
    }
  }, [filterParams, searchParams]);

  console.log(filterCategories);

  const filterMenus = filterMenuDataArray?.map((item) => ({
    id: item.id,
    name: item.label,
    options: [
      ...new Set(
        filterCategories
          ?.map((listItem) => listItem[item.id])
          .filter((option) => option !== undefined && option !== null)
      ),
    ],
  }));

  console.log(filterMenus, "filterParams");

  return (
    <div>
      <div className="my-10 pb-3 flex justify-between items-center border-b-4">
        <h1 className="text-2xl font-bold">
          {profileInfo?.role === "candidate"
            ? "explore jobs"
            : "Jobs dashboard"}
        </h1>
        <div>
          {profileInfo?.role === "candidate" ? (
            <Menubar>
              {filterMenus?.map((filterMenu, idx) => (
                <MenubarMenu key={idx}>
                  <MenubarTrigger>{filterMenu.name}</MenubarTrigger>
                  <MenubarContent>
                    {filterMenu?.options.map((option, optionIdx) => (
                      <MenubarItem
                        key={optionIdx}
                        className="flex items-center"
                        onClick={() => handleFilter(filterMenu.id, option)}
                      >
                        <div
                          className={`h-4 w-4 border rounded border-gray-900 ${
                            filterParams &&
                            Object.keys(filterParams).length > 0 &&
                            filterParams[filterMenu.id] &&
                            filterParams[filterMenu.id].indexOf(option) > -1
                              ? "bg-black dark:bg-white"
                              : ""
                          } `}
                        />

                        <Label className="ml-3 cursor-pointer text-sm text-gray-600">
                          {option}
                        </Label>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
            </Menubar>
          ) : (
            <PostNewJob user={user} profileInfo={profileInfo} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {jobListForRecruiter &&
          jobListForRecruiter.map((job) => (
            <RecruiterJobCard
              key={job._id}
              job={job}
              jobApplicationList={jobApplicationList}
            />
          ))}
        {jobListForCandidate &&
          jobListForCandidate.map((job) => (
            <CandidateJobCard
              key={job._id}
              job={job}
              profileInfo={profileInfo}
              jobApplicationList={jobApplicationList}
            />
          ))}
      </div>
    </div>
  );
};

export default JobListing;
