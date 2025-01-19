import React, { createContext,  useContext,  useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";


export const bookshop = createContext(null);


const Bookcontextprovider =(props)=>{


  
    const [books,setBooks]=useState([]);
    const [bookcart,setBookcart]=useState([]);

  
//////////////////////////////////////////////////function getbook from server
   async function getbooks(){
     let response = await fetch('http://localhost:3000/books');
     let data = await response.json();
      setBooks(data)
   }

   useEffect(()=>{
    getbooks()

   },[])
////////////////////////////////////////////////// function getbook from cart 
   async function getbookfromcart(){
    let response = await fetch('http://localhost:3000/cart');
    let data = await response.json();
     setBookcart(data)
  
  }
  useEffect(()=>{
    getbookfromcart()

   },[])
/////////////////////////////////////////////////// function addbook to cart 
let q=1;
 async function Addbooktocart(product){

 let response =await fetch(`http://localhost:3000/cart?name=${product.name}`);
    let data = await response.json();
    if(data.length > 0){
        const book = data[0];
       await fetch(`http://localhost:3000/cart/${book.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity : book.quantity + 1})
              })
            
    }else{
         await   fetch(`http://localhost:3000/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...product,quantity:q})
      })
 
    }
    await getbookfromcart()
  
  }

  //////////////////////////////////////////////// funtion gettotal of quantity

  function gettotal(){
let total=0;
    for( let i=0;i<bookcart.length;i++){
        total += bookcart[i].quantity * bookcart[i].price;
        
        }
        return total;

   }
  ///////////////////////////////////////////// function increase count of book

 async function increasecount(product){
 
        await fetch(`http://localhost:3000/cart/${product.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity :product.quantity + 1})
              })
              await getbookfromcart()

            }

 /////////////////////////////////////////////// function decrese count in book           

     async function decreasecount(product){
              if(product.quantity >1){
                
              await fetch(`http://localhost:3000/cart/${product.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity :product.quantity - 1})
              })
              await getbookfromcart()

              }else{
                 deleteitem(product)
              }
 
                  }


////////////////////////////////////////////// function to delete book from cart 
    async function deleteitem(product){
      await fetch(`http://localhost:3000/cart/${product.id}`, {
        method: 'DELETE',
       
      })
      await getbookfromcart()

    }              

            
       



const contextvalue={books,bookcart,Addbooktocart,gettotal,increasecount,decreasecount,deleteitem};

    return(
        <bookshop.Provider value={contextvalue}>
            {props.children}

        </bookshop.Provider>
    )

}

export default Bookcontextprovider;