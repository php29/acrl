"use client";
import Image from "next/image";
import headerimg from "../../public/assets/images/headervideo.png";

const mainVideo = () => {
  return (
    <section id="video" className="z-0 overflow-hidden">
      <div>
        <video width="100%" height="auto" controls autoPlay loop muted>
          <source src="/assets/videos/header_video.mp4" type="video/mp4" />
        </video>
        {/* <Image src={headerimg} alt="" height="" className="w-full" priority /> */}
      </div>
    </section>
  );
};

export default mainVideo;
