function Form(props) {
  const { name, email, handleChange } = props;

  return (
    <form>
      <label htmlFor="name">Ім'я</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="email">ел.адреса:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p>
        Ми Вітаємо, {name || 'Євген'}! Ось ваша ел.адреса  
        {email || 'pahuchiy72@ukr.net'}.
      </p>
    </form>
  );
}
export default Form;
