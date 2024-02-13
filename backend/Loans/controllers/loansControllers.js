const dbUtils = require('../../database/oracleConnection')
const {
  allLoans,
  allLoanbyid,
  postnewLoans,
  deleteLoans,
  uptateLoans,
  generateNewLoans,
} = require('../constants/querys')
const {
  getAllLoansByIDQuery,
  postNewLoanQuery,
  putLoanQuery,
  getAllLoanQuery,
  deleteLoanQuery,
  generateNewLoansQuery,
} = require('../services/loansServices')
export const getAllLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Loans = await getAllLoanQuery(connection, allLoans)
    res.json({ data: Loans })
  } catch (error) {
    console.error('Error retrieving Loans:', error.message)
    res.status(500).send({ message: 'Error retrieving Loans' })
  }
}
export const getAllLoanByID = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Loans = await getAllLoansByIDQuery(
      connection,
      allLoanbyid,
      req.param.id
    )
    res.json({ data: Loans })
  } catch (error) {
    console.error('Error retrieving Loans:', error.message)
    res.status(500).send({ message: 'Error retrieving Loans' })
  }
}
export const postNewLoan = async (req, res) => {
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
export const putLoan = async (req, res) => {
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
export const deleteLoan = async (req, res) => {
  try { 
    const connection = await dbUtils.ODBConection()
    const result = await deleteLoanQuery(connection, deleteLoans, req.params.id)
    res.status(200).json({ message: result })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting Loanmendation to DB')
  }
}
export const generateNewLoan = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await generateNewLoansQuery(
      connection,
      generateNewLoans,
      req.body
    )
    res.status(200).json({ message: result })
  } catch (error) {
    console.error(err.message)
    response.status(500).send('Error to generate new Loan')
  }
}
export const makeLoansByUserType = async (req, res) =>{
  try{
    const connection = await dbUtils.ODBConection()
    const result = await (connection,makeLoansByUserType,req.body)
    res.status(200).json({message: result})

  }catch(error){
    console.error(err.message)
    response.status(500).send('Error to generate new Loan')
  }
}