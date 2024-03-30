export default function ActorsGallery({ data }) {
  const defaultActorImage = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
      <div key={data.id}>
          <img
            src={data.profile_path ? `https://image.tmdb.org/t/p/w200${data.profile_path}` : defaultActorImage}
            width={250}
            height={400}
            alt={data.name}
            
          />
          <p >
            {data.name}, 
            Character: 
            {data.character}
          </p>
        </div>
  
  );
}