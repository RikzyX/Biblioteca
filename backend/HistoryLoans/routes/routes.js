const express = require('express')
const {
  getAllhistoryLoan,
  postNewhistoryLoan,
  getAllhistoryLoanByID,
  puthistoryLoan,
  deletehistoryLoan,
} = require('../controllers/historyLoansControllers')
const router = express.Router()

router
  .route('/historialprestamos')
  .get(getAllhistoryLoan)
  .post(postNewhistoryLoan)
router
  .route('/historialprestamos/:id')
  .get(getAllhistoryLoanByID)
  .put(puthistoryLoan)
  .delete(deletehistoryLoan)
module.exports = router
