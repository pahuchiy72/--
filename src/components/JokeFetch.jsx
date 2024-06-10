import useFetch from "./useFetch";

function JokeFetch() {
    const {data, loading, error} = useFetch('https://api.chucknorris.io/jokes/random');

    if(loading) return <p>Зараз завантажуюсь...</p>
    if(error) return <p> якась помилка: {error.message}</p>
    return (
      <div>
        <h1>Дата</h1>
        <p> Новий чарт про Чака: {data.value}</p>
      </div>
    )
}