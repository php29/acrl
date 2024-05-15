import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "500px",
//   height: "500px",
// };

// const center = {
//   lat: 30.71523,
//   lng: 76.69089,
// };

const MapSection = () => {
  return (
    <div id="map" className="w-full overflow-hidden mb-10">
      <div className="bg-[url('/assets/images/map_bg.png')] bg-repeat">
        {/* flex */}
        <div className="flex flex-col lg:flex-row px-5 md:px-20 xl:px-36 py-32 items-center justify-center">
          <div className="w-full lg:w-1/2 h-full bg-[#725A3D] text-white px-20 xl:px-16 py-16 md:py-28 rounded-xl lg:rounded-l-2xl lg:rounded-r-none">
            <div className="text-2xl md:text-6xl mb-5 md:mb-10">
              ACR LUXURY HOTEL
            </div>
            <p>
              Plot No. 198, 199, 200 & 201, TDI City, Airport Road, Sector 117,
              Mohali, Sahibzada Ajit Singh Nagar, Punjab, 140301
            </p>
            <br />
            <p>info@acrpremium.com</p>
          </div>
          <div className="w-full h-full lg:w-1/2 rounded-r-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.742607446953!2d76.6756617724668!3d30.72563562983325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb147f1cd7b%3A0x40996a9bcc7d256a!2stdi%20city%2C%20Airport%20Rd%2C%20near%20wellington%20Heights%2C%20Sector%20117%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140307!5e0!3m2!1sen!2sin!4v1706511812376!5m2!1sen!2sin"
              width="750"
              height="500"
              className="w-full lg:h-[585px] xl:h-[500px] rounded-r-2xl"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
