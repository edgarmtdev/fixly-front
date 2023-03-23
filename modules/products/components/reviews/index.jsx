import React from "react";
import CardReview from "./card";
import FormReview from "./form";
import { Title } from "./styled";

const Reviews = ({ reviews, loading }) => {
  return (
    <div>
      <Title>Reviews ({reviews?.length})</Title>
      <FormReview />
      <section className=" mt-10 w-3/4">
        {reviews?.map((review, index) => {
          const date = new Date(review.date).toLocaleString();
          return <CardReview key={index} review={review} date={date} />;
        })}
      </section>
    </div>
  );
};

export default Reviews;
