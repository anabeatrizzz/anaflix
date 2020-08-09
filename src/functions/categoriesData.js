import URL from '../componentes/URL.js';

const URL_CATEGORIES = `${URL}/categorias`;

function getAllWithVideos(){
	return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
		if(respostaDoServidor.ok){
			const resposta = await respostaDoServidor.json();
			return resposta;
		}
		throw new Error("Não deu pra pegar os dados");
	});
}

export default { getAllWithVideos };