const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all promotions');
})

.post((req, res, next) => {
    res.end('Will add promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})

.delete((req, res, next) => {
    res.end('Deleting all promotions');
});



promoRouter.route('/:promoId')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of promotion: ' + req.params.promoId);
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})

.put((req, res, next) => {
  res.write('Updating promotion: ' + req.params.promoId + '\n');
  res.end('Will update promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});
module.exports = promoRouter;