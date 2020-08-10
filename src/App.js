import React, {useEffect, useState} from 'react';
import BannerMain from "./componentes/BannerMain.js";
import Carousel from "./componentes/Carousel.js";
import categoriasR from "./functions/categoriesData.js";
import PaginaPadrao from "./componentes/PaginaPadrao.js";

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
    - Usa-se <> </> para não se ter que escrever uma enclosing tag.
*/

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasR.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PaginaPadrao paddingAll={0}>
      {dadosIniciais.length === 0 && (<h1>Carregando...</h1>)}
      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0){
          return (
            <div key={categoria.id}>
              <BannerMain videoTitle="Imersão React - dia 27 de julho nos melhores home offices" videoDescription="Imersão React da Alura: 5 dias de conteúdo exclusivo para você participar desta batalha do desenvolvimento Web e aprofundar seus conhecimentos em React!" url="https://youtu.be/XJ3sr259SDI" />
              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      <br />
    </PaginaPadrao>
  );
}

/* Exportando função para que possamos usá-la em outra página do projeto */
export default App;