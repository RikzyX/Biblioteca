import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </MantineProvider>
  </React.StrictMode>
)
