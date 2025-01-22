import { fetchProfileAction } from "@/actions";
import JobListing from "@/components/job-listing";
import { currentUser } from "@clerk/nextjs/server";

const JobsPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div>
      <JobListing
        user={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
      />
    </div>
  );
};

export default JobsPage;
