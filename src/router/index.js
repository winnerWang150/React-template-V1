import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Demo = React.lazy(() => import('@/views/demo'))

const routers = [
  {
    path: '/',
    element: <Navigate to={'/home'}/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
]
export default routers