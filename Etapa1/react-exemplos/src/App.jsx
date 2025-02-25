import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  const dados = {
    nome: "fulano",
    atualiza: (novo_nome) => `novo nome é ${novo_nome}`,
    endereco: {
      rua: "xyz",
      numero: 111,
      complemento: ["casa", "na esquina do supermercado ABC"]
    }
  };

  return (
    <div>
      <header>
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </header>
      <h1>React Exemplos</h1>
      <p>O nome atualizado: {dados.atualiza("Arthur")}</p>
      <p>Endereço: {dados.endereco.rua}, {dados.endereco.numero} - {dados.endereco.complemento[1]}</p>
      <button onClick={updateCount}>Clique aqui</button>
      <p>Contador: {count}</p>
    </div>
  );
}

export default App;
