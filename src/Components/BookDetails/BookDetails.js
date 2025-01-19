import React, { useContext, useEffect, useState } from 'react';
import './BookDetails.css';
import { useParams } from 'react-router-dom';
import rating from "../Images/rating.png"
import { bookshop } from '../Context/Context';
import { Authcontext } from '../Context/Authcontext';




export default function BookDetails() {
    const {Addbooktocart}=useContext(bookshop)
    const [bookdetails,setBookdetails]=useState([]);
    const {bookId}=useParams();
    const {currentuser}=useContext(Authcontext);
    
    async function getbookbyId() {
       let response = await fetch(`http://localhost:3000/books/${bookId}`);
       let data = await response.json();
        setBookdetails(data);
 
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        getbookbyId()
    
    },[])


  return (
    <div>
        <div className='book_details'>

            <img src={bookdetails.image} className='book-image' alt=''></img>

            <div className='book_info'>

                <h3>{bookdetails.name}</h3>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>

                            <img src={rating} alt=''  style={{width:"100px"}}></img>
                            <span> ({bookdetails.reviews},reviews)</span>

                </div>
                <h4>Author : {bookdetails.author}</h4>
                <h3 style={{color:"red"}}>Price: $ {bookdetails.price}</h3>
{ 
    currentuser ?
    <button className='btn' onClick={()=>Addbooktocart(bookdetails)} >Add to cart</button>
    :
    <>
    
     <button className='btn' onClick={()=>Addbooktocart(bookdetails)} disabled={true} >Add to cart</button>

    </>
   

}
               

            </div>
        </div>


        <div className='book_description'>
            <h1>Book Description</h1>
            <h4 style={{width:"90%"}}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic possimus non maiores dicta, atque est, voluptatibus, ut vero esse nisi adipisci deserunt aliquam fugit facere temporibus consectetur asperiores dolores nesciunt. Qui modi commodi amet, ex odio at voluptatibus aperiam labore dicta doloremque tempore nostrum, dolorum tenetur provident asperiores repellat fuga magnam illum earum minus. Similique minima nihil reprehenderit neque maxime distinctio impedit quisquam! Illum, molestiae voluptatibus nemo perferendis voluptate ipsum, quod tempora eius harum nihil quam fugiat quas. Sed repellat quam consequuntur exercitationem voluptatibus earum deleniti fugiat. Porro distinctio cumque error vero placeat amet odit officiis sed nemo culpa!
            </h4>
        </div>




    </div>
  )
}
