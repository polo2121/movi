// - react
import { useState } from 'react'
import './App.css'

// - react-router
import { RouterProvider } from "react-router-dom"

// - route
import Router from "./routes"

function App() {

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
