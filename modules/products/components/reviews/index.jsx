import React from "react";
import CardReview from "./card";
import FormReview from "./form";
import { ReviewsContainer, ReviewsParent, Title } from "./styled";
import moment from "moment";
import ReviewSkeleton from "../../../../components/utils/loaders/skeleton";

const Reviews = ({ reviews, loading }) => {
  return (
    <ReviewsParent>
      <Title>Reviews ({reviews?.length || 0})</Title>
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
    </ReviewsParent>
  );
};

export default Reviews;
