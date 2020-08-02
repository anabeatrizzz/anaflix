import React from 'react';
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import { Link } from 'react-router-dom';
import { EstiloH1 } from './CadastroVideo-css.js';

function CadastroCategoria() {
	return(
		<PaginaPadrao>
			<EstiloH1>Cadastro de categoria</EstiloH1>
			<form>
        <label> Nome da Categoria:
          <input type="text" />
        </label>
        <button>Cadastrar</button>
      </form>
		</PaginaPadrao>
	)
}

export default CadastroCategoria;