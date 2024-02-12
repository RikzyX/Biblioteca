require('dotenv').config()
const oracledb = require('oracledb')
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const connectString = process.env.DB_CONNECTSTRING

const ODBConection = async () => {
  try {
    return await oracledb.getConnection({
      user,
      password,
      connectString,
    })
  } catch (e) {
    console.error('🔎 Error connecting to Oracle DB 🫣')
    console.error(e.message)
    return
  }
}

module.exports = {
  ODBConection,
}
