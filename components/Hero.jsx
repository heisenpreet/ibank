import React from "react";
import Styles from "./hero.module.css";
import Image from "next/image";
import Navbar from "./Navbar";
import decore from "../assets/Decore.svg";
import heroImg from "../assets/heroImg.png";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={`hero min-h-screen  relative ${Styles.ellipse}`}>
      <Image
        priority={true}
        src={decore}
        width={655}
        height={575}
        className="absolute top-0 right-0 "
        alt="decore background"
      />
      <Navbar />
      <div className="flex w-11/12  lg:w-4/5 items-center justify-between">
        <div className=" lg:basis-1/2 w-11/12">
          <h1 className="text-5xl font-extrabold text-[#000072] mb-10  leading-normal  ">
            Your key to the world of
            <span className="btmBordertext"> Finance</span>
          </h1>
          <p className="text-base lg:text-lg font-normal text-[#132D54] leading-snug ">
            We are a technology company which offers Tech enabled lending with
            widely accessible platform for raising funds along with best terms
            by serving as a perfect bridge between the institutional borrower
            and the lenders. Our Proprietary technology built around the complex
            world of fund raise to make whole process faster & easier.
          </p>
          <Link
          className="hover:animate-pulse active:animate-ping  inline-block mt-8 py-3 px-6 text-sm text-white font-bold rounded-full btnGrad transition duration-200"
          href="#"
        >
          Get Started
        </Link>
        </div>
        <div className="hidden lg:block w-fit h-fit ">
          <Image alt="Mountains" src={heroImg} width={653} height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
