const serverless = require('serverless-http');

const express = require('express')
const cors = require('cors');
const bodyParser = require( 'body-parser');
const app = express()

// Enable CORS requests from *.sysco.net origins
app.use(cors());


app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log("Request here");

    res.send(JSON.stringify({name:'Hello World!'}));

})


module.exports.handler = serverless(app);
