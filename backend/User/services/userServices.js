const oracledb = require('oracledb')
const getAllUserQuery = async (connection, query) => {
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
const getAllUsersByIDQuery = async (connection, query, id) => {
  try {
    const result = await connection.execute(query, [id], {
      outFormat: oracledb.OBJECT,
    })
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const postNewUserQuery = async (connection, query, body) => {
  try {
    const result = await connection.execute(
      query,
      [
        body.ID,
        body.TipoUsuario,
        body.Nombre,
        body.Apellidos,
        body.CorreoElectronico,
        body.Contrasenia,
        body.ListaPrestamos,
        body.MultaActual,
        body.Calle,
        body.Numero,
        body.Piso,
        body.Ciudad,
        body.CodigoPostal,
        body.TelefonoPadres,
        body.NombreDepartamento,
        body.EstadoUsuario,
      ],
      { autoCommit: true }
    )
    return result.rows
  } catch (error) {
    console.error('Database error:', error.message)
  }
}
const putAndNewUserQuery = async (connection, query, id, body) => {
  try {
    const result = await connection.execute(
      query,
      [
        body.TipoUsuario,
        body.Nombre,
        body.Apellidos,
        body.CorreoElectronico,
        body.Contrasenia,
        body.ListaPrestamos,
        body.MultaActual,
        body.Calle,
        body.Numero,
        body.Piso,
        body.Ciudad,
        body.CodigoPostal,
        body.TelefonoPadres,
        body.NombreDepartamento,
        body.EstadoUsuario,
        id,
      ],
      { autoCommit: true }
    )
    return 'Se actualizo el usuario correctamente'
  } catch (error) {
    console.error('Database error:', error.message)
    return error.message
  }
}
const deleteUserQuery = async (connection, query, id) => {
  try {
    await connection.execute(query, [id], { autoCommit: true })
  } catch (erro) {
    console.error('Database error:', erro.message)
  }
}
module.exports = {
  getAllUserQuery,
  getAllUsersByIDQuery,
  postNewUserQuery,
  putAndNewUserQuery,
  deleteUserQuery,
}
