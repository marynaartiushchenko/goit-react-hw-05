import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewsGallery({ reviews }) {
  if (reviews.length === 0) {
    return <p >No reviews on this movie yet</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ul>
  );
}