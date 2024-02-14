export const convertirDatosAMinusculas = (datos) => {
  return datos.map((objeto) => {
    const nuevoObjeto = {}
    for (const clave in objeto) {
      if (Object.hasOwnProperty.call(objeto, clave)) {
        const valor = objeto[clave]
        const claveMinusculas = clave.toLowerCase()
        const valorMinusculas =
          typeof valor === 'string' ? valor.toLowerCase() : valor
        nuevoObjeto[claveMinusculas] = valorMinusculas
      }
    }
    return nuevoObjeto
  })
}
