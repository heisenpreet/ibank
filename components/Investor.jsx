import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import first from "../assets/image47.png";
import second from "../assets/image45.png";
import third from "../assets/image46.png";
import ornament51 from "../assets/Ornament51.svg";
import ornament52 from "../assets/Ornament52.svg";
const investor = [
  {
    id: 1,
    heading: "Curated Deal",
    description:
      "Offer you deals powered by our tech enabled intelligent platform.",
    image: first,
  },
  {
    id: 2,
    heading: "All Info at One Go",
    description:
      "Not mere exhibitor of deals but present you the borrower with critical data points which enables the risk underwriter to take decision faster.",
    image: second,
  },
  {
    id: 3,
    heading: "Faster Processing",
    description: "Revolutionary tech speeds up the process.",
    image: third,
  },
];
const Investor = () => {
  return (
    <div className="my-32 flex flex-col gap-10 items-center">
      <div className=" relative">
        <Heading title="Investor" secondOrnament={true} />
        <div className="flex flex-col  gap-2 px-5 relative ">
          {investor.map((element) => (
            <div key={element.id} className="flex items-center justify-center">
              <Image src={element?.image} width="auto" height="auto" alt="text"/>
              <div className="w-fit justify-start">
                <h4 className="text-xl lg:text-2xl font-medium text-[#000072] ">
                  {element?.heading}
                </h4>
                <p className="text-base text-left my-2 lg:text-xl font-normal text-[#000072]  lg:w-[617px] ">
                  {element?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={ornament51}
          width="auto"
          height="auto"
          className="hidden lg:block absolute top-32 left-0 "
        />
        <Image
          src={ornament52}
          width="auto"
          height="auto"
          className="hidden lg:block absolute bottom-0 right-0 "
        />
      </div>
      <button className="btn btn-outline text-[#000072] w-fit rounded-full">Learn More</button>
    </div>
  );
};

export default Investor;
