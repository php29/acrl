import React from "react";
import Image from "next/image";
import roomsdata from "@data/roomsData";

const InRoomAmenities = ({ roomData }) => {
  const data = roomData;
  return (
    <div className="w-full bg-[url('/assets/images/bg-pattern.png')] bg-repeat text-main px-5 md:px-20 lg:px-32 pb-20 overflow-hidden">
      <div className="mb-10 md:my-10">
        <div className="text-8xl my-6 heading_font text-[#B7040B]">
          {data.title}
        </div>
        <p className=" font-semibold my-2">{data.size}</p>
        <p className="">{data.description}</p>
      </div>
      <div className="border-b-[1px] border-dashed border-main" />

      <div className="mt-10 mb-5">
        <div className="font-bold tracking-wide text-lg mb-5 ">
          IN-ROOM AMENITIES
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full px-5 my-10">
          {data.amenities.map((item, index) => (
            <div key={index + 1000}>
              <div className="font-bold mb-4 text-xl">{item.title}</div>
              <ul className="w-full list-disc">
                {item.ams.map((amenity, i) => (
                  <li key={i + 100 * index}>{amenity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-white text-xl inline-block bg-[#725A3D] px-4 py-1 mb-10 rounded-full">
          <Image
            src="/assets/icons/indian-rupee-sign-solid.svg"
            alt="rupee"
            className="fill-white inline mr-1"
            width={12}
            height={12}
          />
          {data.price}/-
        </div>
      </div>
    </div>
  );
};

export default InRoomAmenities;
