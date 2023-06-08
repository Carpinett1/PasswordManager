import { useState } from 'react';

import { FormProps, FormData, Validation } from '../types';

function Form({ displayForm, displayBtn }: FormProps) {
  const [data, setData] = useState<FormData>({
    service: '',
    login: '',
    senha: '',
    url: '',
  });

  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const [validation, setValidation] = useState<Validation>({
    valid1: invalid,
    valid2: invalid,
    valid3: invalid,
    valid4: invalid,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'senha') {
      // (minimo8CaracteresRegex.test(e.target.value))
      //   ? (setValidation({ ...validation, valid1: valid }))
      //   : (setValidation({ ...validation, valid1: invalid }));
      // if (maximo16CaracteresRegex.test(e.target.value)) {
      //   setValidation({ ...validation, valid2: valid });
      // }
      // if (!maximo16CaracteresRegex.test(e.target.value)) {
      //   setValidation({ ...validation, valid2: invalid });
      // }
      // if (letrasENumerosRegex.test(e.target.value)) {
      //   setValidation({ ...validation, valid3: valid });
      // } else {
      //   setValidation({ ...validation, valid3: invalid });
      // }
      // if (caractereEspecialRegex.test(e.target.value)) {
      //   setValidation({ ...validation, valid4: valid });
      // } else {
      //   setValidation({ ...validation, valid4: invalid });
      // }
    }
  };

  const handleCancel = () => {
    displayForm(false);
    displayBtn(true);
  };

  const minimo8CaracteresRegex = /^.{8,}$/;
  const maximo16CaracteresRegex = /^.{1,16}$/;
  const letrasENumerosRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const caractereEspecialRegex = /^(?=.*[@$!%*?&]).+$/;

  const validateForm = () => {
    const service = data.service.length > 0;
    const login = data.login.length > 0;
    const senha = minimo8CaracteresRegex.test(data.senha)
      && maximo16CaracteresRegex.test(data.senha)
      && letrasENumerosRegex.test(data.senha)
      && caractereEspecialRegex.test(data.senha);
    return service && login && senha;
  };

  return (
    <>
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
      <section>
        <p>Sua senha deve conter os seguintes requisitos:</p>
        <p className={ validation.valid1 }>Possuir 8 ou mais caracteres</p>
        <p className={ validation.valid2 }>Possuir até 16 caracteres</p>
        <p className={ validation.valid3 }>Possuir letras e números</p>
        <p className={ validation.valid4 }>Possuir algum caractere especial</p>
      </section>
    </>
  );
}

export default Form;
