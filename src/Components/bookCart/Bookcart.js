import React, { useContext, useEffect } from 'react';
import "./Bookcart.css"
import cartcross from "../Images/cart_cross_icon.png";
import { bookshop } from '../Context/Context';
import { Authcontext } from '../Context/Authcontext';



export default function Cartitems() {
    const {bookcart,gettotal,increasecount,decreasecount,deleteitem}=useContext(bookshop);
const {currentuser}=useContext(Authcontext);
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])
      
  return (
            <div className='cart_container'>
        <table>
                    <thead>
                        <tr>
                                <th>Products </th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                        </tr>
                        <tr >
                            <td colspan="6">
                                <hr  style={{marginTop:"10px"}}></hr>
                            </td>
                        </tr>
                                                
                    </thead>
             
                    <tbody>
                   
        {
                    bookcart.map((item,index)=>{
                        if(currentuser){
                            return(
                        
                                <tr>
                                        <td><img src={item.image} alt='' width="40px"></img></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                        <td><button onClick={()=>increasecount(item)}>+</button> {item.quantity} <button onClick={()=>decreasecount(item)}>-</button></td>
                                        <td>{item.quantity * item.price}</td>
                                       <td><img src={cartcross}  alt='' className='cross' onClick={()=>deleteitem(item)} ></img></td> 
                                </tr>
                
                                    )
                                

                        }
                      
                })
            } 
                    </tbody>
    </table>

  
    <div className='cart_bottom'>
     
        <div className='cart_total'>

            <h2>Cart Totals</h2>

                    <div className='subtotal'>
                        <p>Substotal</p>
                        <p>$ {currentuser ? gettotal():0}</p>
                    </div>

                    <hr></hr>
                    <div className='shipping'>
                        <p>shipping fee</p>
                        <p>free</p>
                    </div>

                    <hr></hr>
                    <div className='total'>
                        <p>Total</p>
                        <p>$ {currentuser ? gettotal():0} </p>
                    </div>

                    <hr></hr>
                    <button>Processed To Checkout</button>
        </div>

        <div className='promocode'>
            <p>if you have a promocode . enter it here</p>
            <div className='promo_input'>
                <input type='text' placeholder='Enter promocode'></input>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </div>
    
  

    
    


</div>
    
  )
}
