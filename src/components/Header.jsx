import React from 'react';
import logo from "../assets/assets/logo.png"
import moment from 'moment/moment';
const Header = () => {
  return (
    <div className='space-y-4'>
    <div >
      <img className='w-[300px] mx-auto' src={logo} />
    </div>
      <h1>Journalism Without Fear or Favour</h1>
      <p>{ moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}

export default Header;
