import React from 'react';
import './Heroslider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination, Mousewheel } from 'swiper/modules';
import book_1 from "../Images/book1.png";
import book_2 from '../Images/book2.png';
import book_3 from "../Images/book3.png";


export default function heroslider() {
    const images =[
        book_1,
        book_2,
        book_3
                ]
  return (
    <main>

<Swiper
        modules={[Pagination, Navigation,Mousewheel]}
        spaceBetween={50} 
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        Mousewheel 

      >
        {
            images.map((item,index)=>

                <SwiperSlide key={index}  className='slide' style={{ display: 'flex', alignItems: 'center' }} >
                
                <div>
                <img src={item} alt='' ></img>

                </div>
             
                  <div>
                        <h2>The Books For Every one </h2>
                        <p>you can read the book store or at home</p>
                  </div>
 
        </SwiperSlide>

            )
        }
       
       
      </Swiper>
    </main>
  )
}
