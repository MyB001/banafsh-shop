import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './Components/Header'

export default function App() {

  const router = useRoutes(routes)

  return (
    <div>
      <Header />
      {router}
    </div>
  )
}
