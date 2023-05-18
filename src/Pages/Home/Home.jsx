import React from "react";
import Banner from "./Banner";
import KidsGallery from "./KidsGallery";
import Logo from "./Logo";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="text-center mt-5">
        <Logo></Logo>
        <h1 className="text-4xl font-bold my-4">Kids Gallery</h1>
        <KidsGallery />
        <Logo></Logo>
      </div>
    </>
  );
};

export default Home;