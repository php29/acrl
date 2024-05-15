import React from "react";
import middleOfChd from "../../public/assets/images/middleOfChd.png";
import Image from "next/image";

const MiddleOfChd = () => {
  return (
    <div
      id="on-the-airport-road"
      className="w-full px-5 md:px-20 xl:px-40  2xl:px-80 md:py-10 relative"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-10 lg:items-center lg:justify-center">
        <div className="w-full md:w-1/2 2xl:mt-20">
          <div className="heading_text">ON THE AIRPORT ROAD</div>
          <p>
            Staying at our hotel puts you in the heart of action, making commute
            a breeze! Located close to VR Punjab Mall, you can find pleasure
            with vibrant range of shopping, dining, and entertainment options
            right at your doorstep. Enjoy the convenience of catching an early
            morning/late night flight or hopping on to spontaneous road trips.
            <br />
            So sit back, relax, sip your favorite beverage, soak in the dynamic
            scene unfolding outside your window, as there&apos;s something
            captivating about the hustle and bustle of airport traffic. Watch as
            cars whiz by, heading to destinations near and far, while you relax
            in comfort and anticipation of your own adventures.
          </p>
        </div>
        <div className="md:w-1/2 md:pt-32 lg:pt-20 lg:pl-10">
          <Image
            src={middleOfChd}
            alt=""
            width={450}
            height={450}
            className="h-full w-full md:h-[300px] lg:h-[350px] md:w-auto z-30"
          />
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/images/path.png"
          alt="path"
          width={700}
          height={800}
          className="absolute hidden md:block lg:h-[850px] lg:top-[0px] right-0 top-[150px] -z-10"
        />
      </div>
    </div>
  );
};

export default MiddleOfChd;
