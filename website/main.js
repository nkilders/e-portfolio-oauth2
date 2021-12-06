const express = require('express');

const oauthUrl = 'https://discord.com/api/oauth2/authorize?client_id=906317672151674972&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=identify%20email%20connections';

const app = express();

app.get('/', (req, res) => {
    const code = req.query.code;
    
    res.setHeader('Content-Type', 'text/html')
    
    if(!!code) {
        res.end(`Herzlichen Gl&uumlckwunsch, Sie haben gewonnen!<br/>Ihr Code lautet: <b>${code}</b>`);
    } else {
        res.end(`Bitte melden Sie sich an!<br/><button onclick="window.location.href='${oauthUrl}'">Anmelden</button>`);
    }
});

app.listen(80, () => console.log('Listening at http://localhost:80'));