import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Burger } from './components/Burger/Burger'
import { Pizza } from './components/Pizza/Pizza'
import { Refeicao } from './components/Refeicao/Refeicao'
import { AllProducts } from './components/AllProducts/AllProducts'
import { Layout } from './components/Layout/Layout'



export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'burger',
          element: <Burger />
        },
        {
          path: '/pizza',
          element: <Pizza />
        },
        {
          path: '/refeicao',
          element: <Refeicao />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        },
      ]
    },

  ])

  return <RouterProvider router={router} />

}
