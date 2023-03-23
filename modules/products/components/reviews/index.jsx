import React from "react";
import CardReview from "./card";
import FormReview from "./form";
import { ReviewsContainer, Title } from "./styled";
import moment from "moment";

const Reviews = ({ reviews, loading }) => {
  return (
    <div>
      <Title>Reviews ({reviews?.length})</Title>
      <FormReview />
      <ReviewsContainer>
        {reviews?.map((review, index) => {
          const date = moment(review.date).fromNow();
          return <CardReview key={index} review={review} date={date} />;
        })}
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;
