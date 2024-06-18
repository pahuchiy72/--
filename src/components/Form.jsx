function Form(props) {
  const { name, email, handleChange } = props;

  return (
    <form>
      <label htmlFor="name">Ім'я</label>
      <input
        style={{
          color: 'darkmagenta',
          backgroundColor: 'blanchedalmond',
          fontSize: '200%',
          textAlign: 'center',
          fontFamily: 'Arial, Verdana, sans-serif',
          width: '400px',
          borderRadius: '10px',
          margin: '20px',
        }}
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="email">ел.адреса:</label>
      <input
        style={{
          color: 'darkmagenta',
          backgroundColor: 'blanchedalmond',
          fontSize: '200%',
          textAlign: 'center',
          fontFamily: 'Arial, Verdana, sans-serif',
          width: '400px',
          borderRadius: '10px',
          margin: '20px',
        }}
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p
        style={{
          fontSize: '36px',
          fontFamily: 'Times, serif',
          color: 'red',
          backgroundColor: 'Aquamarine',
        }}
      >
        Ми Вітаємо, {name}!   Ось ваша ел.адреса: {}
        {email}.
      </p>
    </form>
  );
}
export default Form;
