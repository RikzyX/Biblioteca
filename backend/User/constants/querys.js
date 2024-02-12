export const allusers = 'SELECT * FROM USUARIOS'
export const alluserbyid = 'SELECT * FROM USUARIOS WHERE ID = :id'
export const postnewusers =
  'INSERT INTO USUARIOS (ID,TIPOUSUARIO, NOMBRE, APELLIDOS, CORREOELECTRONICO, CONTRASENIA, LISTAPRESTAMOS, MULTAACTUAL, CALLE, NUMERO, PISO, CIUDAD, CODIGOPOSTAL, TELEFONOPADRES,NOMBREDEPARTAMENTO, ESTADOUSUARIO)' +
  'VALUES(:ID,:TipoUsuario, :Nombre, :Apellidos,:CorreoElectronico, :Contrasenia, :ListaPrestamos, :MultaActual, :Calle, :Numero, :Piso, :Ciudad, :CodigoPostal,:TelefonoPadres, :NombreDepartamento, :EstadoUsuario)'
export const uptateusers = `UPDATE USUARIOS SET TIPOUSUARIO=:TipoUsuario, NOMBRE=:Nombre, APELLIDOS=:Apellidos, CORREOELECTRONICO=:CorreoElectronico, CONTRASENIA=:Contrasenia, LISTAPRESTAMOS=:ListaPrestamos, MULTAACTUAL=:MultaActual, CALLE=:Calle, NUMERO=:Numero, PISO=:Piso, CIUDAD=:Ciudad, CODIGOPOSTAL=:CodigoPostal, TELEFONOPADRES=:TelefonoPadres, NOMBREDEPARTAMENTO=:NombreDepartamento, ESTADOUSUARIO=:EstadoUsuario 
   WHERE ID=:id`
export const deleteusers = 'DELETE FROM USUARIOS WHERE ID = :id'
