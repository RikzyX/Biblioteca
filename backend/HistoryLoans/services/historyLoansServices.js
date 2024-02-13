const oracledb = require('oracledb')
const getAllhistoryLoanQuery = async (connection, query) => {
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
const getAllhistoryLoansByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewhistoryLoanQuery = async (connection, query, body) => {
  try {
    await connection.execute(
      query,
      [
        body.id,
        body.ejemplarid,
        body.usuarioid,
        body.fdevolucion,
      ],
      { autoCommit: true }
    )
    return 'Historial Prestamo generado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const puthistoryLoanQuery = async (connection, query, id, body) => {
  try {
    await connection.execute(
      query,
      [body.ejemplarid, body.usuarioid,body.fdevolucion, id],
      { autoCommit: true }
    )
    return 'Historial Prestamo actualizado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deletehistoryLoanQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
    return `Historial Prestamo de usuario ${id} eliminado correctamente`
  } catch (erro) {
    console.error('Database error:', erro.message)
    return erro.message
  }
}

module.exports = {
  getAllhistoryLoanQuery,
  getAllhistoryLoansByIDQuery,
  postNewhistoryLoanQuery,
  puthistoryLoanQuery,
  deletehistoryLoanQuery,
}