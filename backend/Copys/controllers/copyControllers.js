const dbUtils = require('../../database/oracleConnection')
const { allCopys, allCopybyid, postnewCopys, uptateCopys, deleteCopys, verifyCopy } = require('../constants/querys')
const { getAllCopyQuery, getAllCopysByIDQuery, postNewCopyQuery, putCopyQuery, deleteCopyQuery, verifyCopyQuery } = require('../services/copyServices')
export const getAllCopy = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Copys = await getAllCopyQuery(connection, allCopys)
    res.json({ data: Copys })
  } catch (error) {
    console.error('Error retrieving Copys:', error.message)
    res.status(500).send({ message: 'Error retrieving Copys' })
  }
}
export const getAllCopyByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Copys = await getAllCopysByIDQuery(connection, allCopybyid, req.param.id)
    res.json({ data: Copys })
  } catch (error) {
    console.error('Error retrieving Copys:', error.message)
    res.status(500).send({ message: 'Error retrieving Copys' })
  }
}
export const postNewCopy = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewCopyQuery(connection, postnewCopys, req.body)
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new Copy:', e.message)
    res.status(500).send({
      message:
        'Error to create new Copy checks if the data was entered correctly',
    })
  }
}
export const putCopy = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putCopyQuery(
      connection,
      uptateCopys,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating Copys to DB')
  }
}
export const deleteCopy = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await deleteCopyQuery(connection, deleteCopys, req.params.id)
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting Copymendation to DB')
  }
}
export const verifyAllCopy = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Copys = await verifyCopyQuery(connection, verifyCopy)
    res.json({ data: Copys })
  } catch (error) {
    console.error('Error retrieving Copys:', error.message)
    res.status(500).send({ message: 'Error retrieving Copys' })
  }
}