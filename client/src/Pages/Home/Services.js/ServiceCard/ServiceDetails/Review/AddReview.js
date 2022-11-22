import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../../../Context/AuthProvider/AuthProvider';

const AddReview = ({serviceId,serviceName,refresh, setrefresh}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    // const {displayName,photoURL, email} = user;
    const handleAddReview = e =>{
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const created = new Date();
        const review = {
            displayName: user?.displayName,
            photoURL:user?.photoURL,
            email:user?.email,
             text, serviceId, serviceName, created
        }
        fetch('https://fitness-gamma.vercel.app/addReview', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(review)
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            setrefresh(!refresh);
            toast.success('review added successfully')
            form.reset();     
        }
    })
    .catch(er => console.error(er));
//   console.log(review)

    }
    return (
        <div>
           {
            user ? <form onSubmit={handleAddReview} >
            <div className="form-control "> 
            <textarea name='text' className="textarea textarea-primary  w-1/2 h-24 mx-auto" placeholder="Write a review"></textarea>
            </div>
           <div className='text-center my-4'> 
           <button className=" rounded-full  p-3 w-30   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                Add Review
              </button>
           </div>
            </form>
             :
              <div>
                <h2 className='font-bold text-lg text-center '>Want to give a review? 
               <Link className='hover:bg-gray-400' to='/login' state ={{from: location}} replace> login here</Link> </h2> 
               {/* <Navigate to={'/login'} state ={{from: location}} replace ></Navigate> */}
              </div>
           }
            
        </div>
    );
};

export default AddReview;