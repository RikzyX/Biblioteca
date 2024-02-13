export const allBooks = 'SELECT * FROM LIBROS'
export const allBookbyid = 'SELECT * FROM LIBROS WHERE ISBN=:ISBN'
export const postnewBooks ='INSERT INTO LIBROS (ISBN, TITULO, AUTOR, NUMPAGINAS, NUMEJEMPLARESCOMPRADOS, NUMEJEMPLARESDISPONIBLES, URIPORTADA)' +
  'VALUES(:ISBN,:Titulo,:Autor ,:NumPaginas ,:NumEjemplaresComprados,:NumEjemplaresDisponibles, :UriPortada)'
export const uptateBooks = `UPDATE libros SET TITULO=:Titulo, AUTOR=:Autor, 
NUMPAGINAS=:NumPaginas, NUMEJEMPLARESCOMPRADOS=:NumEjemplaresComprados, NUMEJEMPLARESDISPONIBLES=:NumEjemplaresComprados, URIPORTADA=:UriPortada
WHERE ISBN=:ISBN`
export const deleteBooks = 'DELETE FROM LIBROS WHERE ISBN = :ISBN'
export const browBooks = `SELECT * FROM librosPrestados`
