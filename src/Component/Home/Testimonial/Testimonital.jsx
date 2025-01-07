import SectionTitle from "../sectionTitle/sectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Testimonital = () => {
    const [reviews, setReview] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:1000/reviews')
        .then(res => res.json())
        .then (data => setReview(data))
    })
    return (
        <div className="my-20">
             <SectionTitle
            subHeading={"What Our Clients Say"}
            heading={"TESTIMONIALS"}
            >

            </SectionTitle>

        
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review => <SwiperSlide
        key={review._id}
        >
            <div className="flex flex-col items-center my-16 mx-24">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      
      isRequired 
    />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
 
        </div>
    );
};

export default Testimonital;