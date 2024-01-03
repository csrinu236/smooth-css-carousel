import React from "react";
import CarouselComponent from "./CarouselComponent";

const Home = () => {
  return (
    <>
      <CarouselComponent key={0} CI={0} length={100}></CarouselComponent>
      <CarouselComponent key={1} CI={1} length={200}></CarouselComponent>
    </>
  );
};

export default Home;
