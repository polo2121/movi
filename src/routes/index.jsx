import React, { lazy, Suspense } from 'react'

// - react router
import { createBrowserRouter } from "react-router-dom"

// - layout
const Main = lazy(() => import('../layout/Main'));

// - components
import Loading from './loading';
import MainSkeleton from '../layout/main-skeleton';

// - pages
const Home = lazy(() => import('../pages/Home'));

const Router = createBrowserRouter([
    {
        path: "/",
        element:
            <Suspense fallback={<MainSkeleton />}>
                <Main />
            </Suspense>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
            },
            {
                path: "/home",
                element:
                    <Suspense fallback={<>Loading app...</>}>
                        <Home />
                    </Suspense>
            }
        ]
    }
])


export default Router