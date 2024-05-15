import React from "react";
import Image from "next/image";
import amenities from "../../public/assets/images/amenities.png";

const Amenities = () => {
  const data = [
    {
      title: "FREE INTERNET ACCESS",
      src: "/assets/icons/wifi.svg",
    },
    {
      title: "FREE PARKING",
      src: "/assets/icons/parking.svg",
    },
    {
      title: "EVENT HALL",
      src: "/assets/icons/event_hall.svg",
    },
    {
      title: "ROOM SERVICES",
      src: "/assets/icons/roomservices.svg",
    },
    {
      title: "ON-SITE RESTAURANT",
      src: "/assets/icons/restaurant.svg",
    },
    {
      title: "LAUNDRY",
      src: "/assets/icons/laundry.svg",
    },
  ];
  return (
    <div
      id="amenities"
      className="px-5 xl:px-40 2xl:px-80 py-10 text-center w-full overflow-hidden"
    >
      <div className="heading_text lg:text-left lg:ml-20">AMENITIES</div>
      <div className="flex flex-col md:flex-row gap-10 text-main font-bold justify-center">
        <div className="mx-10 md:mx-0 flex flex-col gap-12 my-auto items-end">
          {data
            .filter((item, index) => index <= 2)
            .map(({ title, src }, i) => (
              <div key={i + 843} className="flex gap-3 items-center">
                <p>{title}</p>
                <Image
                  src={src}
                  alt={title}
                  width={40}
                  height={40}
                  className={`${title === "EVENT HALL" ? "p-1" : ""}`}
                />
              </div>
            ))}
        </div>
        <div className="border-[6px] rounded-full border-[#725A3D] border-opacity-[23%]">
          <Image
            src={amenities}
            alt=""
            width={350}
            className="w-full border-[6px] rounded-full border-[#725A3D]"
          />
        </div>
        <div className="mx-10 md:mx-0 flex flex-col gap-12 my-auto">
          <div className="mx-10 md:mx-0 flex flex-col gap-12 my-auto items-start">
            {data
              .filter((item, index) => index > 2)
              .map(({ title, src }, i) => (
                <div key={i + 200} className="flex gap-3 items-center">
                  <Image src={src} alt={title} width={40} height={40} />
                  <p>{title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
