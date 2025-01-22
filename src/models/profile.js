import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: String,
  role: String,
  email: String,
  isPremiumUser: Boolean,
  memberShipType: String,
  memberShipStartDate: String,
  memberShipEndDate: String,
  recruiterInfo: {
    name: String,
    companyName: String,
    companyRole: String,
  },
  candidateInfo: {
    name: String,
    resume: String,
    currentCompany: String,
    preferedjobLocation: String,
    currentJobLocation: String,
    currentSalary: String,
    noticePeriod: String,
    skils: String,
    totalExperience: String,
    college: String,
    collegeLocation: String,
    linkedinProfile: String,
    githubProfile: String,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default Profile;
