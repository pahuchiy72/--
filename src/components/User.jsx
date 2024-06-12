function User({ user }) {
  if (user.isLoggedIn) {
    return <div>Ласкаво просимо, {user.name}</div>;
  }
  return <button>Ваш аватар</button>;
}

export default User;