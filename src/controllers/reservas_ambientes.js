const db = require('../dataBase/connection');

module.exports = {
    async listarreservas_ambientes (request, response) {
        try{
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Lista de reservas_ambientes.',
               dados: null
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro na listagem de reservas_ambientes.',
               dados: error.message
           });
        }
    }
}