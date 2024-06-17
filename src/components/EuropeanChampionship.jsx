function EuropeanChampionship(props) {
  return (
    <div
      style={{
        fontFamily: 'Montserrat sans-serif',
        fontWeight: 'bold',
        marginTop: '5px',
        }}
    >
      <h3
        style={{
          backgroundColor: 'lightBlue',
          borderRadius: '8px',
          display: 'inline-block',
          width: '146px',
          height: '30px',
          boxSizing: 'border-box',
          padding: '3px',
        }}
      >
        {props.team.name}
      </h3>
      <p
        style={{
          backgroundColor: 'yellow',
          width: '146px',
          borderRadius: '8px',
          display: 'inline-block',
          marginRight: '5px',
          height: '30px',
          padding: '3px',
        }}
      >
        {props.team.odds}
      </p>
    </div>
  );
}
export default EuropeanChampionship;
