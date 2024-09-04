import React from 'react'
import API from "../assets/API.png"
import ByteAllley from "../assets/ByteAllley.png"
import "../styles/hero.css"
import herovect from "../assets/herovect.png"
// import herogradients from "../assets/herogradients.png"

const Hero = () => {
  return (
    <div className="bg-black gradient-bg ">
      <div className="bg-black text-white  flex-col-reverse gap-7 justify-between flex md:flex-row items-center  container mx-auto w-11/12 p-10">
        <div className="md:w-[50%]">
          <h1 className="text-4xl lg:text-7xl flex">
            ByteAlley
            <span>
              <img className="w-12 mt-3 lg:w-28 mb-1" src={API} alt="" />
            </span>{" "}
          </h1>
          <h1 className="text-4xl lg:text-7xl ">Architecture</h1>
          <p className="text-sm my-3 line leading-5 heropara">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
            vulputate libero et velit
            <br /> interdum, ac aliquet odio mattis. Class aptent <br />
            taciti sociosqu ad litora torquent per.
          </p>
          <button className="herobtn rounded-lg flex p-1 md:p-2 gap-6 text-xs items-center">
            Check Out Documentation{" "}
            <span>
              <img className="w-3 " src={herovect} alt="" />
            </span>
          </button>
        </div>
        <div className="w-full">
          <img className=" lg:w-4/6 lg:mx-auto object-contain " src={ByteAllley} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero