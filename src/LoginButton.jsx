function LoginButton({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <button>Вихід</button> : <button>Логін</button>}</div>
  );
}
export default LoginButton;