import React from 'react';
import Menu from "./componentes/Menu.js";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./componentes/BannerMain.js";
import Carousel from "./componentes/Carousel.js";
import Footer from "./componentes/Footer.js";

/*
  ANOTAÇÕES:
    - Hot reload é quando a página atualiza
    sozinha quando editamos este arquivo e depois damos CTRL + S.
    - Tudo que está dentro dos parentes do return da função App
    não é HTML, é JSX (JavaScript XML).
*/


function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <Carousel
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
    </div>
  );
}

export default App;