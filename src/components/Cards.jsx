import React from 'react'
import virtualimg from "../assets/virtualimg.png"
import Businessman from "../assets/Businessman.png"

const Cards = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="container mx-auto w-11/12 ">
        <h1 className="text-center text-2xl md:text-5xl my-12 font-bold">
          Project Features
        </h1>
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <img className="md:w-[40%]" src={virtualimg} alt="" />
          <div className="">
            <h2 className="mb-6 text-center md:text-start text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="border border-white rounded-lg p-6">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-24 items-center my-5">
          <div className="">
            <h2 className="mb-6 text-center md:text-start text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="border border-white rounded-lg p-6">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
          <img className="md:w-[40%]" src={Businessman} alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <img className="md:w-[40%] " src={virtualimg} alt="" />
          <div className="">
            <h2 className="mb-6 text-center md:text-start text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="border border-white rounded-lg p-6">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards