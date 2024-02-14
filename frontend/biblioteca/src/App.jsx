
import {
  Anchor,
  AppShell,
  Box,
  Burger,
  Center,
  NavLink,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBooks,
  IconFingerprint,
  IconActivity,
  IconBook,
  IconChevronRight,
} from '@tabler/icons-react'
import { useState } from 'react'
function App() {
  const [opened, { toggle }] = useDisclosure()
  const data = [
    {
      icon: IconBook,
      label: 'Libros',
      href: 'libros',
      description: 'Libros de nuestra biblioteca',
    },
    {
      icon: IconFingerprint,
      label: 'Usuarios',
      href: 'usuarios',
      rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
    },
    {
      icon: IconBooks,
      label: 'Ejemplares',
      href: 'ejemplares',
      rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
    },
    { icon: IconActivity, label: 'Activity' },
  ]
  const [active, setActive] = useState(0)

  const items = data.map((item, index) => (
    <NavLink
      href={item.href}
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ))
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Center>
          <Anchor
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
            fw={500}
            fz="lg"
            p="5px"
            size="h3"
            href="dashboard"
          >
            Biblioteca
          </Anchor>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder={false}>
        <Box w={220}>{items}</Box>
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default App
