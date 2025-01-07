const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware para lidar com requisições JSON
app.use(express.json());

// Rota para autenticar no Mojang
app.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const url = 'https://authserver.mojang.com/authenticate';
    const payload = {
        agent: { name: 'Minecraft', version: 1 },
        username: email,
        password: password
    };

    try {
        const response = await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } });
        res.json(response.data); // Retorna o token de acesso
    } catch (error) {
        res.status(400).json({ error: 'Falha na autenticação' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
