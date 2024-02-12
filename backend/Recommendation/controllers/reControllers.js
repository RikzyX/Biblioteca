const {
  deleteRecoms,
  uptateRecoms,
  postnewRecoms,
  allRecombyid,
  allRecoms,
} = require('../constants/querys')
const {
  putRecomQuery,
  postNewRecomQuery,
  getAllRecomsByIDQuery,
  getAllRecomQuery,
  deleteRecomQuery,
} = require('../services/recomServices')
const dbUtils = require('../../database/oracleConnection')
exports.getAllRecom = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const Recoms = await getAllRecomQuery(connection, allRecoms)
    res.json({ data: Recoms })
  } catch (error) {
    console.error('Error retrieving Recoms:', error.message)
    res.status(500).send({ message: 'Error retrieving Recoms' })
  }
}
exports.getAllRecomByID = async (req, res) => {
  try {
    const ISBN = req.params.ISBN
    const connection = await dbUtils.ODBConection()
    const Recoms = await getAllRecomsByIDQuery(connection, allRecombyid, ISBN)
    res.json({ data: Recoms })
  } catch (error) {
    console.error('Error retrieving Recoms:', error.message)
    res.status(500).send({ message: 'Error retrieving Recoms' })
  }
}
exports.postNewRecom = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await postNewRecomQuery(connection, postnewRecoms, req.body)
    res.status(200).send({ message: result })
  } catch (e) {
    console.error('Error to create new Recom:', e.message)
    res.status(500).send({
      message:
        'Error to create new Recom checks if the data was entered correctly',
    })
  }
}
exports.putRecom = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    const result = await putRecomQuery(
      connection,
      uptateRecoms,
      req.params.ISBN,
      req.body
    )
    res.send(result)
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error updating Recoms to DB')
  }
}
exports.deleteRecom = async (req, res) => {
  try {
    const connection = await dbUtils.ODBConection()
    await deleteRecomQuery(connection, deleteRecoms, req.params.ISBN)
    res.status(200).json({ message: 'Recomendacion Eliminada correctamente' })
  } catch (err) {
    console.error(err.message)
    response.status(500).send('Error deleting Recommendation to DB')
  }
}
