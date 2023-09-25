const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = require('./routes');

// app.set('view engine', hbs);
app.use('/', router);
// app.use('/.netlify/functions/app', router);
// app.use(express.raw({ type: '*/*' }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());       
// app.use(express.urlencoded({extended: true})); 
// "build": "netlify deploy --prod"
// "netlify-start": "node_modules/.bin/netlify-lambda serve src -p 8089",
// "build": "node_modules/.bin/netlify-lambda build src",
// const hostname = '127.0.0.1';
// const port = 8000;
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
module.exports.handler = serverless(app);