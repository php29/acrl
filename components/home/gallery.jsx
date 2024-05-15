"use client";
import imagedata from "../../data/galleryData";
import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex items-center m-0 text-center overflow-hidden mx-5 md:mx-16 mb-32"
    >
      <div className="whitespace-nowrap my-0">
        <div className="text-center heading_text">GALLERY</div>
        <div className="right_to_left">
          {/* images */}
          <div className="flex gap-3 m-[12px]">
            {imagedata[0].content.map(({ src, cls }, index) => (
              <Image
                src={src}
                key={index + 20}
                height={170}
                width={170}
                alt=""
                className={cls}
              />
            ))}
          </div>
          <div className="flex gap-3 m-[12px]">
            {imagedata[1].content.map(({ src, cls }, index) => (
              <Image
                src={src}
                key={index + 40}
                height={170}
                width={170}
                alt=""
                className={cls}
              />
            ))}
          </div>
          <div className="flex gap-3 m-[12px]">
            {imagedata[2].content.map(({ src, cls }, index) => (
              <Image
                src={src}
                key={index}
                height={170}
                width={170}
                alt=""
                className={cls}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
