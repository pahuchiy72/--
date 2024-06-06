import React from 'react';
// import User from './User.jsx';

function WelcomeComponent({ user }) {
  if (user.isLoggedIn) {
    return <div>Ласкаво просимо, {user.name}</div>;
  }
  return <button>Логін</button>
}
export default WelcomeComponent;
