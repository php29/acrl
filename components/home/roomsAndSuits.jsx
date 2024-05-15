"use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import arrow from "../../public/assets/icons/arrow.svg";
import roomsData from "../../data/roomsData";
import suitesData from "../../data/suitesData";

import { useState, useRef } from "react";
import { useRouter } from "next/router";

const RoomsAndSuits = () => {
  // setup router
  const router = useRouter();

  // slider reference - custom buttons
  const slider = useRef(null);
  // slide navigation
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // switch between suites or rooms carousal
  const [type, setType] = useState("room");

  //carousal settings
  const settings = {
    className: "center",
    centerMode: true,
    lazyLoad: true,
    dots: true,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 1,
    speed: 700,
    arrows: false,

    responsive: [
      {
        breakpoint: 1924,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          dots: false,
        },
      },
    ],
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          // bottom: 20,
          bottom: 5,
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          // paddingTop: "30px",
          display: "flex",
          // marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hover:cursor-pointer"
          onClick={() => slider?.current?.slickPrev()}
        >
          <Image
            src={arrow}
            alt=""
            style={{ marginTop: "5px" }}
            className="h-5 rotate-180 w-5"
          />
        </div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
        <div
          className="hover:cursor-pointer"
          onClick={() => slider?.current?.slickNext()}
        >
          <Image
            src={arrow}
            alt=""
            style={{ marginTop: "5px" }}
            className="h-5 transform w-5"
          />
        </div>
      </div>
    ),
  };
  return (
    <div
      id="rooms-and-suites"
      className="relative m-0 z-20 w-full overflow-hidden"
    >
      <div className="px-5 md:px-20 lg:px-40 w-full">
        {/* heading  */}
        <div className="heading_text">ROOMS & SUITES</div>
        {/* switch button  */}
        <div className="mx-0 mb-5 inline-flex items-center justify-center border-2 border-[#725A3D] rounded-lg">
          <div
            className={`${
              type === "room" ? "bg-[#725A3D] text-white" : "text-main"
            } py-2 px-4 md:px-6 hover: cursor-pointer`}
            onClick={() => setType("room")}
          >
            ROOMS
          </div>
          <div
            className={`${
              type === "suite" ? "bg-[#725A3D] text-white" : "text-main"
            } py-2 px-4 md:px-6 hover: cursor-pointer`}
            onClick={() => setType("suite")}
          >
            SUITES
          </div>
        </div>
        {/* <div className="mb-5">
          Indulge in luxury and comfort with our spacious rooms offering
          breathtaking views of both the cityscape and the bustling airport
          road! Whether you prefer to gaze out at the twinkling lights of the
          city skyline or watch the constant flow of traffic on the airport
          road,you&apos;ll find something to admire right outside your window
          Stay productive with a dedicated working space and a complimentary
          high speed wifi connectivity. Savor delicious meals and beverages with
          our room dine-in option and a well stocked mini bar from the comfort
          of your own room. So when it&apos;s time to rejuvenate, slip into the
          warm, bubbling waters and let the cares of the day melt away as you
          step into your expansive lounge area, elegantly appointed with plush
          furnishings and indulge in a blissful moment of relaxation within the
          privacy of your own room.
        </div> */}
      </div>
      {/* carousal */}
      <div className="m-0 w-full">
        <div className="">
          {type === "room" ? (
            <>
              <Slider ref={slider} {...settings} className="relative">
                {roomsData.map((item, index) => (
                  <div key={index}>
                    <div className="px-3">
                      <Image
                        src={item.images[0]}
                        priority
                        alt=" "
                        height={500}
                        width={900}
                        className="w-full text-center rounded-2xl"
                      />
                      <br />
                      <div className="text-left">
                        <div className="text-main text-base font-bold inline">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </Slider>
              <div className="absolute right-5 md:right-[26px] lg:right-[236px] xl:right-[230px] top-[230px] mobile:top-[155px] md:bottom-[15px] md:top-auto ">
                <Link href={`/rooms/${activeSlide}`}>
                  <button
                    onClick={() => router.push(`/rooms/${activeSlide}`)}
                    className="text-white bg-[#B7040B] rounded-full px-3 py-2 md:px-6 md:py-2"
                  >
                    Room Detail
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Slider ref={slider} {...settings} className="relative">
                {suitesData.map((item, index) => (
                  <div key={index + 200}>
                    <div className="px-3">
                      <Image
                        src={item.images[0]}
                        alt=" "
                        height={500}
                        width={900}
                        className="w-full text-center rounded-2xl"
                      />
                      <br />
                      <div className="text-left">
                        <div className="text-main text-xl font-bold inline">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </Slider>
              <div className="absolute right-5 md:right-[26px] lg:right-[236px] xl:right-[230px] top-[230px] mobile:top-[155px] md:bottom-[15px] md:top-auto ">
                <Link href={`/suites/${activeSlide}`}>
                  <button
                    onClick={() => router.push(`/suites/${activeSlide}`)}
                    className="text-white bg-[#B7040B] rounded-full px-3 py-2 md:px-6 md:py-2"
                  >
                    Room Detail
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuits;
