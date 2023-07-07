import React from 'react'

// - react router
import { createBrowserRouter } from "react-router-dom"

// - layout
import Main from "../layout/main"

// - pages
import Home from "../pages/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            }
        ]
    }
])


export default Router