// --- Pacotes --
import React, { useState, useEffect } from 'react';

// --- Componentes ---
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import FormField from '../componentes/FormField.js';
import Button from '../componentes/Button.js';

// --- Hooks ---
import useForm from '../componentes/useForm';

function CadastroCategoria() {
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

  const {handleChange, valores, limparForm} = useForm(valoresIniciais);

  /* Função que lida com o evento submit (quando se envia um formulario) */
  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();

    setCategorias([
      ...categorias,
      valores,
    ]);
  }

  /*
    - Usamos useEffect quando queremos que algo aconteça.
    - Primeiro parametro: O que queremos que aconteça.
    - Segundo parametro (opcional): Quando queremos que aconteça (no caso, quando quais coisas atualizarem, faça o que está no primeiro parametro).
  */
  useEffect(() => {
    const temLocalhost = window.location.href.includes('localhost')
    const URL = temLocalhost ? 'http://localhost:8080/categorias' : 'https://anaflix-alura.herokuapp.com/categorias';
    
    fetch(URL).then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        setCategorias(resposta);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  }, []);
  
  return(
    <PaginaPadrao>
      <h1 style={{textAlign: 'center'}}>
      Cadastro de categoria:
      <span style={{'color': 'var(--primary)'}}>
        {valores.nome}
      </span>
      </h1>
      
      <form onSubmit={handleSubmit}>
        limparForm()
        
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        
        <div style={{textAlign: 'center'}}>
          <Button style={{background: 'var(--black)'}}>
            Cadastrar
          </Button>
        </div>
      </form>

      <ul>
        {
          categorias.map((categoria) => {
            return (
              <li key={`${categoria.id}`}>
                {categoria.titulo}
              </li>
            );
          })
        }
      </ul>

    </PaginaPadrao>
  )
}

export default CadastroCategoria;