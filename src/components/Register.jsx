import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {  EyeIcon } from '@heroicons/react/24/solid'
import { AuthContext } from './AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';



const Register = () => {
    const [eye,setEye]=useState(false);
    const {createUser,googleSignIn} = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            // console.log(name,email,password);
            event.target.reset();
             createUser(email,password) 
            .then(result => {
                toast("successfully register !!")
                
            })
            .catch(error => {
                toast(error.message);
            })
    }

    const googleSignInBtn = () =>{
            googleSignIn()
            .then(()=>{
                Swal.fire({
                    title: "Congratulation !!",
                    text: "You successfully login with google!",
                    icon: "success"
                  });
            })
            .catch(error => toast(error.message))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required name='name' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name='email' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex items-center'>
          <input type={eye?"text":"password"} placeholder="password" className="input input-bordered" required name='password'/>
          <EyeIcon onClick={()=>setEye(!eye)} className="h-6 w-6 -ml-8 text-blue-500 cursor-pointer" />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <Link to='/login'><button className="btn btn-link">Already have an account ?</button></Link>
      <h1 className='text-center'>or</h1>
     <button onClick={googleSignInBtn}> <img className='h-14 w-full'  src="https://www.oncrashreboot.com/images/create-apple-google-signin-buttons-quick-dirty-way-google.png"></img></button>
    </div>
  </div>
</div>
    );
};

export default Register;