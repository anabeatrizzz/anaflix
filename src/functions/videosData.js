import URL from '../componentes/URL.js';

const URL_VIDEOS = `${URL}/videos`;

function Create(objDoVideo){
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(objDoVideo),
  })
  .then(async (respostaDoServidor) => {
    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não deu pra pegar os dados");
  });
}

export default { Create };