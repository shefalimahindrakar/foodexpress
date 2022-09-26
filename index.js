
const express = require('express');
const port = 3000;
const app = express();
import * as mainRouter from './route/index.js';
//const route = require('./route/index')

app.use(mainRouter.router);


























app.listen(port, 
 console.log('Example app listening on port 3000!'),
);

