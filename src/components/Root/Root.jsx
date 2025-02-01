import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' max-w-6xl mx-auto items-center '>
             
            <Navbar/>
            <Outlet/>
            <Footer/>


        </div>
    );
};

export default Root;