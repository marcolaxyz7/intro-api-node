const db = require('../dataBase/connection');

module.exports = {
    async listarreserva_ambientes (request, response) {

        try{

            const sql = `
            SELECT res_id, userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva FROM Reserva_Ambientes;
        `;

        const [row] = await db.query(sql);
        const nItens = row.length;
    
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Lista de reserva_ambientes.',
               nItens,
               dados: row
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro na listagem de reserva_ambientes.',
               dados: error.message
           });
        }
    },

    async cadastrarreserva_ambientes (request, response) {
        try{

         const { userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva } = request.body;
         const res_id = 1;

         const sql = `
           INSERT INTO reserva_ambientes
            ( userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva)
            VALUES
             (?, ?, ?, ?, ?, ?);
            `;

            const values = [ userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva ];

            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                userap_id,
                amb_id,
                res_horario_inicio,
                res_horario_fim,
                res_status,
                res_data_reserva,
            };

           return response.status(200).json({
               sucesso: true,
               mensagem: 'Cadastrar reserva_ambientes.',
               dados
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro no cadastro de reserva_ambientes.',
               dados: error.message
           });
        }
    },

    async editarreserva_ambientes (request, response) {
        try{

            const { userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva } = request.body;

            const { id } = request.params;

            const sql = `UPDATE reserva_ambientes Set userap_id = ?, amb_id = ?, res_horario_inicio = ?, res_horario_fim = ?, res_status = ?, res_data_reserva = ? 
            WHERE res_id = ?`;

            const values = [userap_id, amb_id, res_horario_inicio, res_horario_fim, res_status, res_data_reserva, id];

            const atualizaDados = await db.query(sql, values);

           return response.status(200).json({
               sucesso: true,
               mensagem: `reserva_ambientes ${id} Atualizado com sucesso!`,
               dados: atualizaDados[0].affectedRows,
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro ao editar reserva_ambientes.',
               dados: error.message,
           });
        }
    },

    async apagarreserva_ambientes (request, response) {
        try{
           return response.status(200).json({
               sucesso: true,
               mensagem: 'Apagar reserva_ambientes.',
               dados: null
           });
        } catch (error){
           return response.status(500).json({
               sucesso: false,
               mensagem: 'Erro ao apagar reserva_ambientes.',
               dados: error.message
           });
        }
    },
}