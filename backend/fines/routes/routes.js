const express = require('express')
const router = express.Router()

router.route('/prestamos').get(getAllLoan).post(postNewLoan)
router
  .route('/prestamos/:id')
  .get(getAllLoanByID)
  .put(putLoan)
  .delete(deleteLoan)
module.exports = router
