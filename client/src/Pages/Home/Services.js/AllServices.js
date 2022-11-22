import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard/ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    const {_id} = services;
    useTitle('allservices')
    return (
        <div>
            <h2 className="text-5xl font-semibold my-10 text-center">My Workout Programs</h2>
             <div className='grid gap-6 ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;