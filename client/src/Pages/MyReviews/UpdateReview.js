import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
const UpdateReview = () => {
    useTitle('Update Review')
    const  review = useLoaderData();
    const [newReview, setNewReview] = useState(review[0])
    // console.log(review)
    // const {_id, text} = review;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    console.log(review[0])
    const handleAddReview = e =>{
        e.preventDefault();
        fetch(`https://fitness-gamma.vercel.app/my-review/${review[0]._id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                Swal.fire("Review Updated successfully");
                 navigate(from,{replace:true})
           }
        })
    }
    const handleInputChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...newReview};
        newProduct[field] = value;
        setNewReview(newProduct)
     }
    // console.log(review)
    return (
        <div className='my-5'>
              <h2 className='font-bold text-xl text-center mb-4 '> Update Your Review here</h2>
              <form onSubmit={handleAddReview} >
            <div className="form-control "> 
            <textarea onChange={handleInputChange} name='text' defaultValue={review[0]?.text} className="textarea textarea-primary  w-1/2 h-24 mx-auto"  ></textarea>
            </div>
           <div className='text-center my-4'> 
           <button className=" rounded-full  p-3 w-30   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                Add Review
              </button>
           </div>
            </form>
        </div>
    );
};

export default UpdateReview;