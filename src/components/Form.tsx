function Form() {
  return (
    <form action="">
      <label htmlFor="service">
        Nome do serviço
        <input type="text" name="service" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" name="login" />
      </label>
      <label htmlFor="senha">
        Senha
        <input type="text" name="senha" />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" name="url" />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
