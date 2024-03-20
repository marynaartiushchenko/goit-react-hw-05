import ActorCard from '../ActorCard/ActorCard';

export default function ActorsGallery({ data }) {
  return (
    <ul>
      {data.map(cardData => (
        <ActorCard key={cardData.id} data={cardData} />
      ))}
    </ul>
  );
}