import React, { useContext, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import Review from "./Review/Review";
import AOS from "aos";
import "aos/dist/aos.css"
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../../../hooks/useTitle";
const ServiceDetails = () => {
  const { _id, img, price, title, duration, description } = useLoaderData();
  const {loading} = useContext(AuthContext);
  useTitle('service details')
  useEffect(() => {
    AOS.init();
  }, []);

  if(loading){
    return  <div className=" my-5 mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> 
}
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-4 mb-10 ml-4">service details</h2>
      <div  className="card card-compact  mx-10 bg-base-200 shadow-xl">
          <h2 className="card-title my-4 ml-4 md:ml-10">{title}</h2>
          <div data-aos="flip-down">

          <PhotoProvider >
          <PhotoView src={img}>
        <figure>
          <img  className="w-[50%] rounded shadow-xl mt-4" src={img} alt="service" />
        </figure>
        </PhotoView>
          </PhotoProvider>
          </div>
        <div className="card-body">
          <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {price}
                  </span>
                </div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {duration}
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    Weeks
                  </span>
                </div>
                <h2 className="font-semibold text-xl mt-4 ">Overview:</h2>
                <p>{description}</p>
         
        </div>
      <Review key={_id} serviceId = {_id} serviceName = {title}
      ></Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
