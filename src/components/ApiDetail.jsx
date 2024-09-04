import React from 'react'
import FrameBA from "../assets/FrameBA.png"
import "../styles/api.css"
import herovect from "../assets/herovect.png";

const ApiDetail = () => {
  return (
    <div>
      <div className="bg-black text-white p-10 ">
        <div className="container mx-auto w-11/12 ">
          <h2 className="text-center my-10 text-2xl lg:text-4xl font-bold">
            API DETAILS
          </h2>
          <p className=" text-xl text-center lg:text-3xl lg:text-left">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-16 items-center text-start gap-5 container mx-auto w-11/12">
          <img className="md:w-[40%]" src={FrameBA} alt="" />
          <div className="flex flex-col md:float-start">
            <h3 className="text-xl text-center md:text-left lg:text-3xl">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et{" "}
            </h3>
            <p className="apipara my-5 text-sm text-center md:text-start">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. <br /> Curabitur tempus
            </p>
            <div className='w-full  flex justify-center md:justify-start md:w-1/2 '>
              <button className="apibtn rounded-lg py-4 flex px-3 md:p-2 gap-12 text-xs text-center items-center">
                &lt;Frontend /&gt;
                <span>
                  <img className="w-3  " src={herovect} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <h1 className="text-center text-4xl my-6">Meet The Team</h1>
        </div>
      </div>
    </div>
  );
}

export default ApiDetail