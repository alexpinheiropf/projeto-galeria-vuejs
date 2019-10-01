const mysql = require('mysql');

//Gerenciar o pool de conexões
let conexao = mysql.createPool({
    host: 'localhost',
    user = 'root',
    password = '',
    database = 'db_galeria_video'
});

module.exports = conexao;