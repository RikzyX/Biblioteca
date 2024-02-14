import { ActionIcon,Center, Table } from '@mantine/core'
import { useGetUser } from '../../hooks/Users/useGetUsers'
import { Loading } from '../../loading'
import { IconEditCircle, IconTrashX } from '@tabler/icons-react'
export const User = () => {
  const { user, isLoading } = useGetUser()
  const rows = user.map(
    ({
      id,
      tipousuario,
      nombre,
      apellidos,
      correoelectronico,
      calle,
      numero,
      ciudad,
      nombredepartamento,
      telefonopadres,
      maxprestamos,
    }) => (
      <Table.Tr key={id}>
        <Table.Td>{tipousuario}</Table.Td>
        <Table.Td>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</Table.Td>
        <Table.Td>
          {apellidos.charAt(0).toUpperCase() + apellidos.slice(1)}
        </Table.Td>
        <Table.Td>{correoelectronico}</Table.Td>
        <Table.Td>{calle}</Table.Td>
        <Table.Td>{numero}</Table.Td>
        <Table.Td>{ciudad}</Table.Td>
        <Table.Td>{nombredepartamento}</Table.Td>
        <Table.Td>
          {telefonopadres === ' ' || null ? `Mayor` : telefonopadres}
        </Table.Td>
        <Table.Td>{maxprestamos}</Table.Td>
        <Table.Td>
          <Center>
            <ActionIcon variant="light" size="lg" radius="lg">
              <IconEditCircle size={20} />
            </ActionIcon>
            <ActionIcon
              variant="light"
              color="red"
              size="lg"
              radius="lg"
              aria-label="Settings"
            >
              <IconTrashX />
            </ActionIcon>
          </Center>
        </Table.Td>
      </Table.Tr>
    )
  )
  return (
    <>
      <Loading isloading={isLoading} />
      <Center>
        <Table withTableBorder striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tipo Usuario</Table.Th>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Apellido</Table.Th>
              <Table.Th>Correo Electronico</Table.Th>
              <Table.Th>Calle</Table.Th>
              <Table.Th>Numero</Table.Th>
              <Table.Th>Ciudad</Table.Th>
              <Table.Th>Nombre departamento</Table.Th>
              <Table.Th>Numero de padres</Table.Th>
              <Table.Th>Maximo Prestamos</Table.Th>
              <Table.Th>Acciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Center>
    </>
  )
}
