import React from 'react';
import PaginaPadrao from '../componentes/PaginaPadrao.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CadastroVideo() {
	return(
		<PaginaPadrao>
			<h1 style={{'text-align': 'center'}}>Cadastro de video</h1>
			<Link to="/cadastro/categoria">
				<p style={{'text-align': 'center'}}>Cadastre uma categoria</p>
			</Link>
		</PaginaPadrao>
	)
}

export default CadastroVideo;