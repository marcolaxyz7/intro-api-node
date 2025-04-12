const db = require('../dataBase/connection');

module.exports = {
    async listarreservas_ambientes (request, response) {

        try{

            const sql = `
            SELECT res_id, userap_id, ambiid, res_horario_inicio, res_horario_fim, res_status, res_data_reserva FROM Reservas_Ambientes;
        `;

        const [row] = await db.query(sql);
        const nItens = row.length;

    
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Lista de reservas_ambientes.',
               nItens,
               dados: row
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