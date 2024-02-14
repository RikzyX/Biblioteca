import { Center, Loader } from '@mantine/core'

export const Loading = (prop) => {
  const { isLoading } = prop
  return (
    isLoading && (
      <Center>
        <Loader mt="md" mb="xs" type="bars" />
      </Center>
    )
  )
}
