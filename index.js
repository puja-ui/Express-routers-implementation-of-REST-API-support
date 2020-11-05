const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.getHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>this is express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server is listening to http://${hostname}:${port}`);
});