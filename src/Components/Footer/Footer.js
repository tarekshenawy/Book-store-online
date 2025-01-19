import React from 'react';
import "./Footer.css";
import instgram from "../Images/instagram_icon.png";
import pintester from "../Images/pintester_icon.png";
import whatsapp from "../Images/whatsapp_icon.png";

export default function Footer() {
  return (
   
    <footer >
     
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    <div className='footer_icon'>
        <img src={instgram} alt=''></img>
        <img src={pintester} alt=''></img>
        <img src={whatsapp} alt=''></img>
    </div>
    
    <hr></hr>
  
    <p>Copyright @ 2024 All-Right Reserved</p>
    

</footer>
  )
}
