export const allhistoryFines = `SELECT * FROM HistoricoMultas`
export const allhistoryFinebyid = 'SELECT * FROM HistoricoMultas WHERE ID=:id'
export const postnewhistoryFines =
  `INSERT INTO HistoricoMultas (ID,UsuarioID,MultaID)` +
  `VALUES(:id,:usuarioid,:multaid)`
export const uptatehistoryFines = `UPDATE HistoricoMultas SET UsuarioID=:usuarioid, MultaID=:multaid WHERE ID=:id`
export const deletehistoryFines = `DELETE FROM HistoricoMultas WHERE ID=:id`