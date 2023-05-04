import React from "react";

const CollapsSection = () => {
  return (
    <div className="mt-56 mb-32">
      <h1 className="font-bold text-5xl text-center mb-16">FAQ</h1>
      <div className="md:flex justify-center items-center gap-9 m-10 ">
        <div className="md:w-1/2">
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
              What are your restaurant hours?
            </div>
            <div className="collapse-content">
              <p>
                We are open for lunch and dinner, Monday through Sunday. Our
                hours are (9.00 am - 12.00 am).
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              Do you offer takeout or delivery services?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer both takeout and delivery services. You can place
                your order online or by phone, and we will have your meal ready
                for pickup or deliver it to your door. We also offer catering
                services for events of all sizes.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box justify-center items-center"
          >
            <div className="collapse-title text-xl font-medium">
              Is there a dress code for dining at your restaurant?
            </div>
            <div className="collapse-content">
              <p>
                We do not have a strict dress code, but we do encourage our
                guests to dress comfortably and appropriately for a fine dining
                experience. Smart casual attire is preferred, and we ask that
                our guests refrain from wearing beachwear, athletic wear, or
                overly casual attire.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
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
