import Image from "next/image";
import React from "react";
import ornament76 from "@/assets/Ornament76.svg";
import first from "@/assets/image40.png";
import second from "@/assets/image41.png";
import third from "@/assets/image42.png";
import fourth from "@/assets/image43.png";
import fifth from "@/assets/image44.png";
import ornament66 from "@/assets/Ornament66.svg";
import Heading from "./Heading";
const borrowerSteps = [
  {
    heading: "Seamless onboarding",
    description: "Our tech platform handholds you to be part of ibankey family",
    image: first,
    id: 1,
  },
  {
    heading: "Stack up all information",
    description: "Present you in the language understood by an Underwriter.",
    image: second,
    id: 2,
  },
  {
    heading: "Right Matchmaking",
    description:
      "Connect you to the right lenders/investors & arrange best offersin 1/5th of the time with the help of tech",
    image: third,
    id: 3,
  },
  {
    heading: "Mentoring at each step",
    description:
      "Our experienced ibankers & dedicated case managers will bring strong understanding & control on the deal to deliver rightly & timely.",
    image: fourth,
    id: 4,
  },
  {
    heading: "Best Deal",
    description:
      "Right offer on your desk & makes your fund raising process simpler, faster and effective.  ",
    image: fifth,
    id: 5,
  },
];
const Borrower = () => {
  return (
    <div className="relative">
      <Heading title="Borrower" secondOrnament={true}/>
      <div className="w-5/6 lg:w-4/6  mx-auto grid grid-rows-5 grid-col-1 gap-2 ">
        {borrowerSteps.map((element, index) => (
          <div
            key={element.id}
            className={`flex content-center items-center  ${
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            } `}
          >
            <Image src={element?.image} width="auto" height="auto" />
            <div className="w-fit lg:w-80">
              <h4 className="text-xl lg:text-2xl font-medium text-[#000072] ">
                {element?.heading}
              </h4>
              <p className="text-base text-left my-2 lg:text-xl font-normal text-[#000072] ">
                {element?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Image src={ornament66} width="auto" height="auto" className="hidden lg:block absolute top-32 right-0 "/>
      <Image src={ornament66} width="auto" height="auto" className="hidden lg:block absolute bottom-32 left-0 "/>
    </div>
  );
};

export default Borrower;

// const Step = () => {
//   return <div>step</div>;
// };
