import { currentUser } from "@clerk/nextjs/server";
import Navbar from "../navbar";
import { fetchProfileAction } from "@/actions";

const CommonLayout = async ({ children }) => {
  const user = await currentUser();
    const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Navbar */}
      <Navbar profileInfo={profileInfo} user={JSON.parse(JSON.stringify(user))} />
      {/* Main content */}
      <main>{children}</main>

      {/* Navbar */}
    </div>
  );
};

export default CommonLayout;
