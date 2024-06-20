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
      <h1 className='border-4 border-orange-600 bg-orange-400 p-2 inline-block'>Чак Норріс</h1>
      <p className='border-4 border-yellow-600 bg-yellow-400 p-2 inline-block'> Новий жарт про Чака: {data.value}</p>
    </div>
  );
}

export default JokeFetch;
