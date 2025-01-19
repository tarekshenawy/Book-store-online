import React, { useEffect, useState } from 'react';
import './Authors.css';

export default function Authors() {
  const [authors,setAuthors]=useState([]);
  const [input,setInput]=useState('')

    async function getAuthors(){
      let response =  await fetch("http://localhost:3000/authors");
      let data = await response.json();
      setAuthors(data)
    }

    useEffect(()=>{
      getAuthors()

    },[])

    const data = authors.filter((el)=> el.author.includes(input.toUpperCase()));
    
  return (
    <div >

      <input type='text' placeholder='Search in authors' className='authors_search' onChange={(e)=>setInput(e.target.value)}></input>

    <div className='Authors'>

      {
        data.map((el,index)=>{
          return(
          <div key={index} className='auhtor_cart' >
            <img src={el.image} alt='' className='author_image'></img>
            <h2>{el.author}</h2>
          </div>
          )
        })
      }

    </div>



    </div>
    
  )
}
