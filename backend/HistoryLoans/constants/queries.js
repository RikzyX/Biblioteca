export const allhistoryLoans = 'SELECT * FROM HistoricoPrestamos'
export const allhistoryLoanbyid = 'SELECT * FROM HistoricoPrestamos WHERE ID=:id'
export const postnewhistoryLoans =
  `INSERT INTO HistoricoPrestamos (ID, EJEMPLARID,USUARIOID,FechaDevolucion)` +
  `VALUES(:id,:ejemplarid,:usuarioid,TO_DATE(:fdevolucion,'YYYY-MM-DD'))`
export const uptatehistoryLoans = `UPDATE HistoricoPrestamos SET EJEMPLARID=:ejemplarid, USUARIOID=:usuarioid, FECHADEVOLUCION=TO_DATE(:fdevolucion,'YYYY-MM-DD') WHERE ID=:id`
export const deletehistoryLoans = `DELETE FROM HistoricoPrestamos WHERE ID=:id`

