<p align="center">
  <img width="50%" src="https://i.ibb.co/CBvJjbd/react-img.png" alt="Icon-Imersao-Alura"/>
</p>


# Índice
* [O que aprendi? :thinking:](#o-que-aprendi-thinking)
* [Configurações padrões :wrench:](#configurações-padrões-wrench)


Este é meu primeiro projeto usando React e...


# [O que aprendi? :thinking:](#índice)
- *Hot reload* é quando a página atualiza sozinha quando editamos um arquivo e depois salvamos.
- Tudo que está dentro dos parentes do `return` da função `App` não é HTML, mas sim JSX (JavaScript XML).
- No JS a palavra class é reservada, então usa-se `className` para referenciar classes do css.
- Usa-se a lib `styled-components` para escrevermos css dentro de um arquivo js.
- O conceito de Single Page Application envolve não ter requisições (sem refresh) quando ocorre uma transição entre páginas. Uma página unica que representa a aplicação como um todo.
- Todo componente é uma função.
- Usa-se `<> </>` para não se ter que escrever uma enclosing tag.
- Exportando função para que possamos usá-la em outra página do projeto: `export default NomeDaFuncao`
- `BrowserRouter`: As rotas da aplicação (/, /cadastro, /cadastro/video)
- `Switch`: Indica quais as entradas possíveis. Então se a entrada for /, direcione para o componente `App`. Entradas são indicadas uma por vez usando vários `<Route />`
- Em `App.js` estamos colocando o JSX da função `App` dentro do elemento com `id="root"` em index.html
- O atributo `exact` significa que deve ser acessado aquele path exato para que o componente seja mostrado, se não, mostra uma página em branco.
	- `<Route path="/" component={App} exact />`
	- `<Route path="/cadastro/video" component={CadastroVideo} />`
	- Se for acessado a rota `/cadastro/video`, `CadastroVideo` aparece, mas se tirarmos o `exact`, é o componente `App` que aparece. O motivo é porque já foi encontrado o / e a ordem de cada `<Route />` faz diferença.
- CadastroCategoria.js:
	- `categorias` e `valores` são variáveis de estado que armazenam o(s) valor(es) inicial(ais).
	- O que está dentro dos parenteses de `useState` é/são o(s) valor(es) inicial(ais).
	- `useState` retorna um par de valores: o valor atual (`categorias` e `valores`) e uma função que muda este valor (`setCategorias` e `setValues`).
- Usamos `useEffect` quando queremos que algo aconteça.<br> **Primeiro parâmetro**: O que queremos que aconteça.<br> **Segundo parâmetro (opcional)**: Quando queremos que aconteça (no caso, quando quais coisas atualizarem, faça o que está no primeiro parâmetro).

# [Configurações padrões :wrench:](#índice)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
