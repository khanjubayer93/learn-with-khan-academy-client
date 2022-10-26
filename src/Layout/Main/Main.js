import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import LeftSideNav from '../../pages/LeftSideNav/LeftSideNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='course-container'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;