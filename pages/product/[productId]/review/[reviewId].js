import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <h2>
      The review {reviewId} of product {productId}{" "}
    </h2>
  );
};

export default Review;
