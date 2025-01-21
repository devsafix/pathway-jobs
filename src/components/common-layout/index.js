import { currentUser } from "@clerk/nextjs/server";
import Navbar from "../navbar";

const CommonLayout = async ({ children }) => {
  const user = await currentUser();
  

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Navbar */}
      <Navbar user={JSON.parse(JSON.stringify(user))} />
      {/* Main content */}
      <main>{children}</main>

      {/* Navbar */}
    </div>
  );
};

export default CommonLayout;
