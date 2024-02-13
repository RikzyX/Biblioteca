import {
  allFinebyid,
  allFines,
  deleteFines,
  postnewFines,
  uptateFines,
} from '../constants/querys'

const dbUtils = require('../../database/oracleConnection')
const {
  getAllFineQuery,
  getAllFinesByIDQuery,
  postNewFineQuery,
  putFineQuery,
  deleteFineQuery,
} = require('../services/finesServices')

export const getAllFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Fines = await getAllFineQuery(connection, allFines)
    res.json({ data: Fines })
  } catch (error) {
    console.error('Error retrieving Fines:', error.message)
    res.status(500).send({ message: 'Error retrieving Fines' })
  }
}
export const getAllFineByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Fines = await getAllFinesByIDQuery(
      connection,
      allFinebyid,
      req.param.id
    )
    res.json({ data: Fines })
  } catch (error) {
    console.error('Error retrieving Fines:', error.message)
    res.status(500).send({ message: 'Error retrieving Fines' })
  }
}
export const postNewFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewFineQuery(connection, postnewFines, req.body)
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new Fine:', e.message)
    res.status(500).send({
      message:
        'Error to create new Fine checks if the data was entered correctly',
    })
  }
}
export const putFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putFineQuery(
      connection,
      uptateFines,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating Fines to DB')
  }
}
export const deleteFine = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await deleteFineQuery(connection, deleteFines, req.params.id)
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Error deleting Finemendation to DB')
  }
}