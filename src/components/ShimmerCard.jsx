const ShimmerCard = () => {
  return (
    <div className="relative flex flex-col gap-4 px-3 pt-3 pb-5 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-lg animate-pulse overflow-hidden">
      <div className="absolute top-3 right-3 bg-gray-300 h-6 w-16 rounded-full"></div>
      <div className="absolute top-3 left-3 bg-gray-200 h-6 w-20 rounded-full"></div>

      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        <div className="h-full w-full bg-gray-300 rounded-xl"></div>
      </div>

      <div className="h-5 w-3/4 bg-gray-300 rounded-md mt-2"></div>
      <div className="h-4 w-full bg-gray-200 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
    </div>
  );
};

export default ShimmerCard;
