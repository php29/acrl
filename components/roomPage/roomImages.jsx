"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import arrow from "../../public/assets/icons/arrow-white.svg";

import { useState, useRef } from "react";
const RoomImages = ({ data }) => {
  const slider = useRef(null);
  // console.log(data);
  const settings = {
    className: "center",
    centerMode: true,
    lazyLoad: true,
    dots: true,
    // infinite: true,
    centerPadding: "00px",
    slidesToShow: 1,
    speed: 700,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: 20,
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px 30px",
          display: "flex",
          // marginTop: "50px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => slider?.current?.slickPrev()}>
          <Image
            src={arrow}
            alt=""
            style={{
              padding: "10px",
              borderRadius: "9999px",
              backgroundColor: "#B7040B",
            }}
            className="h-10 rotate-180 w-10"
          />
        </button>
        <ul className="room_page" style={{ margin: "0px" }}>
          {dots}
        </ul>
        <button onClick={() => slider?.current?.slickNext()}>
          <Image
            src={arrow}
            alt=""
            style={{
              padding: "10px",
              borderRadius: "9999px",
              backgroundColor: "#B7040B",
            }}
            className="h-10 transform w-10"
          />
        </button>
      </div>
    ),
  };
  return (
    <div className="w-full bg-[url('/assets/images/bg-pattern.png')] bg-repeat text-main px-5 md:px-20 lg:px-32 pb-10 overflow-hidden">
      <div className=" text-main text-2xl font-bold underline underline-offset-2 my-5 text-left">
        <Link href="/">BACK</Link>
      </div>
      {/* <Image src="/assets/images/img1.jpg" alt="" width={1000} height={600} /> */}
      <Slider ref={slider} {...settings}>
        {data.images.map((item, index) => (
          <div className="p-0 m-0" key={index + 100}>
            <Image
              src={item}
              alt=" "
              height={600}
              width={900}
              className="text-center w-full mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RoomImages;
