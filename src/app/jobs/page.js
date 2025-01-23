import {
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

  if (profileInfo?.role === "candidate") {
    return (
      <div>
        <JobListing
          user={JSON.parse(JSON.stringify(user))}
          profileInfo={profileInfo}
          jobListForCandidate={jobListForCandidate}
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
      />
    </div>
  );
};

export default JobsPage;
