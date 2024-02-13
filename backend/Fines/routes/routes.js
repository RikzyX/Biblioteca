const express = require('express')
const {
  getAllFine,
  postNewFine,
  getAllFineByID,
  putFine,
  deleteFine,
} = require('../controllers/finesControllers')
const router = express.Router()

router.route('/multas').get(getAllFine).post(postNewFine)
router.route('/multas/:id').get(getAllFineByID).put(putFine).delete(deleteFine)
module.exports = router
