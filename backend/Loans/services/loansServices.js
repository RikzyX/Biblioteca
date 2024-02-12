const oracledb = require('oracledb')
const getAllLoanQuery = async (connection, query) => {
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
const getAllLoansByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewLoanQuery = async (connection, query, body) => {
  try {
    await connection.execute(
      query,
      [
        body.id,
        body.ejemplarid,
        body.usuarioid,
        body.fprestamos,
        body.fdevolucion,
      ],
      { autoCommit: true }
    )
    return 'Prestamo generado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const putLoanQuery = async (connection, query, id, body) => {
  try {
     await connection.execute(
      query,
      [
        body.ejemplarid,
        body.usuarioid,
        body.fprestamos,
        body.fdevolucion,
        id,
      ],
      { autoCommit: true }
    )
    return 'Prestamo actualizado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deleteLoanQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
    return `Prestamo de usuario ${id} eliminado correctamente`
  } catch (erro) {
    console.error('Database error:', erro.message)
    return erro.message
  }
}
module.exports = {
  getAllLoanQuery,
  getAllLoansByIDQuery,
  postNewLoanQuery,
  putLoanQuery,
  deleteLoanQuery,
}
