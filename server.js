const express = require("express");
bodyParser = require('body-parser');
presentationRoutes = require('./api/routes/presentation-routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

presentationRoutes(app);

app.get('/', (req, res) => res.send('Presentation API'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))