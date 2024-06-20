import useFetch from '../hooks/useFetch';
import UserContext from '../context/user';
import { useContext } from 'react';
import { PacmanLoader } from 'react-spinners';

function Joke() {
  const user = useContext(UserContext);
  const { data, loading, error } = useFetch(
    'https://api.chucknorris.io/jokes/random'
  );

  if (loading)
    return (
      <p>
        Завантажується...
        <PacmanLoader color="#d63678" />
      </p>
    );
  if (error) return <p>,,,: {error.message}</p>;

  return (
    <div>
      <p className="h-12 w-auto font-bold  p-3 bg-gradient-to-r from-blue-400 to-gray-100 in">
        Привітання, {user.names}
      </p>
      <p className="h-12 w-auto p-3 font-bold bg-gradient-to-r from-transparent to-blue-400">
        Жарт про Чака Норріса: {data.value}
      </p>
    </div>
  );
}

export default Joke;
