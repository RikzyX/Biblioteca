const oracledb = require('oracledb')
const getAllBookQuery = async (connection, query) => {
  try {
    const result = await connection.execute(
      query,
      {},
      { outFormat: oracledb.OBJECT }
    )
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const getAllBooksByIDQuery = async (connection, query, ISBN) => {
  try {
    const result = await connection.execute(query, [ISBN], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const postNewBookQuery = async (connection, query, body) => {
  try {
    const result = await connection.execute(
      query,
      [
        body.ISBN,
        body.Titulo,
        body.Autor,
        body.NumPagina,
        body.NumEjemploresComprados,
        body.NumEjemplaresDisponibles,
        body.UriPortada,
      ],
      { autoCommit: true }
    )
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const putBookQuery = async (connection, query, ISBN, body) => {
  try {
    const result = await connection.execute(
      query,
      [
        body.Titulo,
        body.Autor,
        body.NumPagina,
        body.NumEjemploresComprados,
        body.NumEjemplaresDisponibles,
        body.UriPortada,
        ISBN,
      ],
      { autoCommit: true },
      { outFormat: oracledb.OBJECT }
    )
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deleteBookQuery = async (connection, query, ISBN) => {
  try {
    await connection.execute(query, [ISBN], { autoCommit: true })
  } catch (erro) {
    console.error('Database error:', erro.message)
  }
}
module.exports = {
  getAllBookQuery,
  getAllBooksByIDQuery,
  postNewBookQuery,
  putBookQuery,
  deleteBookQuery,
}
