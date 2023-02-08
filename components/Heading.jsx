import Image from "next/image";
import React from "react";
import ornament76 from "@/assets/Ornament76.svg";

const Heading = ({ title, secondOrnament }) => {
  return (
    <div className="flex flex-wrap gap-2 w-5/6 mx-auto justify-center items-center content-center mb-10">
      <h2 className="text-5xl lg:text-7xl font-light text-[#1562E5] ">
        {title}
      </h2>
      <Image
        src={ornament76}
        width="auto"
        height="auto"
        className="mt-2 w-32 lg:w-auto"
      />
      {secondOrnament ? (
        <Image
          src={ornament76}
          width="auto"
          height="auto"
          className="hidden lg:block mt-2 "
        />
      ) : null}
    </div>
  );
};

export default Heading;
