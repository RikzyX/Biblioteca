export const allRecoms = 'SELECT * FROM RECOMENDACIONES'
export const allRecombyid =
  'SELECT * FROM RECOMENDACIONES WHERE LIBROORIGENISBN= :ISBN'
export const postnewRecoms =
  'INSERT INTO RECOMENDACIONES (LIBROORIGENISBN, LIBRORECOMENDADOISBN,COMENTARIO)' +
  'VALUES(:ISBN,:LibroRecomendadoISBN,:Comentario)'
export const uptateRecoms = `UPDATE RECOMENDACIONES SET LIBRORECOMENDADOISBN=:LibroRecomendadoISBN,COMENTARIO=:Comentario WHERE LIBROORIGENISBN=:ISBN`
export const deleteRecoms =
  'DELETE FROM RECOMENDACIONES WHERE LIBROORIGENISBN = :ISBN'
