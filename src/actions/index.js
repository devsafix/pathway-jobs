"use server";

import connectToDB from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";

// create profile action
export const createProfile = async (formData, pathToRevalidate) => {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
};

// get profile action
export const fetchProfileAction = async (id) => {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });
  return JSON.parse(JSON.stringify(result));
};

// create job action
export const postNewJob = async (formData, pathToRevalidate) => {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
};

// get job for recruiter action
export const fetchJobsForRecruiter = async (id) => {
  await connectToDB();
  const result = await Job.find({ recruiterId: id });
  return JSON.parse(JSON.stringify(result));
};

// get job for candidate action
export const fetchJobsForCandidate = async () => {
  await connectToDB();
  const result = await Job.find();
  return JSON.parse(JSON.stringify(result));
};

// apply for job action
export const applyForJob = async (formData, pathToRevalidate) => {
  await connectToDB();
  await Application.create(formData);
  revalidatePath(pathToRevalidate);
};

// get applications for candidate action
export const fetchApplicationsForCandidate = async (id) => {
  await connectToDB();
  const result = await Application.find({ candidateUserId: id });
  return JSON.parse(JSON.stringify(result));
};

// get applications for recruiter action
export const fetchApplicationsForRecruiter = async (id) => {
  await connectToDB();
  const result = await Application.find({ recruiterUserId: id });
  return JSON.parse(JSON.stringify(result));
};

// get candidate details by candidate id
export const getCandidateDetailsById = async (id) => {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });
  return JSON.parse(JSON.stringify(result));
};

// update job application action
export const updateJobApplication = async (data, pathToRevalidate) => {
  await connectToDB();
  const {
    recruiterUserId,
    candidateUserId,
    name,
    email,
    status,
    jobId,
    jobAppliedDate,
    _id,
  } = data;
  const result = await Application.findOneAndUpdate(
    { _id: _id },
    {
      recruiterUserId,
      candidateUserId,
      name,
      email,
      status,
      jobId,
      jobAppliedDate,
    },
    { new: true }
  );
  revalidatePath(pathToRevalidate);
};
