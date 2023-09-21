import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <section className='flex justify-between px-10 shadow-md py-7'>
                <div>
                    <h1 className='flex items-center justify-center text-xl font-bold'>Holly Shop</h1>
                </div>
                <nav className='py-2'>
                    <ul className='flex gap-6 '>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 " : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 rounded" : ""
                            }
                        >
                            products
                        </NavLink>
                        <NavLink
                            to="/dashBoard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <div>
                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-400">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-black sm:text-center dark:text-black">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default MainLayOut;