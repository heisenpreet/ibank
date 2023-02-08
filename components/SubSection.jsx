import React from "react";
import Ornament11 from "../assets/Ornament11.svg";
import Ornament74 from "../assets/Ornament74.svg";
import Image from "next/image";
const SubSection = () => {
  return (
    <div className=" relative h-80 my-10 flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium text-[#000072] text-center">
          What we Offer
        </h1>
        <p className="text-xl font-normal text-[#132D54] text-center my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.
        </p>
      </div>
      <Image
        src={Ornament11}
        width="auto"
        height="auto"
        className="absolute left-0 top-0 w-32 opacity-25 lg:w-auto lg:opacity-100 "
      />
      <Image 
        src={Ornament74}
        width="auto"
        height="auto"
        className="hidden lg:block absolute right-20 top-0 "
      />
    </div>
  );
};

export default SubSection;
