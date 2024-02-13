const dbUtils = require('../../database/oracleConnection')
const { allBooks, allBookbyid, postnewBooks, deleteBooks, uptateBooks } = require('../constants/querys')
const { putBookQuery, postNewBookQuery, getAllBooksByIDQuery, getAllBookQuery, deleteBookQuery } = require('../services/bookServices')


export const getAllBook = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const books = await getAllBookQuery(connection, allBooks)
    res.json({ data: books })
  } catch (error) {
    console.error('Error retrieving Books:', error.message)
    res.status(500).send({ message: 'Error retrieving Books' })
  }
}
export const getAllBookByID = async (req, res) => {
  try {
    const ISBN = req.params.ISBN
    const connection = await dbUtils.ODBConection()
    const books = await getAllBooksByIDQuery(connection, allBookbyid, ISBN)
    res.json({ data: books })
  } catch (error) {
    console.error('Error retrieving Books:', error.message)
    res.status(500).send({ message: 'Error retrieving Books' })
  }
}
export const postNewBook = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    await postNewBookQuery(connection, postnewBooks, req.body)
    res.status(200).json({ message: 'Libro agregado correctamente.' })
  } catch (e) {
    console.error('Error to create new Book:', e.message)
    res.status(500).send({
      message:
        'Error to create new Book checks if the data was entered correctly',
    })
  }
}
export const putBook = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putBookQuery(
      connection,
      uptateBooks,
      req.params.ISBN,
      req.body
    )
    res.json(result)
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating Books to DB')
  }
}
export const deleteBook = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    await deleteBookQuery(connection, deleteBooks, req.params.ISBN)
    res.status(200).json({ message: 'Libro eliminado correctamente' })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting Books to DB')
  }
}