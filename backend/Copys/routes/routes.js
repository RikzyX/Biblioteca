const { getAllCopy, postNewCopy, getAllCopyByID, putCopy, deleteCopy, verifyAllCopy } = require("../controllers/copyControllers")
const express = require('express')
const router = express.Router()

router.route('/ejemplares').get(getAllCopy).post(postNewCopy)
router.route('/ejemplares/cantidad').get(verifyAllCopy)
router
  .route('/ejemplares/:id')
  .get(getAllCopyByID)
  .put(putCopy)
  .delete(deleteCopy)
module.exports = router