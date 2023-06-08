import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayBtn, setDisplayBtn] = useState(true);

  const handleClick = () => {
    setDisplayForm(true);
    setDisplayBtn(false);
  };

  return (
    <main>
      <h1>Gerenciador de senhas</h1>
      {displayBtn
      && <button onClick={ handleClick }>Cadastrar nova senha</button>}
      {displayForm && <Form
        displayForm={ setDisplayForm }
        displayBtn={ setDisplayBtn }
      />}
    </main>
  );
}

export default App;
