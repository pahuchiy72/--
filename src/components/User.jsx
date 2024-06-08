function User({ user }) {
  if (user.isLoggedIn) {
    return <div>Ласкаво просимо, {user.name}</div>;
  }
  return <button>Логін</button>;
}

export default User;