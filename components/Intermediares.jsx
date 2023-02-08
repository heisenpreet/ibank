import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import first from "@/assets/image4.png";
import second from "@/assets/image5.png";
import third from "@/assets/image6.png";
import plus from "@/assets/plus.svg";
import triangle from "@/assets/triangle.svg";
const intermediares = [
  {
    id: 1,
    heading: "Scale You Up",
    description: "Platform is here to scale up your capabilities",
    image: first,
  },
  {
    id: 2,
    heading: "Increase Your Reach",
    description: "Connect to pool of lenders & investors ",
    image: second,
  },
  {
    id: 3,
    heading: "Help you to speed up",
    description:
      "Increase your chances to deliver on your earned mandate in an efficient way. ",
    image: third,
  },
];

const Intermediares = () => {
  return (
    <div className="flex flex-col gap-10 items-center my-32 relative">
      <div className="px-5 ">
        <Heading title="Intermediaries" />
        <div className="flex flex-col lg:flex-row items-start gap-7 ">
          {intermediares.map((element) => (
            <div key={element.id} className="flex flex-col items-center mx-auto">
              <Image src={element?.image} width="auto" height="auto" alt="text" />
              <div className="flex flex-col items-center gap-2 ">
                <div>
                  <h4 className="text-xl lg:text-2xl text-center font-medium text-[#000072] ">
                    {element?.heading}
                  </h4>
                </div>
                <div className=" lg:w-[256px]">
                  <p className="text-base text-center lg:text-xl font-normal text-[#000072] ">
                    {element?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Image
          src={plus}
          width="auto"
          height="auto"
          className="hidden lg:block absolute top-32 left-0 "
        />
        <Image
          src={triangle}
          width="auto"
          height="auto"
          className="hidden lg:block absolute bottom-0 right-0 "
        />

      <button className="btn btn-outline text-[#000072] w-fit rounded-full">
        Learn More
      </button>
    </div>
  );
};

export default Intermediares;
