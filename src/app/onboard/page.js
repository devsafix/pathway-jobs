import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const OnBoardPage = async () => {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);
  if (profileInfo?._id) {
    if (profileInfo.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else
    return (
      <div className="p-10">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Welcome to Job Portal</h1>
          <p className="text-gray-500">Please select your role to continue</p>
        </div>
        <OnBoard />
      </div>
    );
};

export default OnBoardPage;
