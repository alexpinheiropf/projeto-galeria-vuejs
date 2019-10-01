const db = require('../banco/dbConexao');

model.exports = class GaleriaModel{
    static getTodos(callback){
       return db.query("SELECT * FROM galeria_video", callback);
    }
};