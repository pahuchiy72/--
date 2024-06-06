import React from 'react';
 import EuropeanChampionship from './EuropeanСhampionship.jsx';

function TeamList(props) {
  const teams = props.teams;
  const teamItems = teams.map((team) => (
    <EuropeanChampionship key={team.id} team={team} />
  ));
  return (
    <div>
      <h1>Команди</h1>
      {teamItems}
    </div>
  );
}
export default TeamList;
