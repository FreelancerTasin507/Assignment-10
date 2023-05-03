import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefsDetails from "../../components/ChefsDetails/ChefsDetails";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const chefsDetails = useLoaderData();
  // console.log(chefsDetails);

  return (
    <div>
      
      <img
        className="absolute top-0 w-full h-[75%] md:h-[100%] object-cover"
        src="../../../public/Images/banner-image/banner-img.jpeg"
        alt=""
      />
      <div className="relative mt-24 mb-48 md:mt-40 px-4 md:px-20 ">
        <p className="text-2xl font-semibold text-slate-300">
          Hello, new friend!
        </p>
        <hr className="border-2 w-1/6 mt-2" />
        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-300 mt-5">
          Welcome to <br /> Flavors of Italy
        </h1>
        <p className="mt-6 md:mt-9 text-xl text-slate-400">
          Indulge in our delicious cuisine and savor the flavors that will
          tantalize <br /> your taste buds. Our chefs use only the freshest
          ingredients to prepare <br /> your meals, ensuring a dining experience
          like no other. <br /> Enjoy our warm and inviting atmosphere while we
          take care of <br /> all your dining needs.
        </p>
      </div>
      <div >
        <h1 className="font-bold text-5xl text-center">Our Best Chefs</h1>

        <div className="md:grid md:grid-cols-2 md:ml-36 gap-8 mb-10 mt-20">
          {chefsDetails.map((chefDetails) => (
            <ChefsDetails key={chefDetails.id} chefDetails={chefDetails}></ChefsDetails>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
