import React, { useContext } from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination} from 'swiper/modules';
import { bookshop } from '../Context/Context';
import rating from "../Images/rating.png";
import cart_icon from "../Images/cart_icon.png";
import seen_icon from "../Images/seen.png";
import { Link } from 'react-router-dom';


export default function Gallery() {
  const{books} = useContext(bookshop);

  return (
    <div>

      <h1 className='Gallery_title'>Gallery</h1>

     <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30} 
            breakpoints={{
              600:{
                slidesPerView: 1,
                
              },
              // when window width is >= 640px
            720: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={4} 
            navigation
        
          >
            {
                books.map((item,index)=>

                    <SwiperSlide className='gallery-slider' key={index} >
                        
                            <img src={item.image} className='image_slide' alt='' ></img>

                            <h4>{item.name}</h4>

                            <p className='gallery-reviews' >
                              <img src={rating} alt='' width="50px"></img>
                              <span> ({item.reviews},reviews)</span>
                              </p>

                              <p className='book_price'>$ {item.price}</p>

                              <hr style={{width:"100%"}}></hr>

                              <div className='book-display' >
                                    <Link to={`/bookdetails/${item.id}`} ><img src={seen_icon} alt='' style={{width:"30px"}} ></img></Link>
                                    <Link to="/cart"><img src={cart_icon} alt='' style={{width:"30px"}}></img></Link>
                                    
                              </div>
                              
                   
                   
             
            </SwiperSlide>
    
                )
            }
           
           
          </Swiper>
        </div> 
           )
 }
