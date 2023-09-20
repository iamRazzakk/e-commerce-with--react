import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './LayOuts/MainLayOut.jsx'
import Home from './Pages/Home/Home.jsx'
import Products from './Pages/Products/Products.jsx'
import myCreateRoute from './Route/Route.jsx'
// const myCreateRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayOut></MainLayOut>
//     ,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       },
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
