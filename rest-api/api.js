const express = require('express');
const bodyparser = require('body-parser');

const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

const GaleriaRouter = require('./router/galeriaRouter');

//Trata as requisições da API
api.use(cors());

api.use(bodyparser.urlencoded({ extended: true }));
api.use(bodyparser.json({ limit: '20mb',extended: true }));

router.get("/",(req, resp) => resp.json({
    mensagem: '=> API Online...'
}));

api.use("/", router);
api.use("/galeria", GaleriaRouter);
api.listen(port);
console.log("Run API Express");
