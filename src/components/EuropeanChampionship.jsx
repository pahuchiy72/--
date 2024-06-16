function EuropeanChampionship(props) {
  return (
    <div style={{ fontFamily: 'Montserrat sans-serif', textAlign:'center' }}>
      <h3
        style={{
          margin: 'auto',
        //  height: '500px',
          display: 'inline',
          // width:'150px',
          // marginRight: '35px',
          paddingRight:'20px',
          boxSizing: 'border-box',
        }}
      >
        {props.team.name}
      </h3>
      <p
        style={{
          // margin: '10px',
          // padding: '4px',
          display: 'inline',
          marginRight: '5px',
          // border: '1px solid #000',
          // padding: '3px',
        }}
      >
        {props.team.odds}
      </p>
    </div>
  );
}
export default EuropeanChampionship;
