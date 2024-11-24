// functions/myFunction.js

const fetch = require('node-fetch');  // Certifique-se de instalar o 'node-fetch'

module.exports = async (req, res) => {
  const { method, headers, url } = req;

  // Pegando o caminho da URL e completando com o final desejado
  let targetUrl = url.slice(1);  // Retira a barra inicial '/'
  if (!targetUrl) {
    return res.status(400).send('Admin');
  }

  // Define a URL base para completar
  const completeUrl = `https://newedge.eu-central-1.edge.mycdn.live/${targetUrl}`;

  // Cabeçalhos permitidos para CORS
  const allowedOrigins = [
    'https://sinalpublico.netlify.app',
    'https://c2luywxwdwjsawnv.github.io'
  ];

  // Verifica a origem da requisição
  const origin = headers['origin'];

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  } else {
    return res.status(403).send('CORS policy: Access denied');
  }

  try {
    // Faz a requisição para a URL completa
    const response = await fetch(decodeURIComponent(completeUrl), {
      method,
      headers: {
        ...headers,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'Referer': 'https://newedge.eu-central-1.edge.mycdn.live/',
      },
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      return res.status(response.status).send('Error M3U8 file');
    }

    // Retorna a resposta com os headers modificados
    res.setHeader('Content-Type', 'application/x-mpegURL');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite CORS para esta resposta
    response.body.pipe(res);  // Encaminha o corpo da resposta
  } catch (error) {
    return res.status(500).send('Error fetching the M3U8 file');
  }
};
