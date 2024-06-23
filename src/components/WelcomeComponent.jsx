import React from 'react';
import LoginButton from './LoginButton.jsx';
 

function WelcomeComponent({ user }) {
  return (
    <div>
      <LoginButton isLoggedIn={user.isLoggedIn} />
      {user.isLoggedIn ? <div className="rounded w-auto font-bold text-center  bg-teal-400 p-4">Ласкаво прошу, {user.name}</div> : null}
    </div>
  );
 
}
export default WelcomeComponent;
