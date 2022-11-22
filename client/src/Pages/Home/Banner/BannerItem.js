import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next, headline, text} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img w-[100%]'>
                    <img src={image} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-lg md:text-6xl font-bold text-white'>
                        {headline}
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='hidden md:inline-block text-sm md:text-xl text-white'> {text}</p>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;