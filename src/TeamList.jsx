import React from 'react';
import EuropeanChampionship from './EuropeanChampionship.jsx';

function TeamList(props) {
    
  const teams = props.teams;
  const teamItems = teams.map((team) => (
    <EuropeanChampionship key={team.id} team={team} />
  ));
  return (
    <div>
      <h1>Група Е</h1>
      {teamItems}
    </div>
  );
}
export default TeamList;
