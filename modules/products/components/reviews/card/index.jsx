import React from "react";

const CardReview = ({ review, date }) => {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <p className=" text-lg font-semibold">{review.title}</p>
        <span className=" text-xs text-gray-400">{date}</span>
      </div>
      <div>
        {" "}
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <div className="mt-4">
        <p>{review.comment}</p>
      </div>
      <div className="mt-6 flex gap-6 text-primary_variant-400 font-semibold">
        <span className=" cursor-pointer hover:underline">Like</span>
        <span className=" cursor-pointer hover:underline">Dislike</span>
        <span className=" cursor-pointer hover:underline">Reply</span>
      </div>
    </div>
  );
};

export default CardReview;
