const express = require('express')
const {
  getAllLoan,
  postNewLoan,
  getAllLoanByID,
  putLoan,
  deleteLoan,
  generateNewLoan,
} = require('../controllers/loansControllers')
const router = express.Router()

router.route('/prestamos').get(getAllLoan).post(postNewLoan)
router.route('/prestamos/generar-prestamo').post(generateNewLoan)
router
  .route('/prestamos/:id')
  .get(getAllLoanByID)
  .put(putLoan)
  .delete(deleteLoan)
module.exports = router
