import React from "react";

const CollapsSection = () => {
  return (
    <div className="mt-56">
      <h1 className="font-bold text-5xl text-center mb-16">FAQ</h1>
      <div className="flex justify-center items-center gap-9 m-10 ">
        <div className="w-1/2">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              What type of cuisine do you serve?
            </div>
            <div className="collapse-content">
              <p>
                We specialize in authentic Italian cuisine, including homemade
                pasta, wood-fired pizzas, and classic Italian dishes like Osso
                Bucco and Risotto. We use only the freshest and highest quality
                ingredients, and our menu features a range of dishes that are
                sure to please all palates.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl"
            src="../../../public/Images/gellary/modern-restaurant-with-various-places_140725-9587.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CollapsSection;
