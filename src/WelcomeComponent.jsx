import React from 'react';
import LoginButton from './LoginButton.jsx';
// import User from './User.jsx';

function WelcomeComponent({ user }) {
  return (
    <div>
      <LoginButton isLoggedIn={user.isLoggedIn} />
      {user.isLoggedIn ? <div>Ласкаво прошу, {user.name}</div> : null}
    </div>
  );
  // if (user.isLoggedIn) {
  //   return <div>Ласкаво просимо, {user.name}</div>;
  // }
  // return <button>Логін</button>
}
export default WelcomeComponent;
