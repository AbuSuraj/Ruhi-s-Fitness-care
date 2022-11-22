import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
 
import Features from '../Features/Features';
import Services from '../Services.js/Services';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner> 
          <Services></Services>
          <div className='text-center my-10'>
          <Link to={'/allservices'} className='btn btn-primary '>See All Services</Link>
          </div>
          <Features></Features>
          <FAQ></FAQ>
        </div>
    );
};

export default Home;