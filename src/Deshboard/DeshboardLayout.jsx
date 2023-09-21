import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DeshboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[20%] bg-red-400'>
                <ul>
                    <li>
                        <Link to='/dashBoard'>Deshbord</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/profile'>Deshbord profile</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/editprofile'>Deshbord editprofile</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[80%'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DeshboardLayout;