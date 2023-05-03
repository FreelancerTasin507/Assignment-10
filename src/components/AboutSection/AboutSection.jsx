import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex mx-14 justify-center items-center gap-4 ">
      <div className="bg-slate-100 w-1/2 rounded-2xl shadow-2xl px-14 py-32">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-8">
            About Our <br /> <span className="text-7xl ">Resturant</span>
          </h1>
          <p className="text-slate-500 mb-6">
            We specialize in authentic Italian cuisine made with the freshest
            ingredients and prepared with passion and expertise. From classic
            pasta dishes to wood-fired pizzas, our menu offers a wide variety of
            traditional Italian flavors that will transport your taste buds
            straight to Italy.
          </p>
          <Link className="btn btn-primary" to="/about">
            About Us
          </Link>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="grid grid-cols-3 gap-4">
          <img
            className="rounded-2xl transition duration-500 transform hover:scale-110"
            src="../../../public/Images/AboutImages/aboutImage-1.jpg"
            alt=""
          />
          <img
            className="rounded-2xl transition duration-500 transform hover:scale-110"
            src="../../../public/Images/AboutImages/aboutImage-2.jpg"
            alt=""
          />
          <img
            className="rounded-2xl transition duration-500 transform hover:scale-110"
            src="../../../public/Images/AboutImages/aboutImage-3.jpg"
            alt=""
          />
          <img
            className="rounded-2xl transition duration-500 transform hover:scale-110"
            src="../../../public/Images/AboutImages/aboutImage-7.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between">
            <img
              className="rounded-2xl transition duration-500 transform hover:scale-110"
              src="../../../public/Images/AboutImages/aboutImage-4.jpg"
              alt=""
            />
            <img
              className="rounded-2xl transition duration-500 transform hover:scale-110"
              src="../../../public/Images/AboutImages/aboutImage-6.jpg"
              alt=""
            />
          </div>
          <img
            className="rounded-2xl transition duration-500 transform hover:scale-110"
            src="../../../public/Images/AboutImages/aboutImage-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
