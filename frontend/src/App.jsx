import React from 'react'
import Login from './components/Login'
import Signin from './components/Signin'
import Products from './components/Products'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Card from './components/Card'
import Cart from './components/Cart'
import Store from './components/Store'
import SingleProduct from './components/SingleProduct'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Login/></>
    },
    {
      path:"/signin",
      element:<><Signin/></>
    },
    {
      path:"/login",
      element:<><Login/></>
    },
    {
      path:"/home",
      element:<><Products/></>
    },
    {
      path:"/cards",
      element:<><Card/></>
    },
    {
      path:"/cart",
      element:<><Cart/></>
    },
    {
      path:"/products/:brand",
      element:<><Store/></>
    },
    {
      path:"/products/:brand/:id",
      element:<><SingleProduct/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  )
}

export default App
