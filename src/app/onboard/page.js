import OnBoard from "@/components/on-board";

const OnBoardPage = () => {
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
