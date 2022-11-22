import React from 'react';
import BannerItem from './BannerItem';
import img1 from '../../../assests/image/img1.jfif';
import img2 from '../../../assests/image/img2.jfif';
import img3 from '../../../assests/image/img3.jfif';
import img4 from '../../../assests/image/img4.jfif';
import img5 from '../../../assests/image/img5.jfif';
import img6 from '../../../assests/image/img6.jfif';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2,
        headline: 'Running',
        text: 'It is designed to helps runners improve their running pace and form with supplemental strength-focused workouts'
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3,
        headline: 'Pilates Challenge',
        text: 'It is designed to build foundational strength and stability for your entire body'
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4,
        headline: 'No equipment',
        text: 'It is designed to provide a well-rounded workout regime whether you are at home or on the go'
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5,
        headline: 'Kettlebell ',
        text: 'It is designed for those who want to utilize kettlebells in a more structured approach.'
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6,
        headline: 'Full Fusion',
        text: 'This Challenge is an action-packed, total body focused endeavor'
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1,
        headline: 'Abs, Obliques and Lower Back',
        text: 'It is designed to build foundational strength and stability for your entire body through classic and contemporary workouts.'
    }
]
const Banner = () => {
    return (
        <div className="carousel w-3/4 h-1/2 mx-auto py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>

//         <div style={{marginTop: '-150px'}} className="carousel w-full">
//         <div id="slide1" className="carousel-item relative items-center w-full">
//           <img src="https://i.ibb.co/bs2R3y7/no-equipment.jpg" className="w-3/4 h-1/2 mx-auto" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             </div>
//  </div>
    );
};

export default Banner;