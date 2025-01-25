"use server";

import connectToDB from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";

const stripe = require("stripe")(
  "sk_test_51PL8uBP0ShXafyXSoEPKPfk5IMX7cHHwMsYEVR0KobBjlqsm5i23S0LuGoAZywsxB2wvpSlFUvp4Ww4wbXo0H7z500KP36GHiV"
);

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

// export async function fetchJobsForCandidate(filterParams = {}) {
//   await connectToDB();
//   let updatedParams = {};
//   Object.keys(filterParams).forEach((filterKey) => {
//     updatedParams[filterKey] = { $in: filterParams[filterKey].split(",") };
//   });
//   console.log(updatedParams, "updatedParams");
//   const result = await Job.find(
//     filterParams && Object.keys(filterParams).length > 0 ? updatedParams : {}
//   );

//   return JSON.parse(JSON.stringify(result));
// }

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

export const createFilterCategoryAction = async () => {
  await connectToDB();
  const result = await Job.find();
  return JSON.parse(JSON.stringify(result));
};

//update profile action
export async function updateProfileAction(data, pathToRevalidate) {
  await connectToDB();
  const {
    userId,
    role,
    email,
    isPremiumUser,
    memberShipType,
    memberShipStartDate,
    memberShipEndDate,
    recruiterInfo,
    candidateInfo,
    _id,
  } = data;

  await Profile.findOneAndUpdate(
    {
      _id: _id,
    },
    {
      userId,
      role,
      email,
      isPremiumUser,
      memberShipType,
      memberShipStartDate,
      memberShipEndDate,
      recruiterInfo,
      candidateInfo,
    },
    { new: true }
  );

  revalidatePath(pathToRevalidate);
}

//create stripe price id based on tier selection
export async function createPriceIdAction(data) {
  const session = await stripe.prices.create({
    currency: "inr",
    unit_amount: data?.amount * 100,
    recurring: {
      interval: "year",
    },
    product_data: {
      name: "Premium Plan",
    },
  });

  return {
    success: true,
    id: session?.id,
  };
}

//create payment logic
export async function createStripePaymentAction(data) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: data?.lineItems,
    mode: "subscription",
    success_url: `${process.env.URL}/membership` + "?status=success",
    cancel_url: `${process.env.URL}/membership` + "?status=cancel",
  });

  return {
    success: true,
    id: session?.id,
  };
}

//create post action
export async function createFeedPostAction(data, pathToRevalidate) {
  await connectToDB();
  await Feed.create(data);
  revalidatePath(pathToRevalidate);
}

//fetch all posts action
export async function fetchAllFeedPostsAction() {
  await connectToDB();
  const result = await Feed.find({});

  return JSON.parse(JSON.stringify(result));
}

//update post action
export async function updateFeedPostAction(data, pathToRevalidate) {
  await connectToDB();
  const { userId, userName, message, image, likes, _id } = data;
  await Feed.findOneAndUpdate(
    {
      _id: _id,
    },
    {
      userId,
      userName,
      image,
      message,
      likes,
    },
    { new: true }
  );

  revalidatePath(pathToRevalidate);
}
