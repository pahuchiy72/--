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
 
}
export default WelcomeComponent;
