export default function ReviewCard({ review }) {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <div dangerouslySetInnerHTML={{ __html: review.content }}></div>
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </li>
  );
}