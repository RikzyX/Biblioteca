export const allLoans = 'SELECT * FROM PRESTAMOS'
export const allLoanbyid = 'SELECT * FROM PRESTAMOS WHERE ID=:id'
export const postnewLoans =
  `INSERT INTO PRESTAMOS (ID, EJEMPLARID,USUARIOID,FECHAPRESTAMO,FECHADEVOLUCIONESPERADA)` +
  `VALUES(:id,:ejemplarid,:usuarioid,TO_DATE(:fprestamos,'YYYY-MM-DD'),TO_DATE(:fdevolucion,'YYYY-MM-DD'))`
export const uptateLoans = `UPDATE PRESTAMOS SET  FECHAPRESTAMO=:fprestamos, FECHADEVOLUCIONESPERADA=:fdevolucion, WHERE ID=:id AND EJEMPLARID=:ejemplarid AND USUARIOID=:usuarioid,`
export const deleteLoans = `DELETE FROM PRESTAMOS WHERE ID=:id`
