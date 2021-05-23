import Express from 'express';

const app = Express();

app.get('/ping', (req, res) => res.sendStatus(200));

app.listen(8080);
