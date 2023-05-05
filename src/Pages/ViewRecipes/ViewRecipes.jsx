import React, { lazy, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ChefsRecipes from "../../components/ChefsRecipes/ChefsRecipes";
import Footer from "../../components/Footer/Footer";

const ViewRecipes = () => {
    const [recipes,setRecipes] = useState([])
    console.log(recipes);
  const chefData = useLoaderData();
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
    bio,
  } = chefData;
//   console.log(chefData);

useEffect(()=>{
    fetch('https://assignment-10-server-deploy-render.onrender.com/chefsRecipes')
    .then(res => res.json())
    .then(data => setRecipes(data))
},[])

  return (
    <>
    <div className="md:flex mt-28 md:gap-10">
      <div className="md:w-[40%] h-1/2 ml-4 p-5 shadow-2xl sticky top-16">
        <div>
          <img className="md:rounded-3xl md:w-full" src={chef_picture} alt="" loading={lazy}/>
          <h2 className="font-semibold text-3xl text-center mb-4">
            {chef_name}
          </h2>
        </div>
        <div>
          <hr className="border border-black" />
          <p className="text-center font-bold">About "{chef_name}"</p>
          <p>{bio}</p>
          <hr className="border border-black mb-3 mt-3" />
          <FaHeart className="inline text-2xl" /> {likes}
          <p>
            <span className="font-bold">Numbers of Recipes:</span>
            {number_of_recipes}
          </p>
          <p>
            <span className="font-bold">Experiance:</span> {years_of_experience}
          </p>
        </div>
      </div>
      <div className="w-full  mr-10">
        <h2 className="text-5xl font-semibold">
          Some Recipes of <span className="text-slate-400">{chef_name}</span>
        </h2>
        <hr className="border-2 border-black mt-2" />

        <div>
            {
                recipes.map((recipe,index) => <ChefsRecipes
                key={index}
                recipe={recipe}
                ></ChefsRecipes>)
            }
        </div>
        <hr className="border border-black mb-3 mt-3" />
      </div>
    </div>
    <Footer></Footer>

    </>
  );
};

export default ViewRecipes;
