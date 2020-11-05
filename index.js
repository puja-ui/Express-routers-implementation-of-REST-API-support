const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.all('/dishes',(req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});
app.get('/dishes',(req, res, next)=>{
    res.end('send all the dishes to you!');
});
app.post('/dishes',(req,res,next) =>{
    res.end('will send the dish: '+ req.body.name + 'with details: '+ req.body.description);
});
app.put('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation does not support /dishes');
});
app.delete('/dishes',(req,res,next) =>{
    res.end('deleting all the dishes');
});
app.get('/dishes:dishId',(req, res, next)=>{
    res.end('Will send dertails of dish '+ req.params.dishId + 'to you!');
});
app.post('/dishes:dishId',(req,res,next) =>{
    res.statusCode = 403;
    res.end('POST operation does not supported on /dishes/'+ req.params.dishId);
});
app.put('/dishes:dishId',(req,res,next) => {
    res.write('updating the dish: '+ req.params.dishId+'\n');
    res.end('will update the dish: '+ req.body.name + 'with details: '+ req.body.description);
});
app.delete('/dishes:dishId',(req,res,next) =>{
    res.end('deleting the dishe: ' + req.params.dishId);
});
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