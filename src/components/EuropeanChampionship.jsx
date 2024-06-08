
function EuropeanChampionship(props) {
  
  return (
    <div>
      <h3
        style={{
          margin: '200px',
          padding: '14px',
          display: 'inline',
          marginRight: '25px',
        }}
      >
        {props.team.name}
      </h3>
      <p
        style={{
          margin: '10px',
          padding: '4px',
          display: 'inline',
          marginRight: '5px',
          border: '1px solid #000',
          padding: '3px',
        }}
      >
       
        {props.team.odds}
      </p>
    </div>
  );
}
export default EuropeanChampionship;
