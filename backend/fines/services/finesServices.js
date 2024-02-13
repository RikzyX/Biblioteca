const oracledb = require('oracledb')
const getAllFineQuery = async (connection, query) => {
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
const getAllFinesByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewFineQuery = async (connection, query, body) => {
  try {
    await connection.execute(
      query,
      [body.id, body.usuarioid, body.finicio, body.diascumulados, body.ffinal],
      { autoCommit: true }
    )
    return 'Multa generada correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const putFineQuery = async (connection, query, id, body) => {
  try {
    await connection.execute(
      query,
      [body.usuarioid, body.finicio, body.diascumulados, body.ffinal, id],
      { autoCommit: true }
    )
    return 'Multa actualizada correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deleteFineQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
    return `La multa se ha eliminado correctamente`
  } catch (erro) {
    console.error('Database error:', erro.message)
    return erro.message
  }
}
const constrolledFinesQuery = async (connection, query, body) => {
  try {
    const result = await connection.execute(
      query,
      [body.usuarioid],
      {
        autoCommit: true,
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    )
    return result.outBinds
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
module.exports = {
  getAllFineQuery,
  getAllFinesByIDQuery,
  postNewFineQuery,
  putFineQuery,
  deleteFineQuery,
  constrolledFinesQuery,
}
