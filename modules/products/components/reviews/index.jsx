import React from "react";
import CardReview from "./card";
import FormReview from "./form";
import { ReviewsContainer, Title } from "./styled";
import moment from "moment";
import ReviewSkeleton from "../../../../components/utils/loaders/skeleton";

const Reviews = ({ reviews, loading }) => {
  return (
    <div className=" my-10">
      <Title>Reviews ({reviews?.length})</Title>
      <FormReview />
      <ReviewsContainer>
        {loading ? (
          <>
            <ReviewSkeleton />
            <ReviewSkeleton />
            <ReviewSkeleton />
          </>
        ) : (
          reviews?.map((review, index) => {
            const date = moment(review.date).fromNow();
            return <CardReview key={index} review={review} date={date} />;
          })
        )}
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;
