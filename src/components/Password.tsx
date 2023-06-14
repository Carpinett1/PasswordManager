import { PasswordProps } from '../types';

function Password({ formData, handleDelete, hidePassword }: PasswordProps) {
  const { service, login, senha, url, id } = formData;

  return (
    <div>
      <a href={ url } target="_blank" rel="noreferrer">{ service }</a>
      <p>
        Login
      </p>
      <span>{login}</span>
      <p>
        Senha
      </p>
      <span>{hidePassword ? '******' : senha}</span>
      <button
        data-testid="remove-btn"
        onClick={ () => handleDelete(id) }
      >
        X
      </button>
    </div>
  );
}

export default Password;
