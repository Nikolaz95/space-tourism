import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './components/Root.jsx';
import Loading from './components/layouts/Loading/Loading.jsx';

// Lazy-load pages
const HomePage = lazy(() => import('./components/page/HomePage/HomePage.jsx'));
const Destination = lazy(() => import('./components/page/Destination/Destination.jsx'));
const Crew = lazy(() => import('./components/page/Crew/Crew.jsx'));
const Tehnology = lazy(() => import('./components/page/Tehnology/Tehnology.jsx'));
const ErrorPage = lazy(() => import('./components/page/ErrorPage/ErrorPage.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },

      {
        path: "/destination",
        element: (
          <Suspense fallback={<Loading />}>
            <Destination />
          </Suspense>
        ),
      },

      {
        path: "/crew",
        element: (
          <Suspense fallback={<Loading />}>
            <Crew />
          </Suspense>
        ),
      },

      {
        path: "/tehnology",
        element: (
          <Suspense fallback={<Loading />}>
            <Tehnology />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
