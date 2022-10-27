import React from 'react';
import { useContext } from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Header = () => {
    const { user, } = useContext(AuthContext)

    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className='flex items-center p-2'>
                        <Link to='/' className="">
                            <img className='w-12 rounded-full' src="https://cutt.ly/rNalB3j" />
                        </Link>
                        <p className='ml-2 text-sky-600 text-xl font-semibold'>LEARN WITH KHAN ACADEMY</p>
                    </div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">
                                {
                                    user?.photoURL?
                                        <img className='w-10 rounded-full' src={user.photoURL} />
                                        : 
                                        <FaUser></FaUser>          
                                }
                            </Link>
                        </li>
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-sky-600">
                                {user?.displayName} </Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-sky-600 hover:border-sky-600">Home</Link>
                        </li>
                        {/* toggle */}
                        <li className="flex">
                            
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800">
                                <span><FaMoon></FaMoon></span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-sky-100"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                </span>
                                <span><FaSun></FaSun></span>
                            </label>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to='/signin'>
                            <button className="self-center px-8 py-3 rounded">Sign in</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="self-center px-8 py-3 font-semibold rounded bg-sky-600 text-gray-50">Sign up</button>
                        </Link>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;