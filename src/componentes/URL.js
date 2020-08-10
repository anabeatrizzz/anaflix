const temLocalhost = window.location.href.includes('localhost')

const URL = temLocalhost ? 'http://localhost:8080' : 'https://anaflix-alura.herokuapp.com';

export default URL;