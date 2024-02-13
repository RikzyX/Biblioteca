const express = require('express')

const {
  deletehistoryFine,
  puthistoryFine,
  getAllhistoryFineByID,
  getAllhistoryFine,
  postNewhistoryFine,
} = require('../controllers/historyFinesControllers')
const router = express.Router()

router.route('/historialmultas').get(getAllhistoryFine).post(postNewhistoryFine)
router
  .route('/historialmultas/:id')
  .get(getAllhistoryFineByID)
  .put(puthistoryFine)
  .delete(deletehistoryFine)
module.exports = router
