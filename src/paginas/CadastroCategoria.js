import React from 'react';
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import { Link } from 'react-router-dom';
import { EstiloH1 } from './CadastroVideo-css.js';

function CadastroVideo() {
	return(
		<PaginaPadrao>
			<EstiloH1>Cadastro de categoria</EstiloH1>
		</PaginaPadrao>
	)
}

export default CadastroVideo;