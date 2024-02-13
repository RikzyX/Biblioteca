export const allLoans = 'SELECT * FROM PRESTAMOS'
export const allLoanbyid = 'SELECT * FROM PRESTAMOS WHERE ID=:id'
export const postnewLoans =
  `INSERT INTO PRESTAMOS (ID, EJEMPLARID,USUARIOID,FECHAPRESTAMO,FECHADEVOLUCIONESPERADA)` +
  `VALUES(:id,:ejemplarid,:usuarioid,TO_DATE(:fprestamos,'YYYY-MM-DD'),TO_DATE(:fdevolucion,'YYYY-MM-DD'))`
export const uptateLoans = `UPDATE PRESTAMOS SET EJEMPLARID=:ejemplarid, USUARIOID=:usuarioid,  FECHAPRESTAMO=TO_DATE(:fprestamos,'YYYY-MM-DD'), FECHADEVOLUCIONESPERADA=TO_DATE(:fdevolucion,'YYYY-MM-DD') WHERE ID=:id`
export const deleteLoans = `DELETE FROM PRESTAMOS WHERE ID=:id`
export const generateNewLoans = `BEGIN PedirPrestamo(:usuarioid, :ejemplarid, TO_DATE(:fprestamos,'YYYY-MM-DD'), TO_DATE(:fdevolucion,'YYYY-MM-DD')); END;`
