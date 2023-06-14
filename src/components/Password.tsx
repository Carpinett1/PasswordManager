import { PasswordProps } from '../types';

function Password({ formData, handleDelete, hidePassword }: PasswordProps) {
  const { service, login, senha, url, id } = formData;

  return (
    <div className="psw-card">
      <a href={ url } target="_blank" rel="noreferrer">{ service }</a>
      <hr />
      <p>
        Login
      </p>
      <p className="data">{login}</p>
      <p>
        Senha
      </p>
      <p className="data">{hidePassword ? '******' : senha}</p>
      <button
        className="delete"
        data-testid="remove-btn"
        onClick={ () => handleDelete(id) }
      >
        X
      </button>
    </div>
  );
}

export default Password;
