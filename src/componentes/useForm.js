// --- Pacotes ---
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      /* As reticencias aqui representam "tudo que ja estiver lá mais valores" */
      ...valores,
      [chave]: valor,
    });
  }

  /* Função que lida com o evento Change (quando se escreve em um input) */
  function handleChange(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function limparForm() {
    setValores(valoresIniciais);
  }

  return { valores, handleChange, limparForm };
}

export default useForm;