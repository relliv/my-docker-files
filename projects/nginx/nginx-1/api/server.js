const express = require('express');
const app = express();

const host = 'localhost',
    protocol = 'http',
    port = 3000;

app.get('/any.json', (req, res) => {
    const data = {
        any: true,
        anything: 111,
        amy: 'Amy Pond',
        hello: 'any'
    };

    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at ${protocol}://${host}:${port}`);
});