const CommonLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Navbar */}

      {/* Main content */}
      <main>{children}</main>

      {/* Navbar */}
    </div>
  );
};

export default CommonLayout;
