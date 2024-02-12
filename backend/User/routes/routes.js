const {
  getAllUsers,
  getAllUsersByID,
  postNewUser,
  putAndUser,
  deleteUser,
} = require('../controllers/UserControllers')
const express = require('express')

const router = express.Router()

router.route('/usuarios').get(getAllUsers).post(postNewUser)
router
  .route('/usuarios/:id')
  .get(getAllUsersByID)
  .put(putAndUser)
  .delete(deleteUser)
module.exports = router
