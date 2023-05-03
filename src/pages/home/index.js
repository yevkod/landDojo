import React from "react";
import Hero from "../../components/Hero";
import FeaturedCourses from "../../components/FeaturedCourses";
import FeaturedCards from "../../components/FeaturedCards/FeaturedCards";
import Benefits from "../../components/Benefits";
import Become from "../../components/Become";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <FeaturedCards />
      <Benefits />
      <Become />
    </>
  );
};

export default HomePage;
