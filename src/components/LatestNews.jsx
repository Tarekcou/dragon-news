import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex  gap-4 my-4'>
      <p className='bg-red-600 btn  btn-sm text-white'>Latest </p>
      <Marquee pauseOnHover={true} className='gap-10'>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ducimus!</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ducimus!</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ducimus!</Link>
        </Marquee>
    </div>
  );
}

export default LatestNews;
