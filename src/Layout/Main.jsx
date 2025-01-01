import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Home/Shared/Footer/Footer';
import Navbar from '../Component/Home/Shared/Footer/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;