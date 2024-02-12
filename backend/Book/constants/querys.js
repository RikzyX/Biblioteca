export const allBooks = 'SELECT * FROM LIBROS'
export const allBookbyid = 'SELECT * FROM LIBROS WHERE ISBN= :ISBN'
export const postnewBooks ='INSERT INTO LIBROS (ISBN, TITULO, AUTOR, NUMPAGINAS, NUMEJEMPLARESCOMPRADOS, NUMEJEMPLARESDISPONIBLES, URIPORTADA)' +
  'VALUES(:ISBN,:Titulo,:Autor ,:NumPagina ,:NumEjemploresComprados,:NumEjemplaresDisponibles, :UriPortada)'
export const uptateBooks = ''
export const deleteBooks = 'DELETE FROM LIBROS WHERE ISBN = :ISBN'
