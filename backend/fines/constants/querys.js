export const allFines = 'SELECT * FROM MULTAS'
export const allFinebyid = 'SELECT * FROM MULTAS WHERE ID=:id'
export const postnewFines =
  `INSERT INTO MULTAS (ID,USUARIOID,FECHAINICIO,DIASACUMULADOS,FECHAFINALIZACION)` +
  `VALUES(:id,:usuarioid,TO_DATE(:finicio,'YYYY-MM-DD'),:diasacumulados,TO_DATE(:ffinal,'YYYY-MM-DD'))`
export const uptateFines = ``
export const deleteFines = `DELETE FROM MULTAS WHERE ID=:id`
export const controlledFines = `BEGIN GestionarMultas(:usuarioid); END;`
