import useFetch from '../hooks/useFetch';
import { ClipLoader } from 'react-spinners';

function JokeFetch() {
  const { data, loading, error } = useFetch(
    'https://api.chucknorris.io/jokes/random'
  );

  if (loading) return <p> <ClipLoader color="#36d7b7" />Зараз завантажуюсь...</p>;
  if (error) return <p> якась помилка: {error.message}</p>;
  return (
    <div>
      <h1>Чак Норріс</h1>
      <p> Новий жарт про Чака: {data.value}</p>
    </div>
  );
}

export default JokeFetch;
