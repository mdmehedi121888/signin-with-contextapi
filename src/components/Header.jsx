import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const {user,handleSignOut} = useContext(AuthContext)
    const signOutBtn = () =>{
        handleSignOut()
        .then(()=>{
            toast("sign out successfully")
        })
        .catch((error)=>{
            toast(error.message);
        })

        
    }
    return (
        
            <div className="navbar bg-base-300 flex justify-between">
            <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            <nav className='gap-5 text-lg'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
               {
                user && <><span>{user.email} </span> <button onClick={signOutBtn} className="btn btn-link">Sign Out</button></>
               }
            </nav>
            </div>
        
    );
};

export default Header;