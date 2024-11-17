"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="z-[80] flex justify-end items-center fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className={`block sm:hidden mr-3`}>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white/10 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleSidebar}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isSidebarOpen && (
        <div
          className=" bg-black/90 fixed sm:hidden top right-0 left-0 z-[70] h-[1500px] -translate-y-10 w-full dark:bg-[#000]/90"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={` fixed sm:hidden top-0 left-0 w-[60%] h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-800 z-[100] transition-all duration-300 shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[-101%]"
        }`}
      >
        <ul className="flex flex-col text-2xl h-full items-center pt-12 gap-4">
          {links.map((link) => (
            <li
              className={`h-12 flex items-center w-3/4 rounded-full  ${
                activeSection === link.name
                  ? "text-gray-950 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-950 dark:hover:text-gray-200"
              }`}
              key={link.hash}
            >
              <Link
                className="w-full flex justify-center items-center"
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsSidebarOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Destop Menu */}
      <nav className="hidden z-[85]  sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
