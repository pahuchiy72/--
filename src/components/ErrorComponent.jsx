function ErrorComponent({ error }) {
  return (
    <div className="rounded h-auto w-72 font-bold text-center flex-initial bg-rose-300 p-4 m-auto  -mt-14">
      {error && <p>Помилка: {error.message}</p>}
    </div>
  );
}

export default ErrorComponent;
