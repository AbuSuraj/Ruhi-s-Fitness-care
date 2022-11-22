import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({service }) => {
    useEffect(() => {
        AOS.init();
      }, []);
    const { _id, img, price, title, duration,description } = service;
    return (
        <div data-aos="fade-up" className="card card-compact w-96 bg-base-100 shadow-xl">
             <PhotoProvider>
             <PhotoView src={img}>
            <figure><img className='w-full' src={img} alt="service" /></figure>
             </PhotoView> 
             </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Duration: {duration} weeks</p>
                {/* <p>{description.length>100 ?  description.slice(0,100): description}...</p> */}
                <p>{description.length>100 ?  description.slice(0,100)+'...': description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;