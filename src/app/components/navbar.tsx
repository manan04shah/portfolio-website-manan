"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showCollapsibleMenu, setShowCollapsibleMenu] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowCollapsibleMenu(!showCollapsibleMenu);
  };

  const closeCollapsibleMenu = () => {
    setShowCollapsibleMenu(false);
    setIsNavOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-20 h-[10vh]">
      <div className="flex justify-between items-center p-5 px-10">
        <div className="logo">
          <p className="text-2xl font-bold">Manan.</p>
        </div>
        <div
          className={`hamburger md:hidden cursor-pointer ${
            isNavOpen ? 'hidden' : 'block'
          }`}
          onClick={toggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={`nav-links md:flex space-x-10 hidden ${
            isNavOpen ? 'hidden' : 'md:block'
          }`}
        >
          <a className="relative cursor-pointer hover:underline hover:-translate-y-1 transition-all duration-300">
            Home
          </a>
          <p className="relative cursor-pointer hover:underline hover:-translate-y-1 transition-all duration-300">
            About
          </p>
          <p className="relative cursor-pointer hover:underline hover:-translate-y-1 transition-all duration-300">
            Projects
          </p>
          <p className="relative cursor-pointer hover:underline hover:-translate-y-1 transition-all duration-300">
            Contact
          </p>
        </div>
      </div>
      {/* Collapsible Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-black bg-opacity-80 text-white transition-all duration-500 ${
          showCollapsibleMenu ? 'w-[40vw]' : 'w-0'
        }`}
      >
        <div className="relative p-5 text-center">
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeCollapsibleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div><br></br>
          <a className="block mb-4">Home</a>
          <p className="block mb-4">About</p>
          <p className="block mb-4">Projects</p>
          <p className="block mb-4">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;