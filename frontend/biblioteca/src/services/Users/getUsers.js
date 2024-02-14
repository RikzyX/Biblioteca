import axios from 'axios'
export const getUsers = async () => {
  try {
    const URL = `http://localhost:3130/usuarios`
    const response = await axios.get(URL)
    const { data } = await response.data
    console.log(data)
    const user = data.map(({ ID, TIPOUSUARIO, NOMBRE, APELLIDOS }) => ({
      ID,
      TIPOUSUARIO,
      NOMBRE,
      APELLIDOS
    }))
    return user
  } catch (e) {
    throw new Error(e)
  }
}
