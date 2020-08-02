import React from 'react';
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {EstiloH1, EstiloP} from './CadastroVideo-css.js';

function CadastroVideo() {
	return(
		<PaginaPadrao>
			<EstiloH1>Cadastro de video</EstiloH1>
			<Link to="/cadastro/categoria">
				<EstiloP>Cadastre uma categoria</EstiloP>
			</Link>
		</PaginaPadrao>
	)
}

export default CadastroVideo;