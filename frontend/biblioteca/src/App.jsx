import { Anchor, AppShell, Box, Burger, Center, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBooks,
  IconFingerprint,
  IconActivity,
  IconBook,
  IconChevronRight,
} from '@tabler/icons-react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Books } from './pages/Books/Book'
import { User } from './pages/User/User'
import { HistoryLoan } from './pages/History/Loan/HistoryLoans'
import { HistoryFines } from './pages/History/Fines/HistoryFines'
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
      <AppShell.Header withBorder={false}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Center>
          <Anchor
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
            fw={500}
            fz="lg"
            href="/"
          >
            Biblioteca
          </Anchor>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder={false}>
        <Box w={220}>{items}</Box>
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path="/libros" element={<Books />} />
          <Route path="/usuarios" element={<User />} />
          <Route path="/ejemplares" element={<Books />} />
          <Route path="/historialmultas" element={<HistoryFines />} />
          <Route path="/historialprestamo" element={<HistoryLoan />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
