const oracledb = require('oracledb')
const getAllRecomQuery = async (connection, query) => {
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
const getAllRecomsByIDQuery = async (connection, query, ISBN) => {
  try {
    const result = await connection.execute(query, [ISBN], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewRecomQuery = async (connection, query, body) => {
  try {
    await connection.execute(
      query,
      [body.ISBN, body.LibroRecomendadoISBN, body.Comentario],
      { autoCommit: true }
    )
    return 'Libro Ingresado Correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const putRecomQuery = async (connection, query, ISBN, body) => {
  try {
    const result = await connection.execute(
      query,
      [body.LibroRecomendadoISBN, body.Comentario, ISBN],
      { autoCommit: true },
      { outFormat: oracledb.OBJECT }
    )
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deleteRecomQuery = async (connection, query, ISBN) => {
  try {
    await connection.execute(query, [ISBN], { autoCommit: true })
  } catch (erro) {
    console.error('Database error:', erro.message)
  }
}
module.exports = {
  getAllRecomQuery,
  getAllRecomsByIDQuery,
  postNewRecomQuery,
  putRecomQuery,
  deleteRecomQuery,
}
