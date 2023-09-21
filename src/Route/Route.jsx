import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import DeshBoard from '../Deshboard/DeshBoard';
import Prodc from '../Pages/Products/prodc';
import DeshboardProfile from '../Deshboard/DeshboardProfile';
import DeshboardLayout from '../Deshboard/DeshboardLayout';
import DeshboardEditprofile from '../Deshboard/DeshboardEditprofile';

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
                path: '/products/:id',
                element: <Prodc></Prodc>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`),
                // loader: (object) => (console.log(object))
            },
            {
                path: '/dashBoard',
                element: <DeshboardLayout></DeshboardLayout>,
                children: [
                    {
                        path: '/dashBoard',
                        element: <DeshBoard></DeshBoard>
                    },
                    {
                        path: '/dashBoard/profile',
                        element:<DeshboardProfile></DeshboardProfile>
                    },
                    {
                        path: '/dashBoard/editprofile',
                        element:<DeshboardEditprofile></DeshboardEditprofile>
                    }
                ]
            },
        ]
    }
])

export default myCreateRoute;