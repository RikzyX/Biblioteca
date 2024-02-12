const dbUtils = require('../../database/oracleConnection')
const { allLoans, allLoanbyid, postnewLoans, deleteLoans, uptateLoans } = require('../constants/querys')
const { getAllLoansByIDQuery, postNewLoanQuery, putLoanQuery, getAllLoanQuery, deleteLoanQuery } = require('../services/loansServices')

exports.getAllLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Loans = await getAllLoanQuery(connection, allLoans)
    res.json({ data: Loans })
  } catch (error) {
    console.error('Error retrieving Loans:', error.message)
    res.status(500).send({ message: 'Error retrieving Loans' })
  }
}
exports.getAllLoanByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Loans = await getAllLoansByIDQuery(connection, allLoanbyid, req.param.id)
    res.json({ data: Loans })
  } catch (error) {
    console.error('Error retrieving Loans:', error.message)
    res.status(500).send({ message: 'Error retrieving Loans' })
  }
}
exports.postNewLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewLoanQuery(connection, postnewLoans, req.body)
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new Loan:', e.message)
    res.status(500).send({
      message:
        'Error to create new Loan checks if the data was entered correctly',
    })
  }
}
exports.putLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putLoanQuery(
      connection,
      uptateLoans,
      req.params.id,
      req.body
    )
    res.status(200).send({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating Loans to DB')
  }
}
exports.deleteLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await deleteLoanQuery(connection, deleteLoans, req.params.id)
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting Loanmendation to DB')
  }
}