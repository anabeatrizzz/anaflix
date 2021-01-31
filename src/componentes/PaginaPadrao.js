// --- Pacotes ---
import React from 'react';
import styled from 'styled-components';

// --- Componentes ---
import Menu from './Menu.js';
import Footer from './Footer.js';

function PaginaPadrao({ children, paddingAll }){
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
          { children }
        </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => `
    padding: ${paddingAll};
  `}
`;

export default PaginaPadrao;