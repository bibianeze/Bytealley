import React from 'react'
import purpleline from "../assets/purpleline.png"

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="container mx-auto w-11/12 p-10 ">
        <img className='my-3' src={purpleline} alt="" />
        <div className="flex flex-col md:flex-row text-center  gap-3 justify-center">
          <h3>All Rights Reserved </h3>
          <p>&#169; Copyright 2023</p>
        </div>
        <h3 className='text-center'>Designed by Kiane</h3>
      </div>
    </div>
  );
}

export default Footer