import axios from 'axios'
import { convertirDatosAMinusculas } from '../../constants/trransfomText'
export const getUsers = async () => {
  try {
    const URL = `http://localhost:3130/usuarios`
    const response = await axios.get(URL)
    const { data } = await response.data
    const user = convertirDatosAMinusculas(data)
    return user
  } catch (e) {
    throw new Error(e)
  }
}
