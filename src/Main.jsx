import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


const Main = () => {
    return (
        <div>
           <Header></Header>
          <div className='min-h-[calc(100vh-284px)]'>
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
          
        </div>
    );
};

export default Main;