// --- Pacotes ---
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// --- Componentes ---
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import FormField from '../componentes/FormField.js';
import useForm from '../componentes/useForm.js';
import Button from '../componentes/Button.js';

// --- Funcoes
import videosR from '../functions/videosData.js';
import categoriasR from "../functions/categoriesData.js";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategoria = categorias.map(({ titulo }) => titulo);
  const {handleChange, valores} = useForm({
    titulo: "",
    url: "",
    categoria: ""
  });

  function handleSubmit(e){
    e.preventDefault();
        
    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === valores.categoria;
    })
    
    videosR.Create({
      titulo: valores.titulo,
      url: valores.url,
      categoriaId: categoriaEscolhida.id,
    })
    .then(() => {
      alert("Cadastrado com sucesso!");
      history.push("/");
    })
  }

  useEffect(() => {
    categoriasR
    .getAll()
    .then((categoriasDoServidor) => {
      setCategorias(categoriasDoServidor);
    })
  }, [])

  return(
    <PaginaPadrao>
      <h1 style={{'textAlign': 'center'}}>
        Cadastro de video
      </h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
        
        <FormField
          label="URL"
          type="text"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />
        
        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          sugestoes={titulosCategoria}
        />
        
        <div style={{textAlign: 'center'}}>
          <Button
            type="submit"
            style={{background: 'var(--black)'}}
          >
            Cadastrar
          </Button>
        </div>
      </form>
      <Link to="/cadastro/categoria">
        <p style={{'textAlign': 'center'}}>
          Cadastre uma categoria
        </p>
      </Link>
    </PaginaPadrao>
  )
}

export default CadastroVideo;