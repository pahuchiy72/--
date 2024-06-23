function LoginButton({ isLoggedIn }) {
  return (
    <div className="rounded w-72 mx-3.5 font-bold text-center  bg-teal-400 p-4">
      {isLoggedIn ? <button>Вихід</button> : <button type="button">Логін</button>}
    </div>
  );
}
export default LoginButton;
