import React from 'react';
import Heroslider from '../Components/Hero slider/heroslider';
import Storefeatures from '../Components/Storefeatures/Storefeatures';
import Gallery from '../Components/Galleryofbooks/Gallery';

export default function Home() {
  return (
    <div>
        <Heroslider/>
        <Storefeatures/>
        <Gallery/>
    </div>
  )
}
