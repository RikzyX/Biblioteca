export const allLoans = 'SELECT * FROM MULTAS'
export const allLoanbyid = 'SELECT * FROM MULTAS WHERE ID=:id'
export const postnewLoans =
  `INSERT INTO MULTAS (ID,USUARIOID,FECHAINICIO,DIASACUMULADOS,FECHAFINALIZACION)` +
  `VALUES(:id,:usuarioid,TO_DATE(:finicio,'YYYY-MM-DD'),:diasacumulados,TO_DATE(:ffinal,'YYYY-MM-DD'))`
export const uptateLoans = `UPDATE MULTAS SET  FECHAPRESTAMO=:fMULTAS, FECHADEVOLUCIONESPERADA=:fdevolucion, WHERE ID=:id AND EJEMPLARID=:ejemplarid AND USUARIOID=:usuarioid,`
export const deleteLoans = `DELETE FROM MULTAS WHERE ID=:id`