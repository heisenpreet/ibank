"use client";
import LogoSVG from "../assets/LogoSVG";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useCallback } from "react";
// import Drawer from "react-modern-drawer";
const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});
import "react-modern-drawer/dist/index.css";
const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const toggleNavbar = useCallback(() => {
    setMobileNavbar((prevState) => !prevState);
  }, [mobileNavbar]);

  const tabs = [
    {
      name: "What we offer",
      link: "#",
    },
    {
      name: "Connect with us",
      link: "#",
    },
    {
      name: "About us",
      link: "#",
    },
    {
      name: "Teams",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "Login",
      link: "#",
      modal: true,
    },
  ];

  return (
    <>
      <nav className="relative px-4 py-5 flex justify-between items-center w-11/12  lg:w-4/5  mb-auto">
        <Link href="#">
          <LogoSVG />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3 "
            onClick={toggleNavbar}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden ml-auto mr-5 lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {tabs.map((tab) => (
            <li key={tab.name}>
              {tab?.modal ? (
                <label
                  htmlFor="my-modal-6"
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium"
                >
                  {tab.name}
                </label>
              ) : (
                <Link
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium"
                  href="#"
                >
                  {tab.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          className="hidden lg:inline-block py-2 px-6 text-sm text-white font-bold rounded-full btnGrad transition duration-200"
          href="#"
        >
          Sign up
        </Link>
      </nav>
      <Drawer
        open={mobileNavbar}
        onClose={toggleNavbar}
        direction="right"
        id={1}
      >
        <div className="flex flex-col w-full h-full bg-base-200 py-4">
          <Link
            className=" py-4 px-5 text-sm mb-5 text-white font-bold btnGrad transition duration-200"
            href="#"
          >
            Sign up
          </Link>
          {tabs.map((tab) => (
            <>
              {tab?.modal ? (
                <label
                  key={tab.name}
                  htmlFor="my-modal-6"
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium p-5"
                >
                  {tab?.name}
                </label>
              ) : (
                <Link
                  key={tab.name}
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium p-5"
                  href="#"
                >
                  {tab.name}
                </Link>
              )}
            </>
          ))}
        </div>
      </Drawer>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative pt-16 px-6 pb-10">
          <label
            htmlFor="my-modal-6"
            className="btn absolute top-3 right-4 bg-transparent border-none hover:bg-transparent "
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 52 52"
              enableBackground="new 0 0 52 52"
              xmlSpace="preserve"
            >
              <path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M30.9,26.8l7.8,7.8c0.4,0.4,0.4,1,0,1.4 l-2.8,2.8c-0.4,0.4-1,0.4-1.4,0L26.7,31c-0.4-0.4-1-0.4-1.4,0l-7.8,7.8c-0.4,0.4-1,0.4-1.4,0L13.3,36c-0.4-0.4-0.4-1,0-1.4l7.8-7.8 c0.4-0.4,0.4-1,0-1.4l-7.9-7.9c-0.4-0.4-0.4-1,0-1.4l2.8-2.8c0.4-0.4,1-0.4,1.4,0l7.9,7.9c0.4,0.4,1,0.4,1.4,0l7.8-7.8 c0.4-0.4,1-0.4,1.4,0l2.8,2.8c0.4,0.4,0.4,1,0,1.4l-7.8,7.8C30.6,25.8,30.6,26.4,30.9,26.8z" />
            </svg>
          </label>
          <h3 className="text-center text-xl font-bold text-gray-800 mb-5">
            Login as
          </h3>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://lender.azurewebsites.net/"
              className="btn btn-outline w-full"
            >
              Lender
            </a>
            <a className="btn w-full">Borrower</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
