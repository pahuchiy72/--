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
      <p
        style={{
          fontFamily: 'Arial, Verdana, Helvetica, sans-serif',
          fontSize: '90%',
          background: 'PaleGoldenRod',
          color: 'black',
          display: 'inline-block',
        }}
      >
        Привітання, {user.names}
      </p>
      <p  style={{
          fontFamily: 'Arial, Verdana, Helvetica, sans-serif',
          fontSize: '90%',
          background: 'Thistle',
          color: 'black',
        }}>Жарт про Чака Норріса: {data.value}</p>
    </div>
  );
}

export default Joke;
