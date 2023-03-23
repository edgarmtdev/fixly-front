import React from "react";
import FormReview from "./form";
import { Title } from "./styled";

const Reviews = ({ reviews, loading }) => {
  return (
    <div>
      <Title>Reviews ({reviews?.length})</Title>
      <FormReview />
      <section className=" mt-10 w-3/4">
        <div className="">
          <div className="flex gap-5 items-center">
            <p className=" text-lg font-semibold">Good Product</p>
            <span className=" text-xs text-gray-400">9 month ago</span>
          </div>
          <div>
            {" "}
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="mt-4">
            <p>
              The best product, recommended for beginners in the world of
              electronics, easy to use and resistant materials.
            </p>
          </div>
          <div className="mt-6 flex gap-6 text-primary_variant-400 font-semibold">
            <span className=" cursor-pointer hover:underline">Like</span>
            <span className=" cursor-pointer hover:underline">Dislike</span>
            <span className=" cursor-pointer hover:underline">Reply</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
