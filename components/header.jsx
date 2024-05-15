"use client";

import { motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import navLinks from "@/constants/navlinks";
import locations from "@/data/locations";
import chevron from "../public/assets/icons/chevron.svg";
import arrowWhite from "../public/assets/icons/arrow-white.svg";

export default function Header() {
  // scroll to sections animation
  const scrollToSection = (secitonId) => {
    document.getElementById(secitonId).scrollIntoView({
      behavior: "smooth",
    });
  };

  // head animation
  const variants = {
    redOpen: { opacity: 1, height: "65vh" },
    redClosed: { opacity: 0, height: 0 },
    greyOpen: { opacity: 1, height: "25vh" },
    greyClosed: { opacity: 0, height: 0 },
    locationOpen: { opacity: 1, height: "95vh" },
    locationClosed: { opacity: 0, height: 0 },
  };

  const m_variants = {
    m_mainOpen: { opacity: 1, width: "100vw", height: "100vh" },
    m_mainClosed: { opacity: 0, width: 0, height: "100vh" },
    m_locationOpen: { opacity: 1, width: "100vw", height: "100vh" },
    m_locationClosed: { opacity: 0, width: 0, height: "100vh" },
  };

  // dropdown states
  const [mainDropdown, setMainDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [bothDropdown, setBothDropdown] = useState(false);

  // mobile dropdown states
  const [m_mainDropdown, m_setMainDropdown] = useState(false);
  const [m_locationDropdown, m_setLocationDropdown] = useState(false);
  const [m_bothDropdown, m_setBothDropdown] = useState(false);

  const [currentLocation, setCurrentLocation] = useState(0);

  // location navgination mobile
  const [openIndex, setOpenIndex] = useState(null);

  // location toggle card
  const handleCardToggle = (index) => {
    if (openIndex === index) {
      //if opened card is clicked upon then no card will be open
      setOpenIndex(null);
    } else {
      // if any other card is clicked, current opened card will be closed
      setOpenIndex(index);
    }
    console.log(index, openIndex);
  };

  useEffect(() => {
    if (!mainDropdown && !locationDropdown) {
      setTimeout(() => {
        setBothDropdown(true);
      }, 200);
    } else {
      setBothDropdown(false);
    }
  }, [mainDropdown, locationDropdown]);

  // mobile screen
  useEffect(() => {
    if (!m_mainDropdown && !m_locationDropdown) {
      setTimeout(() => {
        m_setBothDropdown(true);
      }, 200);
    } else {
      m_setBothDropdown(false);
    }
  }, [m_mainDropdown, m_locationDropdown]);

  return (
    <header className="top-0 z-50 shadow-lg sticky w-full bg-white">
      {/* navbar  */}
      <div
        className={`hidden md:flex w-full  sticky top-0 items-center justify-between ${
          mainDropdown ? "bg-primary-red" : ""
        }`}
      >
        {/* main dropdown */}
        <div className="nav_item">
          <button
            type="button"
            className=" px-3 py-2 flex gap-2 relative dropdown text-left"
            id="menu-button"
            onClick={() => {
              if (mainDropdown) {
                setMainDropdown(false);
              } else setMainDropdown(true);
              setLocationDropdown(false);
            }}
          >
            {!mainDropdown ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={30}
                  height={30}
                  className="fill-main"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
                <div className="text-xs tracking-wider my-auto hidden md:block text-main font-bold">
                  ACR LUXURY HOTEL
                </div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={30}
                  height={30}
                  className="fill-white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
                <div className="text-xs hidden md:block tracking-wider my-auto text-primary-red font-bold">
                  ACR LUXURY HOTEL
                </div>
              </>
            )}
          </button>
        </div>
        {/* icon  */}
        <div className="nav_item my-2 hidden md:block">
          <Link href="/">
            <Image
              src="/assets/icons/ACRlogo.svg"
              width={50}
              height={50}
              alt=""
            />
          </Link>
        </div>
        {/* locations */}
        <div className="nav_item flex justify-center items-center">
          {/* locations dropdown */}
          <div className="relative dropdown hidden md:inline-block text-left">
            {/* button */}
            <button
              type="button"
              className={`rounded-t-2xl dropdown_btn fill-main px-2 py-[23px] mx-2 text-xs tracking-wider my-auto text-main font-bold flex gap-1 ${
                mainDropdown ? "text-white" : ""
              } ${locationDropdown ? "bg-main text-white mt-2" : "my-2"}`}
              id="menu-button"
              onClick={() => {
                if (locationDropdown) {
                  setLocationDropdown(false);
                } else setLocationDropdown(true);
                setMainDropdown(false);
              }}
            >
              LOCATIONS
              <Image
                src={`${
                  locationDropdown || mainDropdown
                    ? "/assets/icons/chevron-white.svg"
                    : "/assets/icons/chevron.svg"
                }`}
                alt=""
                height={15}
                width={15}
                className={` ${
                  locationDropdown ? "fill-white" : "fill-main rotate-180"
                }`}
              />
            </button>
          </div>
          {/* book  */}
          <div>
            <div className="md:hidden px-7" />
            <button
              className={`hidden md:block bg-primary-red text-white text-xs rounded-full py-2 px-2 lg:px-6 tracking-wider ${
                mainDropdown ? "border-white border-[1px]" : "border-none"
              }`}
            >
              BOOK
            </button>
          </div>
        </div>
        {/* main dropdown  */}
      </div>
      {/* navbar mobile */}
      <div
        className={`flex md:hidden w-full sticky top-0 items-center justify-between ${
          m_mainDropdown
            ? "bg-primary-red"
            : m_locationDropdown
            ? "bg-main"
            : ""
        }`}
      >
        {/* main dropdown */}
        <div className="nav_item">
          <button
            type="button"
            className=" px-3 py-2 flex gap-2 relative dropdown text-left"
            id="menu-button"
            onClick={() => {
              if (!m_mainDropdown && !m_locationDropdown) {
                m_setMainDropdown(true);
              } else if (m_locationDropdown) {
                // m_setMainDropdown(true);
                m_setMainDropdown(false);
                m_setLocationDropdown(false);
              } else if (m_locationDropdown) {
              } else m_setMainDropdown(false);
            }}
          >
            {!m_mainDropdown && !m_locationDropdown ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={30}
                  height={30}
                  className="fill-main"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={30}
                  height={30}
                  className="fill-white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </>
            )}
          </button>
        </div>
        {/* icon  */}
        <div className="nav_item py-3 hidden md:block">
          <Link href="/">
            <Image
              src="/assets/icons/ACRlogo.svg"
              width={50}
              height={50}
              alt=""
            />
          </Link>
        </div>
        <div>
          <div className="md:hidden px-7" />
        </div>
        {/* main dropdown  */}
      </div>

      {/* main dropdown */}
      <div
        className={` ${
          locationDropdown ? "md:hidden" : "md:block"
        } absolute hidden top-30 w-full z-50 text-white`}
      >
        {/* red background */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={mainDropdown ? "redOpen" : "redClosed"}
          variants={variants}
          className={` ${bothDropdown ? "hidden" : ""} bg-primary-red `}
        >
          <div className="flex">
            <ul
              className={`flex pl-4 md:pl-8 lg:pl-12 overflow-y-auto  flex-col items-start h-[65vh] red_scroll_bar`}
            >
              {navLinks
                .filter((item, index) => index <= 4)
                .map(({ link, title }, index) => (
                  <a
                    key={index + 100}
                    // href={`${link}`}
                    onClick={() => {
                      setMainDropdown(false);
                      scrollToSection(link);
                    }}
                    className={`font-bold text-base lg:text-3xl inline-block my-4 hover:cursor-pointer`}
                  >
                    <li>{title}</li>
                  </a>
                ))}
            </ul>
            <ul
              className={`flex pl-4 md:pl-8 lg:pl-12 overflow-y-auto flex-col items-start h-[65vh] red_scroll_bar`}
            >
              {navLinks
                .filter((item, index) => index > 4)
                .map(({ link, title }, index) => (
                  <a
                    key={index + 100}
                    // href={`${link}`}
                    onClick={() => {
                      setMainDropdown(false);
                      scrollToSection(link);
                    }}
                    className={`font-bold text-base lg:text-3xl inline-block my-4 hover:cursor-pointer`}
                  >
                    <li>{title}</li>
                  </a>
                ))}
            </ul>
          </div>
        </motion.div>
        {/* grey background  */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={mainDropdown ? "greyOpen" : "greyClosed"}
          variants={variants}
          transition={{ delay: 0.1 }}
          className={` header_row ${bothDropdown ? "hidden" : ""}`}
        >
          <div className="header_column flex gap-10 items-center justify-start py-10 px-12">
            <div className="font-bold leading-10">
              <div className="text-base lg:text-xl">
                HYATT CENTRIC SECTOR 17 CHANDIGARH Block No.10 Sector 17A,
              </div>
              <p>Chandigarh - 160017, Chandigarh, India</p>
            </div>
            <div>0172 4121234</div>
          </div>
        </motion.div>
      </div>

      {/* main dropdown mobile  */}
      <div
        className={` ${
          m_locationDropdown ? "hidden" : ""
        } absolute md:hidden top-30 w-full z-50 text-white`}
      >
        {/* red background */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={m_mainDropdown ? "m_mainOpen" : "m_mainClosed"}
          variants={m_variants}
          className={` ${m_bothDropdown ? "hidden" : ""} bg-primary-red `}
        >
          <div className="px-4 text-xl">
            <div
              onClick={() => {
                if (m_locationDropdown) {
                  m_setLocationDropdown(false);
                } else m_setLocationDropdown(true);
                m_setMainDropdown(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="-rotate-90 fill-white inline-block"
                width={15}
                height={15}
              >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
              more locations
            </div>
            <div className="border-b-[2px] mt-5 border-solid border-white " />
          </div>
          <ul
            className={`flex pl-4 md:pl-8 lg:pl-12 overflow-y-auto  flex-col items-start h-[65vh] red_scroll_bar`}
          >
            {navLinks.map(({ link, title }, index) => (
              <a
                key={index + 100}
                // href={`${link}`}
                onClick={() => {
                  m_setMainDropdown(false);
                  scrollToSection(link);
                }}
                className={`font-bold text-2xl inline-block my-4 hover:cursor-pointer`}
              >
                <li>{title}</li>
              </a>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* location dropdown  */}
      <div
        className={` ${
          mainDropdown ? "md:hidden" : "md:block"
        } absolute hidden z-50 top-30 w-full`}
      >
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={locationDropdown ? "locationOpen" : "locationClosed"}
          variants={variants}
          className={`${bothDropdown ? "hidden" : ""} text-white bg-main flex`}
        >
          <ul className="w-[40%] pl-7 pt-5 flex flex-col">
            {locations.map(({ title }, index) => (
              <li
                key={index + 100}
                onClick={() => setCurrentLocation(index)}
                className={`font-bold location_hover inline-block hover:location_hover text-lg lg:text-3xl py-3 hover:cursor-pointer`}
              >
                {title}
              </li>
            ))}
          </ul>
          <ul className="w-[50%] pt-5 flex flex-col">
            {locations[currentLocation].data.map(
              ({ city, location }, index) => (
                <li key={index + 100} className={` inline-block  `}>
                  <p className="text-base lg:text-3xl my-2">{city}</p>
                  <p className="text-xs">{location}</p>
                </li>
              )
            )}
          </ul>
          <div className="w-[10%] pt-5 pr-7">
            <button
              className="hover:cursor-pointer"
              onClick={() => {
                setLocationDropdown(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width={30}
                height={30}
                className="fill-white"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
      {/* location dropdown mobile  */}
      <div
        className={` ${
          m_mainDropdown ? "hidden" : ""
        } absolute z-50 top-30 w-full`}
      >
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={m_locationDropdown ? "m_locationOpen" : "m_locationClosed"}
          variants={m_variants}
          className={`${m_bothDropdown ? "hidden" : ""} text-white bg-main`}
        >
          <div className="px-4 text-xl">
            <div className="flex items-center justify-between">
              <div>LOCATIONS</div>
              <div
                onClick={() => {
                  m_setMainDropdown(true);
                  m_setLocationDropdown(false);
                }}
              >
                SITE MENU
                <Image
                  src={chevron}
                  alt="arrow-white"
                  height={15}
                  width={15}
                  className="inline-block rotate-90"
                />
              </div>
            </div>
            <div className="border-b-[2px] mt-5 border-solid border-white " />
          </div>
          <ul>
            {locations.map(({ title, data }, index) => (
              <li key={index}>
                <Disclosure ispen={index === openIndex ? "true" : "false"}>
                  {({ open }) => (
                    <div className={` mx-auto w-full`}>
                      <Disclosure.Button
                        className="flex w-full relative tracking-wide justify-between px-7 py-5 text-left text-lg text-gray-700 rounded-lg shadow-saffron"
                        onClick={() => handleCardToggle(index)}
                      >
                        <div
                          className={`${
                            open ? "text-[#B7040B]" : "text-white"
                          }`}
                        >
                          {title}
                        </div>
                        <Image
                          src={chevron}
                          alt="arrow-white"
                          height={15}
                          width={15}
                          className={`${
                            open ? "rotate-180" : "rotate-90"
                          }  inline-block`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-7 py-4 text-sm tracking-wide text-black transition-[72px]">
                        <ul className="text-white">
                          {data.map(({ city, location }, index) => (
                            <li key={index + 100} className={` `}>
                              <p className="text-base lg:text-3xl my-2">
                                {city}
                              </p>
                              <p className="text-xs">{location}</p>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
