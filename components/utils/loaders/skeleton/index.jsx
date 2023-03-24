import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="mt-10 flex flex-col gap-3 animate-pulse">
      <div className="bg-white w-2/4 h-2 rounded"></div>
      <div className="bg-white w-1/6 h-2 rounded"></div>
      <div className="bg-white w-full h-2 rounded"></div>
      <div className="bg-white w-2/5 h-2 rounded"></div>
    </div>
  );
};

export default ReviewSkeleton;
