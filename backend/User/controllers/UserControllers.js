const {
  getAllUserQuery,
  getAllUsersByIDQuery,
  postNewUserQuery,
  putAndNewUserQuery,
  deleteUserQuery,
} = require('../services/userServices')
const dbUtils = require('../../database/oracleConnection')
const {
  allusers,
  alluserbyid,
  postnewusers,
  uptateusers,
  deleteusers,
} = require('../constants/querys')

exports.getAllUsers = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const users = await getAllUserQuery(connection, allusers)
    res.json({ data: users })
  } catch (error) {
    console.error('Error retrieving users:', error.message)
    res.status(500).send({ message: 'Error retrieving users' })
  }
}
exports.getAllUsersByID = async (req, res) => {
  try {
    const id = req.params.id
    const connection = await dbUtils.ODBConection()
    const users = await getAllUsersByIDQuery(connection, alluserbyid, id)
    res.json({ data: users })
  } catch (error) {
    console.error('Error retrieving users:', error.message)
    res.status(500).send({ message: 'Error retrieving users' })
  }
}
exports.postNewUser = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    await postNewUserQuery(connection, postnewusers, req.body)
    res.status(200).json({ message: 'Usuario agregado correctamente.' })
  } catch (e) {
    console.error('Error to create new user:', e.message)
    res.status(500).send({
      message:
        'Error to create new user checks if the data was entered correctly',
    })
  }
}
exports.putAndUser = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putAndNewUserQuery(
      connection,
      uptateusers,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating users to DB')
  }
}
exports.deleteUser = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    await deleteUserQuery(connection, deleteusers, req.params.id)
    res.status(200).json({ message: 'Usuario eliminado correctamente' })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting users to DB')
  }
}
