import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AboutSection from "../../components/AboutSection/AboutSection";
import ChefsDetails from "../../components/ChefsDetails/ChefsDetails";
import CollapsSection from "../../components/CollapsSection/CollapsSection";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const chefsDetails = useLoaderData();
  // console.log(chefsDetails);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <img
              className="absolute top-0 w-full h-[75%] md:h-[100%] object-cover"
              src="https://i.ibb.co/gVk0h3f/banner-img.jpg"
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
                tantalize <br /> your taste buds. Our chefs use only the
                freshest ingredients to prepare <br /> your meals, ensuring a
                dining experience like no other. <br /> Enjoy our warm and
                inviting atmosphere while we take care of <br /> all your dining
                needs.
              </p>
            </div>
            <div className="mb-52">
              <h1 className="font-bold text-5xl text-center">Our Best Chefs</h1>

              <div className="md:grid md:grid-cols-2 md:ml-36 gap-8 mb-10 mt-20">
                {chefsDetails.map((chefDetails) => (
                  <ChefsDetails
                    key={chefDetails.id}
                    chefDetails={chefDetails}
                  ></ChefsDetails>
                ))}
              </div>
            </div>
            <AboutSection></AboutSection>
            <CollapsSection></CollapsSection>
            <Footer></Footer>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
