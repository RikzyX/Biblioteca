const express = require('express')
const { getAllLoan, postNewLoan, getAllLoanByID, putLoan, deleteLoan } = require('../controllers/loansControllers')
const router = express.Router()

router.route('/multas').get(getAllLoan).post(postNewLoan)
router
  .route('/multas/:id')
  .get(getAllLoanByID)
  .put(putLoan)
  .delete(deleteLoan)
module.exports = router