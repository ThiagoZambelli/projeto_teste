const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = 'API_KEY'; // <- Coloque a API aqui

app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                q: query,
                key: API_KEY,
                type: 'video',
                maxResults: 10
            }
        });
        res.json(response.data.items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`BFF running on port ${PORT}`);
});
