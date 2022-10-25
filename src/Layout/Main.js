import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import LeftSideNav from '../pages/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div className='grid grid-cols-1'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='grid grid-cols-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;