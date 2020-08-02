import React from 'react';
import Menu from './Menu.js';
import Footer from './Footer.js';
import styled from 'styled-components';

const Main = styled.main`
	background-color: var(--grayDark);
	color: var(--white);
	flex: 1;
	padding-top: 50px;
	padding-left: 5%;
	padding-right: 5%;
`

function PaginaPadrao({ children }){
	return (
		<>
			<Menu />
				<Main>
					{ children }
				</Main>
			<br />
			<Footer />
		</>
	)
}

export default PaginaPadrao;