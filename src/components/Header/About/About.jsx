import React from "react";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <div className="mt-28">
        <h2 className="text-center text-5xl font-semibold">About Us</h2>
        <hr className="border-2 border-black w-1/3 mx-auto mt-3 mb-10"/>
      <div className="md:flex justify-center items-center md:mx-10 gap-4 mt-14 bg-slate-200">
      <div className="md:mx-20  text-center text-2xl font-bold">
        Our daily changing menu represents the best of what our local markets
        have to offer. Our passion for sourcing fresh ingredients from farmers
        and suppliers we know, combining with traditional flavors and rewriting
        familiar recipes into exceptional cuisine is our mission and greatest
        joy.
      </div>
        <div><img className="rounded-2xl mt-4" src="https://i.ibb.co/CzX0jMV/life-style.jpg" alt="" /></div>
      </div>
      <div className="mt-40 mb-40">
        <h1  className="text-center text-5xl font-semibold">Gallery</h1>
        <hr className="border-2 border-black w-1/3 mx-auto mt-3 mb-10"/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 mt-20">
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/ySSWN26/gImage-1.jpg" alt="" />
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/WVGrVF2/gImage-2.jpg" alt="" />
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/YpgHs1Y/gImage-3.jpg" alt="" />
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/WnzVT7f/gImage-4.jpg" alt="" />
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/GxGbV5W/gImage-5.jpg" alt="" />
            <img className="rounded-2xl transition duration-500 transform hover:scale-110" src="https://i.ibb.co/Sr2RshQ/gImage-6.jpg" alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
