
const {
    getAllhistoryLoansByIDQuery,
    getAllhistoryLoanQuery,
    postNewhistoryLoanQuery,
    puthistoryLoanQuery,
    deletehistoryLoanQuery,
  } = require('../services/historyLoansServices')

const dbUtils = require('../../database/oracleConnection')
const {
  allhistoryLoanbyid,
  postnewhistoryhistoryLoan,
  deletehistoryhistoryLoan,
  uptatehistoryhistoryLoan,
  allhistoryLoans,
} = require('../constants/queries')

export const getAllhistoryLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const historyhistoryLoan = await getAllhistoryLoanQuery(
      connection,
      allhistoryLoans
    )
    res.json({ data: historyhistoryLoan })
  } catch (error) {
    console.error('Error retrieving historyhistoryLoan:', error.message)
    res.status(500).send({ message: 'Error retrieving historyhistoryLoan' })
  }
}
export const getAllhistoryLoanByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const historyhistoryLoan = await getAllhistoryLoansByIDQuery(
      connection,
      allhistoryLoanbyid,
      req.param.id
    )
    res.json({ data: historyhistoryLoan })
  } catch (error) {
    console.error('Error retrieving historyhistoryLoan:', error.message)
    res.status(500).send({ message: 'Error retrieving historyhistoryLoan' })
  }
}
export const postNewhistoryLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewhistoryLoanQuery(
      connection,
      postnewhistoryhistoryLoan,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new historyLoan:', e.message)
    res.status(500).send({
      message:
        'Error to create new historyLoan checks if the data was entered correctly',
    })
  }
}
export const puthistoryLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await puthistoryLoanQuery(
      connection,
      uptatehistoryhistoryLoan,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating historyhistoryLoan to DB')
  }
}
export const deletehistoryLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await deletehistoryLoanQuery(
      connection,
      deletehistoryhistoryLoan,
      req.params.id
    )
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting historyLoanmendation to DB')
  }
}
