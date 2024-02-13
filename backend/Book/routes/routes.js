const express = require('express')
const {
  getAllBook,
  postNewBook,
  getAllBookByID,
  putBook,
  deleteBook,
  borrowedBooks,
} = require('../controllers/BookControllers')

const router = express.Router()

router.route('/libros').get(getAllBook).post(postNewBook)
router.route('/libros/consultar-prestados').get(borrowedBooks)
router
  .route('/libros/:ISBN')
  .get(getAllBookByID)
  .put(putBook)
  .delete(deleteBook)
module.exports = router
