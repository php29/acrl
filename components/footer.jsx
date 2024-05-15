import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const path = router.pathname;
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  const data = [
    {
      title: "About Us",
      link: "about-us",
    },
    {
      title: "Amenities",
      link: "amenities",
    },
    {
      title: "Gallery",
      link: "gallery",
    },
    {
      title: "Contact Us",
      link: "/",
    },
  ];
  return (
    <div className="w-full  p-0">
      {/* logo */}
      <div className="flex items-center justify-center relative">
        <div className="z-10 bg-white border-2 absolute -top-55 p-5 rounded-full border-[#3f3222] ">
          <Image
            src="/assets/icons/ACRlogo.svg"
            alt="logo"
            width={150}
            height={150}
            className="h-16 w-16 lg:h-24 lg:w-24"
          />
        </div>
      </div>
      {/* brown section */}
      <div className="relative w-full overflow-hidden bg-[#725A3D] 2xl:px-60 lg:px-20 xl:px-44 py-12 lg:py-20 text-white">
        {/* circle path  */}
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] 2xl:w-[900px] 2xl:h-[900px] -top-[10%] md:-top-[20%] lg:-top-[25%] 2xl:-top-[35%] left-[50%] transform -translate-x-[50%] -translate-y-[0%] rounded-full border-dashed border-2 border-white" />
        {/* items   */}
        <div className="flex flex-col lg:flex-row gap-5 px-10 py-5 md:px-16 md:py-20 2xl:gap-0 justify-center items-center">
          <div className="w-full md:w-[50%] 2xl:w-[30%] md:text-xl">
            <div className="text-center lg:text-left text-xl md:text-4xl lg:text-6xl mb-5">
              ACR LUXURY HOTEL
            </div>
            <p>
              Plot No. 198, 199, 200 & 201, TDI City, Airport Road, Sector 117,
              Mohali, Sahibzada Ajit Singh Nagar, Punjab, 140301
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-4 w-full lg:w-[30%] md:text-xl">
            <p>Tel: 9151515227, 9151515027</p>
            <div className="flex gap-3">
              <a href="" target="_blank">
                <Image
                  src="/assets/icons/logo_facebook.png"
                  alt="facebook"
                  height={30}
                  width={30}
                  className=" "
                />
              </a>
              <a href="" target="_blank">
                <Image
                  src="/assets/icons/logo_instagram.png"
                  alt="instagram"
                  height={30}
                  width={30}
                  className=""
                />
              </a>
              <a href="" target="_blank">
                <Image
                  src="/assets/icons/logo_youtube.png"
                  alt="youtube"
                  height={30}
                  width={30}
                  className=""
                />
              </a>
            </div>
            <p>info@acrpremium.com</p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-main text-white">
        <div className="flex w-full flex-col px-10 py-5 gap-5">
          {/* quick links and platforms  */}
          <div className="flex gap-10 justify-center items-center">
            {/* quick links */}
            <div className="w-[50%] lg:w-[30%] md:px-10">
              <div className="text-xl font-bold my-2">Quick links</div>
              <div className="flex gap-10">
                <div className="flex flex-col w-1/2">
                  {data
                    .filter((item, index) => index <= 1)
                    .map((item, index) =>
                      path === "/" ? (
                        <p
                          key={index}
                          className="hover:cursor-pointer"
                          onClick={() => scrollToSection(item.link)}
                        >
                          {item.title}
                        </p>
                      ) : (
                        <Link href={`/#${item.link}`} key={index}>
                          <p
                            className="hover:cursor-pointer"
                            onClick={() => scrollToSection(item.link)}
                          >
                            {item.title}
                          </p>
                        </Link>
                      )
                    )}
                </div>
                <div className="flex flex-col w-1/2">
                  {data
                    .filter((item, index) => index > 1)
                    .map((item, index) =>
                      path === "/" ? (
                        <p
                          key={index}
                          className="hover:cursor-pointer"
                          onClick={() => scrollToSection(item.link)}
                        >
                          {item.title}
                        </p>
                      ) : (
                        <Link href={`/#${item.link}`} key={index}>
                          <p
                            className="hover:cursor-pointer"
                            onClick={() => scrollToSection(item.link)}
                          >
                            {item.title}
                          </p>
                        </Link>
                      )
                    )}
                </div>
              </div>
            </div>
            {/* line  */}
            <div className=" border-l-[1px] border-solid border-white h-16" />
            {/* connect with hotel  */}
            <div className="w-[50%] lg:w-[30%] md:px-10">
              <div className="my-2">
                Connect with{" "}
                <span className="text-[#E8C895] font-bold">
                  ACR LUXURY HOTEL
                </span>
              </div>
              <div className="hidden md:flex gap-3">
                <a href="" target="_blank">
                  <Image
                    src="/assets/icons/facebook_logo.svg"
                    alt="facebook"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </a>
                <a href="" target="_blank">
                  <Image
                    src="/assets/icons/instagram_logo.svg"
                    alt="instagram"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </a>
                <a href="" target="_blank">
                  <Image
                    src="/assets/icons/youtube_logo.svg"
                    alt="youtube"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="border-b-[1px] border-solid border-white mx-20" />
          {/* rights reserved */}
          <p className="text-center">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
