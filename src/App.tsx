import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Password from './components/Password';
import { FormData, FormAndId } from './types';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [passwordList, setPasswordList] = useState<FormAndId[]>([]);
  const [hidePassword, setHidePassword] = useState(false);

  const addPassword = (formInfo: FormData) => {
    const passwordAndId = { ...formInfo, id: Date.now() };
    setPasswordList([...passwordList, passwordAndId]);
  };

  const handleDelete = (id: number) => {
    setPasswordList(passwordList.filter((password) => password.id !== id));
  };

  const onClick = () => setDisplayForm(true);

  return (
    <>
      <main>
        <h1>Gerenciador de senhas</h1>
        {!displayForm
          && <button className="btn" onClick={ onClick }>Cadastrar nova senha</button>}
        {displayForm
          && <Form displayForm={ setDisplayForm } handleSubmit={ addPassword } />}
      </main>
      <section className="password-container">
        {passwordList.length === 0
          ? (
            <div className="nopswd">
              <hr />
              <h2>Nenhuma Senha Cadastrada</h2>
              <hr />
            </div>
          )
          : (
            <div className="inner-container">
              <label htmlFor="show-password">
                Esconder Senhas
                <input
                  type="checkbox"
                  id="show-password"
                  onChange={ () => setHidePassword(!hidePassword) }
                />
              </label>
              <div className="psw-card-cont">
                {passwordList.map((elem) => (
                  <Password
                    key={ elem.id }
                    formData={ elem }
                    handleDelete={ handleDelete }
                    hidePassword={ hidePassword }
                  />
                ))}
              </div>
            </div>
          ) }
      </section>
    </>
  );
}

export default App;
