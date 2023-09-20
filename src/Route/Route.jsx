import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import DeshBoard from '../Deshboard/DeshBoard';
const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch("https://dummyjson.com/products")
            },
            {
                path: '/dashBoard',
                element: <DeshBoard></DeshBoard>
            },
        ]
    }
])

export default myCreateRoute;