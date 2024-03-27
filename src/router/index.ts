import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

const Home = lazy(() => import('../views/Home/Home'))
const Story = lazy(() => import('../views/Story/Story'))
const Jewelry = lazy(() => import('../views/Jewelry/Jewelry'))
const Documentary = lazy(() => import('../views/Documentary/Documentary'))
const Video = lazy(() => import('../views/Video/Video'))
const GlobalMedia = lazy(() => import('../views/GlobalMedia/GlobalMedia'))
const ContactUs = lazy(() => import('../views/ContactUs/ContactUs'))
const Layout = lazy(() => import('../views/Layout/Layout'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home)
  },
  {
    path: '/layout',
    element: React.createElement(Layout),
    children: [
      {
        path: 'story',
        element: React.createElement(Story)
      },
      {
        path: 'jewelry',
        element: React.createElement(Jewelry)
      },
      {
        path: 'documentary',
        element: React.createElement(Documentary)
      },
      {
        path: 'video',
        element: React.createElement(Video)
      },
      {
        path: 'globalMedia',
        element: React.createElement(GlobalMedia)
      },
      {
        path: 'contactUs',
        element: React.createElement(ContactUs)
      }
    ]
  }
]
const router = createBrowserRouter(routes)

export default router
