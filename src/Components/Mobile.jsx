import React from "react";
import Cards from "./Cards";

const Mobile = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-96 h-[48rem]    ">
          <div className=" pt-4 pr-4 pl-4  bg-radial-top">
            <div className="flex justify-between items-center m-4 ">
              <div>
              </div>
              <div className="w-[50%] h-1 items-center bg-black ml-4 mr-4 rounded-full">
                <div className="w-[80%] h-full bg-white rounded-full"></div>
              </div>
              <div className="text-white text-sm">Skip</div>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-white text-4xl font-normal text-center mt-4">
                How will improving yourself affect your life?
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-[#bcb4b2] text-base mt-4 mb-4">
                Select as much as you like
              </div>
            </div>
          </div>
          <div className=" pr-4 pl-4  bg-black shadow-[0_-80px_100px_rgba(0,0,0,0.9)]">
            <Cards />
          </div>
          <div className="flex justify-center items-center pt-4 pb-4 bg-black pr-4 pl-2">
            <button className="bg-[#f74d2c] text-white w-full px-4 py-2  rounded-xl text-sm font-normal">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
