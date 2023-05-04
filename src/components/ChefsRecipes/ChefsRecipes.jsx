import React, { useState } from "react";
import { FaBookmark, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";

const ChefsRecipes = ({ recipe }) => {
  console.log(recipe);
  const { recipe_name, ingredients, cooking_method, rating, image } = recipe;

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
if(isClicked){
            toast.error("Can't apply more")
        }
        else{
            console.log(isClicked);
            
            toast.success(" Favorite  successfully Add!")
        }
  };

 

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-5 flex flex-col md:flex-row">
        <figure>
          <img className="md:h-full md:w-full" src={image} alt="" />
        </figure>
        <div className="card-body md:w-[80%]">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{ingredients}</p>
          <p>{cooking_method}</p>
          <p className="flex items-center gap-3 mt-4">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
            {rating}
          </p>
          <div className="card-actions justify-end">
            <button
              disabled={isClicked}
              onClick={handleClick}
              className="btn btn-primary"
            >
              <FaBookmark className="text-xl"></FaBookmark>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsRecipes;
