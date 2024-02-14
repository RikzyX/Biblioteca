import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../error/error-page'
import App from '../App'
import { Books } from '../pages/Books/Book'
import { User } from '../pages/User/User'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'libros/',
        element: <Books />,
      },
      {
        path: 'usuarios/',
        element: <User />,
      },
      {
        path: 'ejemplares/',
        element: <Books />,
      },
    ],
  },
])
