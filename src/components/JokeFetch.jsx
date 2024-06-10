import useFetch from '../hooks/useFetch';

function JokeFetch() {
  const { data, loading, error } = useFetch(
    'https://api.chucknorris.io/jokes/random'
  );

  if (loading) return <p>Зараз завантажуюсь...</p>;
  if (error) return <p> якась помилка: {error.message}</p>;
  return (
    <div>
      <h1>Чак Норріс</h1>
      <p> Новий жарт про Чака: {data.value}</p>
    </div>
  );
}

export default JokeFetch;
