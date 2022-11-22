import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const AllReviews = ({serviceId, refresh, setrefresh}) => {
    const [reviews, setReviews] = useState([]);
    const {loading} = useContext(AuthContext);
    
    
    // console.log(reviews)
    useEffect( () =>{
        fetch(`https://fitness-gamma.vercel.app/reviews/${serviceId}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, [serviceId, refresh]);
    if(loading){
        return  <div className=" my-5 mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> 
    }
    return (
        <div data-aos="flip-up" className='my-10'>
               {/* < className='grid gap-6  ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> */}
                { 
                reviews?.length===0 ? 
                <h2 className='font-bold text-xl text-center '>No Reviews  available for this service</h2>
                : 
                <div>
                <h2 className='font-bold text-xl text-center '>User's Review on this service</h2>
                <div className='grid gap-6  ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                   { reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)}
                    </div>
                    </div>
                }
            </div>
        
    );
};

export default AllReviews;