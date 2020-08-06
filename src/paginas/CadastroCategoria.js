import React, { useState, useEffect } from 'react';
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import { Link } from 'react-router-dom';
import FormField from '../componentes/FormField.js';
import Button from '../componentes/Button.js';

function CadastroCategoria() {
	/* Objeto JS (muito similar a um dicionario em Python) */
	const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  
  /*
		categorias e valores são variaveis de estado que armazenam o(s) valor(es) inicial(ais).
		O que está dentro dos parenteses de useState é/são o(s) valor(es) inicial(ais).
		useState retorna um par de valores: o valor atual (categorias e valores) e uma funcao que muda este valor (setCategorias e setValues).
  */
  const [categorias, setCategorias] = useState([]);
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

  /* Função que lida com o evento submit (quando se envia um formulario) */
  function handleSubmit(infosDoEvento) {
	  infosDoEvento.preventDefault();

	  setCategorias([
	    ...categorias,
	    valores,
	  ]);

	  setValores(valoresIniciais);
	}

  /*
    - Usamos useEffect quando queremos que algo aconteça.
    - Primeiro parametro: O que queremos que aconteça.
    - Segundo parametro (opcional): Quando queremos que aconteça (no caso, quando quais coisas atualizarem, faça o que está no primeiro parametro).
  */
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL).then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);
	
	return(
		<PaginaPadrao>
			<h1 style={{textAlign: 'center'}}>Cadastro de categoria: <span style={{'color': 'var(--primary)'}}>{valores.nome}</span></h1>
			
			<form onSubmit={handleSubmit}>
        
        <FormField label="Nome da categoria" type="text" name="nome" value={valores.nome} onChange={handleChange} />
        
        <FormField label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange} />
        
        <FormField label="Cor" type="color" name="cor" value={valores.cor} onChange={handleChange} />
        
        <div style={{textAlign: 'center'}}><Button style={{background: 'var(--black)'}}>Cadastrar</Button></div>

      </form>

      <ul>
        {categorias.map((categoria) => {
        	return (
        		<li key={`${categoria.id}`}>
        			{categoria.nome}
        		</li>
        	);
        })}
      </ul>

		</PaginaPadrao>
	)
}

export default CadastroCategoria;