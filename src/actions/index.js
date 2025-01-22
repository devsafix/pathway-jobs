"use server";

import connectToDB from "@/database";
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
export const createJob = async (formData, pathToRevalidate) => {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
};


