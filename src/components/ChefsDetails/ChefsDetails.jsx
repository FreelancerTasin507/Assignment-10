import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefsDetails = ({ chefDetails }) => {
  console.log(chefDetails.chef_picture);
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
  } = chefDetails;

  return (
    <div>
      <div className="card md:w-3/4 bg-base-100 shadow-xl mb-5 hover:shadow-2xl">
        <figure>
          <img className="md:h-[300px] transition duration-500 transform hover:scale-110" src={chef_picture} alt="chef_picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Name: {chef_name}</h2>
          <p>
            <span className="font-bold">Experiance:</span> {years_of_experience}
          </p>
          <p>
            <span className="font-bold">Numbers of Recipes:</span>{" "}
            {number_of_recipes}
          </p>
          <p className="mt-4">
            <FaHeart className="inline text-2xl" /> {likes}
          </p>
          <div className="card-actions justify-end ">
            <Link to={`/viewRecipes/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
