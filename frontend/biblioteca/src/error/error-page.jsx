import { useRouteError } from 'react-router-dom'
import {Center, Stack, Text, Title } from '@mantine/core'
export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <Center h="500px">
        <Stack>
          <Title mx="80px">Oops!</Title>
          <Text mx="20px">Lo sentimos un error a ocurrido.</Text>
        </Stack>
        <Stack></Stack>
      </Center>
    </div>
  )
}
