function UserProfile({ user }) {
  return (
    <div>
      {user.isLoggedIn ? (
        <div>Профіль користувача: {user.name}</div>
      ) : (
        <div>Користувач не увійшов в систему</div>
      )}
    </div>
  );
}
export default UserProfile;