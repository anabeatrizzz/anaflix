import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import CadastroVideo from './paginas/CadastroVideo.js';
import CadastroCategoria from './paginas/CadastroCategoria.js';

/*
	- BrowserRouter: As rotas da aplicação (/, /cadastro, /cadastro/video)
	- Switch: Indica quais as entradas possiveis. Então se a entrada for /, direcione para o componente App. Entradas são indicadas uma por vez usando varios <Route />
*/
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

/*
	- Estamos colocando o JSX da função APP dentro do elemento
com id="root" em index.html
	- exact significa que deve ser acessado aquele path exato para que o componente seja mostrado, se não, mostra uma pagina em branco
		<Route path="/" component={App} exact />
		<Route path="/cadastro/video" component={CadastroVideo} />
		Se for acessado a rota /cadastro/video, CadastroVideo aparece, mas se tirarmos o exact, é o componenete App que aparece. O motivo é porque ja foi encontrado o / e a ordem de cada Route faz diferença.
*/

function Pagina404(){
	return (
		<div>
			<h1>Página 404</h1>
			<h2>Esta página não existe. <Link to="/">Volte para a home</Link></h2>
		</div>
	)
}

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  		<Route path="/" component={App} exact />
  		<Route path="/cadastro/video" component={CadastroVideo} />
  		<Route path="/cadastro/categoria" component={CadastroCategoria} />
  		<Route component={Pagina404} exact />
  	</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);