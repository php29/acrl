import React from "react";
import Image from "next/image";

const aboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full px-5 md:px-20 xl:px-40 2xl:px-80 py-10 overflow-hidden"
    >
      <div className="flex gap-4 text-main container">
        <div className="w-full md:w-4/5 lg:w-1/2 lg:mt-20">
          <div className=" heading_text">ABOUT US</div>
          <p>
            Indulge in luxury and comfort with our spacious rooms offering
            breathtaking views of both the cityscape and the bustling airport
            road! Whether you prefer to gaze out at the twinkling lights of the
            city skyline or watch the constant flow of traffic on the airport
            road,you&apos;ll find something to admire right outside your window
          </p>
          <p>
            Mauris sed orci tristique amet neque sed. Pretium erat laoreet ut
            vestibulum auctor nullam cum. Posuere consectetur non pellentesque
            eu. Lorem tincidunt egestas quis non nisl augue velit lobort
          </p>
        </div>
        <div className="md:w-1/5 lg:w-1/2 hidden md:block">
          <Image
            src="/assets/images/butterfly.png"
            alt="butterfly"
            width={700}
            height={500}
            className="absolute h-[400px] lg:h-[600px] w-auto right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
