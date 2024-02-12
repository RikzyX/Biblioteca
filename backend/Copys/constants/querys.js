export const allCopys = 'SELECT * FROM EJEMPLARES'
export const allCopybyid = 'SELECT * FROM EJEMPLARES WHERE ID=:id'
export const postnewCopys =
  `INSERT INTO EJEMPLARES (ID, IDENTIFICACIONEJEMPLAR,LIBROISBN,FECHAADQUISICION,OBSERVACIONES)` +
  `VALUES(:id,:identificacionejemplar,:libroISBN,TO_DATE(:fechaadquisicion,'YYYY-MM-DD'), :observaciones)`
export const uptateCopys = 'UPDATE '
export const deleteCopys = `DELETE FROM EJEMPLARES WHERE ID=:id`
