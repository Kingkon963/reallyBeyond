import * as React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-[#F0E3D8] dark:bg-[#E7E7E7] w-screen py-14 ">
      <div className="container lg:flex justify-between items-center">
        <h1
          className="font-poppinsSemibold text-blue dark:text-black text-[50px] lg:text-[90px] 3xl:text-[110px] 
      leading-[60px] lg:leading-[108px] 3xl:leading-[132px]"
        >
          <span className="text-black">Sign up</span> <br />
          to our newsletter
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 mt-[15px]">
            <label htmlFor="email" className="font-openSansRegular text-[16px]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email here..."
              className="p-[16px] h-[50px] text-[16px] border border-[#B1B1B1] bg-transparent font-openSansRegular text-[#7A7A7A]
            lg:w-[308px]"
            />
          </div>
          <button className=" h-[50px] font-poppinsSemibold text-white text-[14px] bg-orange dark:bg-black dark:text-white">
            Get the newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
