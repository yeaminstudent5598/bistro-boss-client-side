import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Home/Shared/Footer/Footer';
import Navbar from '../Component/Home/Shared/Footer/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
           {noHeaderFooter ||  <Footer/>}
        </div>
    );
};

export default Main;