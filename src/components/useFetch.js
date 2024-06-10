import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(url);
        if (!responce.ok) {
          throw new Error('помилка мережі');
        }
        const jsonData = await responce.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
