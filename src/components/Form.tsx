import { useState } from 'react';

import Swal from 'sweetalert2';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { FormProps, FormData, Validation } from '../types';

function Form({ displayForm, handleSubmit }: FormProps) {
  const [data, setData] = useState<FormData>({
    service: '',
    login: '',
    senha: '',
    url: '',
  });

  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const minimo8CaracteresRegex = /^.{8,}$/;
  const maximo16CaracteresRegex = /^.{1,16}$/;
  const letrasENumerosRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const caractereEspecialRegex = /^(?=.*[@$!%*?&]).+$/;

  const [validation, setValidation] = useState<Validation>({
    valid1: invalid,
    valid2: invalid,
    valid3: invalid,
    valid4: invalid,
  });

  const handlepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      senha: e.target.value,
    });
    const senha = e.target.value;
    const req1 = senha.length >= 8;
    const req2 = senha.length > 0 && senha.length <= 16;
    const req3 = letrasENumerosRegex.test(senha);
    const req4 = caractereEspecialRegex.test(senha);
    setValidation({
      valid1: req1 ? valid : invalid,
      valid2: req2 ? valid : invalid,
      valid3: req3 ? valid : invalid,
      valid4: req4 ? valid : invalid,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const service = data.service.length > 0;
    const login = data.login.length > 0;
    const senha = minimo8CaracteresRegex.test(data.senha)
      && maximo16CaracteresRegex.test(data.senha)
      && letrasENumerosRegex.test(data.senha)
      && caractereEspecialRegex.test(data.senha);
    return service && login && senha;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(data);
    displayForm(false);
  };

  const [showPassword, setShowPassword] = useState<'password' | 'text'>('password');

  return (
    <section className="form-container">
      <form onSubmit={ onSubmit }>
        <label htmlFor="service">Nome do Serviço</label>
        <input type="text" name="service" id="service" onChange={ handleChange } />

        <label htmlFor="login">Login</label>
        <input type="text" name="login" id="login" onChange={ handleChange } />

        <div>
          <label htmlFor="senha">Senha</label>
          <button
            className="view-btn"
            data-testid="show-hide-form-password"
            type="button"
            onClick={ () => (showPassword === 'password'
              ? setShowPassword('text') : setShowPassword('password')) }
          >
            { showPassword === 'text' ? <AiFillEyeInvisible /> : <AiFillEye /> }
          </button>
        </div>
        <input
          type={ showPassword }
          name="senha"
          id="senha"
          onChange={ handlepassword }
        />

        <label htmlFor="url">URL</label>
        <input type="text" name="url" id="url" onChange={ handleChange } />

        <div className="form-btns">
          <button
            type="submit"
            disabled={ !validateForm() }
            onClick={ () => Swal.fire({
              icon: 'success',
              title: 'Serviço cadastrado com sucesso',
              showConfirmButton: false,
              timer: 1500,
            }) }
          >
            Cadastrar
          </button>
          <button onClick={ () => displayForm(false) }>Cancelar</button>
        </div>
      </form>
      <section className="requirements">
        <p>Sua senha deve conter os seguintes requisitos:</p>
        <p className={ validation.valid1 }>Possuir 8 ou mais caracteres</p>
        <p className={ validation.valid2 }>Possuir até 16 caracteres</p>
        <p className={ validation.valid3 }>Possuir letras e números</p>
        <p className={ validation.valid4 }>Possuir algum caractere especial</p>
      </section>
    </section>
  );
}

export default Form;
