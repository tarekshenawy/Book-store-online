import React from 'react';
import './Storefeatures.css'
import gift_cart from '../Images/gift cart.png';
import free_shipping from "../Images/free shipping.png";
import arrow from "../Images/arrow.png";
import contact from "../Images/contact.png";

export default function Storefeatures() {
  return (
    <div className='storefeatures'>
        <div className='features'>
            <img src={gift_cart} alt=''></img>
            <h2>Gift Cart</h2>

        </div>
        <div className='features'>
            <img src={free_shipping} alt=''></img>
            <h2>Free shipping</h2>

        </div>
        <div className='features'>
            <img src={arrow} alt=''></img>
            <h2>8 Days return</h2>

        </div>
        <div className='features'>
            <img src={contact} alt=''></img>
            <h2>Contact us</h2>

        </div>

    </div>
  )
}
