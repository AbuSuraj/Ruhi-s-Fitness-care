import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState("");
    // const [accepted, setAccepted] = useState(false);
    useTitle('Register')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { createUser, updateName,loading, verifyEmail, signInWithGoogle, signInWithGithub, updateUserProfile } =
      useContext(AuthContext)
   
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);
    
        createUser(email, password)
          .then((result) => {
            toast.success("User created Successfully!");
            const user = result.user;
            console.log(user);
            setError("");
            form.reset();
            // navigate(from, { replace: true })
            handleUpdateUserProfile(name, photoURL);
            // handleEmailVerification();
             
            const currentUser = {
              email: user?.email,
            };
            fetch('https://fitness-gamma.vercel.app/jwt',{
                  method:"POST",
                  headers:{
                    'content-type':'application/json'
                  },
                  body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  localStorage.setItem('auth-token',data.token);
                  navigate(from, { replace: true });
                  
                })
                .catch(err => {
                  console.log(err);
                })
            
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
      };

      const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        updateUserProfile(profile)
          .then(() => {})
          .catch((error) => console.error(error));
      };
     
    
      const handleEmailVerification = () => {
        console.log("verified")
        verifyEmail()
          .then(() => {
            toast.success("Please verify your email address before login!");
          })
          .catch((error) => console.error(error));
      };

        // Google Signin
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user)
          toast.success("User created Successfully with Google!");
          const user = result.user;
          const currentUser = {
            email: user?.email,
          };
          fetch('https://fitness-gamma.vercel.app/jwt',{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify(currentUser)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                localStorage.setItem('auth-token',data.token);
                navigate(from, { replace: true });
                
              })
              .catch(err => {
                console.log(err);
              })
          // navigate(from, { replace: true })
        })
      }
  
      //Github login
      const handleGithubSignin = () =>{
          signInWithGithub()
          .then(result =>{
            toast.success("User created Successfully with Github!");
              console.log(result.user)
          navigate(from, { replace: true })
          })
      }
      if(loading){
        return  <div className=" my-5 mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> 
    }
    return (
        <div className='flex justify-center items-center pt-8 mb-8'>
        <div className='flex flex-col shadow-2xl max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center '>
            <h1 className='my-3 text-4xl font-bold'>Register</h1>
            <p className='text-sm text-gray-400'>Create a new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-12 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='photoURL' className='block mb-2 text-sm'>
                Photo URL
                </label>
                <input
                  type='text'
                  name='photoURL'
                  id='photoURL'
                  placeholder='Enter Your photoURL Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                />
              </div>
            </div>
            <div className='space-y-2'>
            <p className="text-red-600">{error}</p>
              <div>
                <button
                  type='submit'
                  className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                >
                  Register
                </button>
              </div>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Register with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={handleGoogleSignin}
              aria-label='Log in with Google'
              className='p-3 rounded-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
          
            {/* <button
            onClick={handleGithubSignin}
            aria-label='Log in with GitHub' className='p-3 rounded-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
              </svg>
            </button> */}
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Already have an account yet?{' '}
            <Link to='/login' className='hover:underline text-gray-600'>
              Login
            </Link>
            
          </p>
        </div>
              </div>
    );
};

export default Register;