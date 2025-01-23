import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  companyName: String,
  location: String,
  type: String,
  experience: String,
  skills: String,
  recruiterId: String,
  applicants: [
    {
      userId: String,
      status: String,
      name: String,
      email: String,
    },
  ],
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;
