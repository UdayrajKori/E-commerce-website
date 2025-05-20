import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-gray-50 py-8">
      <div className="relative animate-pulse flex flex-col gap-4 px-6 pt-6 pb-8 border-2 border-slate-200 w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="absolute top-4 right-4 h-6 w-20 bg-blue-200 rounded-full"></div>
        <div className="absolute top-4 left-4 h-6 w-16 bg-gray-200 rounded-full"></div>
        <div className="w-full h-64 bg-gray-200 rounded-xl"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="flex items-center gap-4 mt-2">
          <div className="h-4 w-12 bg-yellow-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 bg-blue-200 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
