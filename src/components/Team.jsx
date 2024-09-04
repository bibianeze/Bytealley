import React from 'react'
import "../styles/team.css"
import smallarr from "../assets/smallarr.png";
import bigarr from "../assets/bigarr.png"
import jordan from "../assets/jordan.png"
import chineselady from "../assets/chineselady.png"

const Team = () => {
  return (
    <div className="team p-10 text-white">
      
      <div className="container mx-auto w-11/12 ">
        <div className="flex justify-end gap-5 mb-6">
          <img src={smallarr} alt="" />
          <img src={bigarr} alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:w-[70%]">
            <img src={jordan} alt="" />
            <div className="">
              <h2 className="text-2xl font-bold">Jordan Ox</h2>
              <p className="my-7 teampara text-sm">
                Yorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Nunc vulputate libero et <br /> velit interdum, ac aliquet odio
                mattis. <br />
                Class aptent taciti sociosqu ad litora{" "}
              </p>
              <h3>
                <ul className="list-disc pl-5">
                  <li className="font-bold">Team Lead</li>
                </ul>
              </h3>
            </div>
          </div>
          <div>
            <img src={chineselady} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team