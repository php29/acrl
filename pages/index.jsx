"use client";
//main file(unique) ----> will render the home page
// import RootLayout from "./layout";
import MainVideo from "@components/home/mainVideo";
import AboutUs from "@components/home/aboutUs";
import MiddleOfChd from "@components/home/onTheAirportRoad";
import RoomsAndSuits from "@components/home/roomsAndSuits";
import Amenities from "@components/home/amenities";
import EatDrink from "@components/home/eatDrink";
import MapSection from "@components/home/mapSection";
import Gallery from "../components/home/gallery";
const Home = () => {
  return (
    <>
      <MainVideo />
      <AboutUs />
      <MiddleOfChd />
      <RoomsAndSuits />
      <Amenities />
      <EatDrink />
      <MapSection />
      <Gallery />
    </>
  );
};

export default Home;
