import {
  fetchApplicationsForCandidate,
  fetchApplicationsForRecruiter,
  fetchJobsForCandidate,
  fetchJobsForRecruiter,
  fetchProfileAction,
} from "@/actions";
import JobListing from "@/components/job-listing";
import { currentUser } from "@clerk/nextjs/server";

const JobsPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  const jobListForRecruiter = await fetchJobsForRecruiter(user?.id);
  const jobListForCandidate = await fetchJobsForCandidate();

  const jobApplicationList =
    profileInfo?.role === "candidate"
      ? await fetchApplicationsForCandidate(user?.id)
      : await fetchApplicationsForRecruiter(user?.id);

  if (profileInfo?.role === "candidate") {
    return (
      <div>
        <JobListing
          user={JSON.parse(JSON.stringify(user))}
          profileInfo={profileInfo}
          jobListForCandidate={jobListForCandidate}
          jobApplicationList={jobApplicationList}
        />
      </div>
    );
  }

  return (
    <div>
      <JobListing
        user={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
        jobListForRecruiter={jobListForRecruiter}
        jobApplicationList={jobApplicationList}
      />
    </div>
  );
};

export default JobsPage;
