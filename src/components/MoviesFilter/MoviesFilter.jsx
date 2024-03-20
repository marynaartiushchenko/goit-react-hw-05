import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const findMoviesByTitle = query => {
    params.set('query', query);
    setParams(params);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.query.value.trim();

    if (searchValue === '') {
      toast('Please, enter movie title for searching!');

      return;
    }

    findMoviesByTitle(searchValue);
    onSubmit(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="" name="query" />
      <button type="submit">
        Find
      </button>
      <Toaster />
    </form>
  );
}