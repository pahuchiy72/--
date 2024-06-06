function ErrorComponent({ error }) {
  return <div>{error && <p>Помилка: {error.message}</p>}</div>;
}

export default ErrorComponent;