const oracledb = require('oracledb')
const getAllhistoryFineQuery = async (connection, query) => {
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
const getAllhistoryFinesByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewhistoryFineQuery = async (connection, query, body) => {
  try {
    await connection.execute(query, [body.id, body.usuarioid, body.multaid], {
      autoCommit: true,
    })
    return 'Prestamo generado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const puthistoryFineQuery = async (connection, query, id, body) => {
  try {
    await connection.execute(query, [body.usuarioid, body.multaid, id], {
      autoCommit: true,
    })
    return 'Prestamo actualizado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deletehistoryFineQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
    return `Prestamo de usuario ${id} eliminado correctamente`
  } catch (erro) {
    console.error('Database error:', erro.message)
    return erro.message
  }
}

module.exports = {
  getAllhistoryFineQuery,
  getAllhistoryFinesByIDQuery,
  postNewhistoryFineQuery,
  puthistoryFineQuery,
  deletehistoryFineQuery,
}
