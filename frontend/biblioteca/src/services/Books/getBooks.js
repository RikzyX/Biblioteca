import axios from 'axios'
import { convertirDatosAMinusculas } from '../../constants/trransfomText'
export const getBook = async () => {
  try {
    const URL = `http://localhost:3130/libros`
    const response = await axios.get(URL)
    const { data } = await response.data
    const book = convertirDatosAMinusculas(data)
    return book
  } catch (e) {
    throw new Error(e)
  }
}
