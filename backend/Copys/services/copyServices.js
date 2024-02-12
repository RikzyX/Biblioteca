const oracledb = require('oracledb')
const getAllCopyQuery = async (connection, query) => {
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
const getAllCopysByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewCopyQuery = async (connection, query, body) => {
  try {
    await connection.execute(
      query,
      [
        body.id,
        body.identificacionejemplar,
        body.libroISBN,
        body.fechaadquisicion,
        body.observaciones,
      ],
      { autoCommit: true }
    )
    return 'Ejemplar ingresado Correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const putCopyQuery = async (connection, query, ISBN, body) => {
  try {
    const result = await connection.execute(
      query,
      [
        body.identificadorejemplar,
        body.libroisbn,
        body.fechaadquisicion,
        body.observaciones,
        id,
      ],
      { autoCommit: true }
    )
    return 'Ejemplar actualizado correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const deleteCopyQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
    return 'Ejemplares Eliminada correctamente'
  } catch (erro) {
    console.error('Database error:', erro.message)
    return erro.message
  }
}
module.exports = {
  getAllCopyQuery,
  getAllCopysByIDQuery,
  postNewCopyQuery,
  putCopyQuery,
  deleteCopyQuery,
}
