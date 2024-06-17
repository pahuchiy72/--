function UserProfile({ user }) {
  return (
    <div>
      {user.isLoggedIn ? (
        <div
          style={{
            backgroundColor: 'LightBlue',
            fontSize: '120%',
            fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
            color: '#333366',
          }}
        >
          Профіль користувача: {user.name}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: 'LightGrey',
            fontSize: '120%',
            fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
            color: '#333366',
          }}
        >
          Користувач не увійшов в систему 🤷‍♂️
        </div>
      )}
    </div>
  );
}
export default UserProfile;
