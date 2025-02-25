import { useState } from 'react';
import './App.css';

function Counter() {
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
      <h1>React Exemplos</h1>
      <p>O nome atualizado: {dados.atualiza("Gerson")}</p>
      <p>Endereço: {dados.endereco.rua}, {dados.endereco.numero} - {dados.endereco.complemento[1]}</p>
      <button onClick={updateCount}>Clique aqui</button>
      <p>Contador: {count}</p>
    </div>
  );
}

export default Counter;
