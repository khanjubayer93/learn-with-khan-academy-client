import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Header = () => {
    const { user, } = useContext(AuthContext)



    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link to='/home' className="flex items-center p-2">
                        <img className='w-12 rounded-full' src="https://cutt.ly/rNalB3j" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">
                                {
                                    user?.photoURL ?
                                        <img className='w-10 rounded-full' src={user.photoURl} />
                                        : <FaUser></FaUser>
                                }
                            </Link>
                        </li>
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-sky-600">
                                {user?.displayName} </Link>
                        </li>
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-sky-600 hover:border-sky-600">Link</Link>
                        </li>
                        <li className="flex">
                            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-sky-600 hover:border-sky-600">Link</Link>
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