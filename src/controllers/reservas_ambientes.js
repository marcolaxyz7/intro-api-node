const bd = require('../dataBase/connection');

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
    },

    async cadastrarreservas_ambientes (request, response) {
        try{
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Cadastrar reservas_ambientes.',
               dados: null
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro no cadastro de reservas_ambientes.',
               dados: error.message
           });
        }
    },

    async editarreservas_ambientes (request, response) {
        try{
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Editar reservas_ambientes.',
               dados: null
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro ao editar reservas_ambientes.',
               dados: error.message
           });
        }
    },

    async apagarreservas_ambientes (request, response) {
        try{
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Apagar reservas_ambientes.',
               dados: null
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro ao apagar reservas_ambientes.',
               dados: error.message
           });
        }
    },
}