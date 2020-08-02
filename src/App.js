import React from 'react';
import styled from "styled-components"; 
import Menu from "./componentes/Menu.js";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./componentes/BannerMain.js";
import Carousel from "./componentes/Carousel.js";
import Footer from "./componentes/Footer.js";

/*
  ANOTAÇÕES:
    - Hot reload é quando a página atualiza
    sozinha quando editamos um arquivo e depois salvamos.
    - Tudo que está dentro dos parentes do return da função App
    não é HTML, é JSX (JavaScript XML).
    - No JS a palavra class é reservada, então usa-se ClassName para referenciar classes do css.
    - Usa-se a lib styled-components para escrevermos css dentro de um arquivo js.
    - O conceito de Single Page Application envolve não ter requisições (sem refresh) quando ocorre uma transição entre páginas. Uma página unica que representa a aplicação como um todo.
    - Todo componente é uma função.
*/

/* Criando uma variavel que contem uma div de cor de fundo grayDark. Usamos o nome desta variavel dentro da função App */
const AppWrapper = styled.div`
  background: var(--grayDark);
`

function App() {
  return (
    <AppWrapper>
      <Menu />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Footer />
    </AppWrapper>
  );
}

/* Exportando função para que possamos usá-la em outra página do projeto */
export default App;