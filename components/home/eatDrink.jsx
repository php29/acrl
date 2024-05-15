import React from "react";
import Image from "next/image";

const eatDrink = () => {
  return (
    <div
      id="eat-drink"
      className="w-full bg-[url('/assets/images/bg-pattern.png')] bg-no-repeat bg-cover md:bg- auto 2xl:bg-repeat text-main px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-96 py-10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-20">
        <div className="w-full md:w-[45%]">
          <div className="montserrat">Eat & Drink</div>
          <p>
            Our hotel offers a variety of dining options to cater to every
            guest&apos;s needs. Whether you prefer the convenience of room
            dine-in, enjoy the ambiance of our on-site restaurant, or the
            spacious elegance of our banquet hall, we have something for
            everyone. Indulge in a delectable meal from the comfort of your
            room, savor the flavors of our expertly crafted dishes in our
            restaurant, or celebrate special occasions in style in our elegant
            banquet hall.
          </p>
        </div>
        <div className="w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/1.png"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-20">
        <div className="hidden md:block w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/2.png"
            alt=""
            width={500}
            height={300}
            className="float-right"
          />
        </div>
        <div className="w-full md:w-[45%]">
          <div className="montserrat">Dine-In & Admire</div>
          <p>
            Take a seat by the window, breathe in the ambiance, sip on a freshly
            brewed coffee and let the soothing sights lull you into a state of
            relaxation from the comfort of your room. A perfect way to unwind
            after a long day of travel to simply find a peaceful moment amid
            your busy schedule.
          </p>
        </div>
        <div className="md:hidden w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/2.png"
            alt=""
            width={500}
            height={300}
            className="float-right"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-20">
        <div className="w-full md:w-[45%]">
          <div className="montserrat">On-Site Restaurant</div>
          <p>
            After a long journey, relax and enjoy the moment to soothing tunes
            of soft music in our In-house restaurant. Allow yourself to indulge
            in delicious cuisines and let the aromas and flavors of our dishes
            tantalize your taste buds creating a memorable dining experience.
          </p>
        </div>
        <div className="w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/3.png"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-20">
        <div className="hidden md:block w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/4.png"
            alt=""
            width={500}
            height={300}
            className="float-right"
          />
        </div>
        <div className="w-full md:w-[45%]">
          <div className="montserrat">Celebrate & Meet</div>
          <p>
            Let us be your host for your special events. Be our guest and
            we&apos;ll handle every detail, from decorations to catering. Our
            banquet hall is perfect for all kinds of events, offering a variety
            of soft drinks, alcohol, and delicious snacks to ensure your
            celebration is unforgettable.
          </p>
        </div>
        <div className="md:hidden w-full md:w-[45%]">
          <Image
            src="/assets/images/eatdrink/4.png"
            alt=""
            width={500}
            height={300}
            className="float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default eatDrink;
