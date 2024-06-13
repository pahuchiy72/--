import React from 'react';
import EuropeanChampionship from './EuropeanChampionship.jsx';

function TeamList(props) {
  
    
  const teams = props.teams;
  const teamItems = teams.map((team) => (
    <EuropeanChampionship key={team.id} team={team} />
  ));
  return (
    
    <div className='bg-liam-800 rounded-lg p-4'>
      <h1>Група Е</h1>
      {teamItems}
    </div>
  );
}
export default TeamList;
