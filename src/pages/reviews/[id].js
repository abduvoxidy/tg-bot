import SEO from "components/SEO";
import ReviewsCard from "components/UI/ReviewsAndTips/ReviewsCard";
import React from "react";
import { useRouter } from "next/router";
import SingleReview from "components/UI/ReviewsAndTips/SingleReview";

const Reviews = () => {
  const router = useRouter()
  const review_id = router.query.id
  return (
    <>
      <SEO />
      <SingleReview />
    </>
  );
};

export default Reviews;
