const express = require('express')
const {
  putRecom,
  getAllRecomByID,
  deleteRecom,
  getAllRecom,
  postNewRecom,
} = require('../controllers/reControllers')

const router = express.Router()

router.route('/recomendaciones').get(getAllRecom).post(postNewRecom)
router
  .route('/recomendaciones/:ISBN')
  .get(getAllRecomByID)
  .put(putRecom)
  .delete(deleteRecom)
module.exports = router
