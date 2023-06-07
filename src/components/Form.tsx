function Form() {
  return (
    <form>
      <label htmlFor="service">Nome do Serviço</label>
      <input type="text" name="service" id="service" />

      <label htmlFor="login">Login</label>
      <input type="text" name="login" id="login" />

      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" />

      <label htmlFor="url">URL</label>
      <input type="text" name="url" id="url" />

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
