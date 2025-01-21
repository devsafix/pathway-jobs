import Navbar from "../navbar";

const CommonLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>{children}</main>

      {/* Navbar */}
    </div>
  );
};

export default CommonLayout;
