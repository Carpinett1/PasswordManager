import { useState } from 'react';

import { FormProps, FormData } from '../types';

function Form({ displayForm, displayBtn }: FormProps) {
  const [data, setData] = useState<FormData>({
    service: '',
    login: '',
    senha: '',
    url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    displayForm(false);
    displayBtn(true);
  };

  const validateForm = () => {
    const service = data.service.length > 0;
    const login = data.login.length > 0;
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,16}$/;
    const senha = regex.test(data.senha);
    return service && login && senha;
  };

  return (
    <form>
      <label htmlFor="service">Nome do Serviço</label>
      <input type="text" name="service" id="service" onChange={ handleChange } />

      <label htmlFor="login">Login</label>
      <input type="text" name="login" id="login" onChange={ handleChange } />

      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" onChange={ handleChange } />

      <label htmlFor="url">URL</label>
      <input type="text" name="url" id="url" onChange={ handleChange } />

      <button type="submit" disabled={ !validateForm() }>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
