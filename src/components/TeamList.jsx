import React from 'react';
import EuropeanChampionship from './EuropeanChampionship.jsx';

function TeamList(props) {
  const teams = props.teams;
  const teamItems = teams.map((team) => (
    <EuropeanChampionship key={team.id} team={team} />
  ));
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="bg-lime-400  inline-block w-96 font-bold shadow-xl rounded-lg h-9 p-1">
        Група Е коефіцієнти на перемогу
      </h1>
      {teamItems}
    </div>
  );
}
export default TeamList;
