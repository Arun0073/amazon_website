import React from 'react'
import './Testimonial.css'
import testimonialHero from '../../assets/testimonialHero.png';
import {TestimonialsData} from '../../data/testimonials'
import { Swiper,SwiperSlide } from 'swiper/react';
const Testimonial = () => {
  return (
    <div className='testimonials'>
    <div className="top">
    <div className="container5">
        <span>Top Rated</span>
        <span>Seedily say has suitable disposal and boy. Excercise joy man children rejoiced.</span>
        </div>
        <img src={testimonialHero} alt="" />
    
    
      <div className="container5">
        <span>100k</span>
        <span>Happy Customers with us </span>
      </div>
      </div>
      <div className="reviews">Reviews</div>
      <div className="carousal">
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        breakpoints={{
          856:{
        slidesPerView:3
        },
        640:{
          slidesPerView:2
        },
        0:{
          slidesPerView:1
        }
        }}
        className='tCarousal'>
            {
                TestimonialsData.map((testimonial,i)=>(
                    <SwiperSlide>
<div className="testimonial">
    <img src={testimonial.image} alt="" />
    <span>{testimonial.comment}</span>
    <hr />
    <span>{testimonial.name}</span>
</div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
