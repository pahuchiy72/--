import React from 'react';
import EuropeanChampionship from './EuropeanChampionship.jsx';

function TeamList(props) {
  const teams = props.teams;
  const teamItems = teams.map((team) => (
    <EuropeanChampionship key={team.id} team={team} />
  ));
  return (
    <div className="bg-lime-400 rounded-lg  mx-10">
      <h1 style={{ textAlign: 'center' }}>Група Е коефіцієнти на перемогу</h1>
      {teamItems}
    </div>
  );
}
export default TeamList;
