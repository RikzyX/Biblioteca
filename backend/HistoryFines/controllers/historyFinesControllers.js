const dbUtils = require('../../database/oracleConnection')
const {

  allhistoryFines,
  uptatehistoryFines,
  deletehistoryFines,
  postnewhistoryFines,
  allhistoryFinebyid,
} = require('../constants/queries')
const {

  getAllhistoryFinesByIDQuery,
  postNewhistoryFineQuery,
  puthistoryFineQuery,
  deletehistoryFineQuery,
} = require('../services/historyFinesServices')
export const getAllhistoryFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const historyFines = await getAllhistoryFinesByIDQuery(
      connection,
      allhistoryFines
    )
    res.json({ data: historyFines })
  } catch (error) {
    console.error('Error retrieving historyFines:', error.message)
    res.status(500).send({ message: 'Error retrieving historyFines' })
  }
}
export const getAllhistoryFineByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const historyFines = await getAllhistoryFinesByIDQuery(
      connection,
      allhistoryFinebyid,
      req.param.id
    )
    res.json({ data: historyFines })
  } catch (error) {
    console.error('Error retrieving historyFines:', error.message)
    res.status(500).send({ message: 'Error retrieving historyFines' })
  }
}
export const postNewhistoryFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewhistoryFineQuery(
      connection,
      postnewhistoryFines,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new historyFine:', e.message)
    res.status(500).send({
      message:
        'Error to create new historyFine checks if the data was entered correctly',
    })
  }
}
export const puthistoryFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await puthistoryFineQuery(
      connection,
      uptatehistoryFines,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating historyFines to DB')
  }
}
export const deletehistoryFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await deletehistoryFineQuery(
      connection,
      deletehistoryFines,
      req.params.id
    )
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting historyFinemendation to DB')
  }
}
