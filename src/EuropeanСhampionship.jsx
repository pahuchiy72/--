import React from "react";

function EuropeanChampionship(props) {
  return (
    <div>
      <h3>{props.team.name}</h3>
      <p> {props.team.odds}</p>
    </div>
  );
}
export default EuropeanChampionship;