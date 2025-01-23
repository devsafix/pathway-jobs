const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-40">
      <div className="w-8 h-8 rounded-full animate-pulse bg-black"></div>
      <div className="w-8 h-8 rounded-full animate-pulse bg-black"></div>
      <div className="w-8 h-8 rounded-full animate-pulse bg-black"></div>
    </div>
  );
};

export default Loading;
