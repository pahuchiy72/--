import useFetch from './hooks/useFetch';
import UserContext from './context/user';
import { useContext } from 'react';

function Joke() {
  const user = useContext(UserContext);
  const { data, loading, error } = useFetch(
    'https://api.chucknorris.io/jokes/random'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>,,,: {error.message}</p>;

  return (
    <div>
      <p>Привітання, {user.names}</p>
      <p>Жарт про Чака Норріса: {data.value}</p>
    </div>
  );
}

export default Joke;
