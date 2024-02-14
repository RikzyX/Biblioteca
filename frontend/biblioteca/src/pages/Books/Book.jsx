import {
  AspectRatio,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from '@mantine/core'
import { useGetBook } from '../../hooks/Books/useGetBooks'
export const Books = () => {
  const { book } = useGetBook()
  return (
    <Group>
      {book.map(({ isbn, titulo, autor, uriportada }) => {
        return (
          <Card
            key={isbn}
            shadow="sm"
            padding="lg"
            radius="md"
            maw={500}
            miw={300}
            withBorder
          >
            <Card.Section>
              <AspectRatio>
                <Image src={uriportada} alt="image" />
              </AspectRatio>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600}>
                {titulo === '' || null ? `No Title` : titulo}
              </Text>
              <Badge
                variant="gradient"
                gradient={{ from: 'pink', to: 'cyan', deg: 90 }}
              >
                {autor === '' ? 'No ser' : autor}
              </Badge>
              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" mt="md" radius="md">
                Book classic tour now
              </Button>
            </Group>
          </Card>
        )
      })}
    </Group>
  )
}
