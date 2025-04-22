import React, { useState } from "react";
// import { SlArrowLeft } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";
import RagisterForm from "./RagisterForm";

const benefits = [
  "Superfast turnaround time",
  "Unlimited Designs",
  "Manage everything at one place",
  "Work with top 1% talent Pan India",
];

function Ragister() {
  return (
    <div className="min-h-screen xl:flex">
      <div className="left max-w-[100%]">
        <div className="h-full w-full bg-black/70">
          <div className="py-[2rem] h-full px-[1rem] sm:px-[3rem] flex flex-col justify-between">
            {/* NAVBAR */}
            <nav className="relative p-2">
              <img src="images/cooasis.svg" alt="" />
              <img
                className="absolute left-[5.6rem] top-[1.6rem]"
                src="images/business.svg"
                alt=""
              />
              <img
                className="absolute left-[6.4rem] top-[1.9rem]"
                src="images/businessText.svg"
                alt=""
              />
            </nav>

            {/* FOOTER */}
            <div className="xl:pr-[5rem]">
              <div className="xl:pr-[17rem]">
                {/* 1 */}
                <h1 className="pt-10 pb-3 sm:py-6 px-0 sm:px-5 xl:px-0 xl:py-0 text-center xl:!text-left xl:pr-[6rem] 2xl:pr-[0px] 2xl:text-[60px] 2xl:leading-[4rem] f-HelveticaNeueRoman leading-[2rem] sm:leading-[2.7rem] text-[#FFF5D9] text-[28px] sm:text-[40px] mb-[2rem] xl:max-w-[500px]">
                  Join 200+ Businesses that Trust Coasis to Supercharge their
                  Business
                </h1>
                {/* 2 */}
                <div className="pb-6 lg:px-[18rem] xl:px-0 xl:pb-0 text-[#FFF5D9] flex flex-wrap justify-center xl:justify-start gap-3 max-w-[100%] xl:max-w-[500px] 2xl:max-w-[700px]">
                  {benefits.map((benefit, index) => (
                    <div className="flex items-center" key={index}>
                      <p className="p-[2px] bg-gray-700 rounded-full mr-[6px]">
                        <IoCheckmark className="text-[#E1FF26] sm:text-[20px] xl:text-[14px] 2xl:text-[20px]" />
                      </p>
                      <span className="sm:text-[18px] xl:text-[13px] 2xl:text-[18px] f-HelveticaNeueRoman">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* 3 */}
             <div className="hidden md:block">
             <div className="mx-auto xl:mx-0 mb-7 xl:mb-0 w-[600px] mt-[2rem] px-4 py-2 rounded-full  backdrop-blur-md bg-black/20 flex items-center justify-between">
                <span className="text-[12px] 2xl:text-[15px] text-white f-PowerGrotesk">
                  TrustedBy
                </span>
                <img src="images/zara.svg" alt="" />
                <img src="images/nike.svg" alt="" />
                <img src="images/adidas.svg" alt="" />
                <img src="images/hm.svg" alt="" />
                <img src="images/versace.svg" alt="" />
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right !w-[100%] xl:max-w-[30%] text-center flex items-center justify-center bg-[#050505] px-[6rem]">
       <RagisterForm />
      </div>
    </div>
  );
}

export default Ragister;
