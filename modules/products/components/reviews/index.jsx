import React from "react";
import FormReview from "./form";
import { Title } from "./styled";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <Title>Reviews ({reviews?.length})</Title>
      <FormReview />
    </div>
  );
};

export default Reviews;
