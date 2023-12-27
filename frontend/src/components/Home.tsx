import React, { useEffect, useState } from "react";
import "./Home.css";
import RecipePreview from "./RecipePreview";
import RecipeData, { Recipe } from "../Recipedata"



export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
    return (
    <main>
    <body>
    <h1>Welcome! Check out these Foods!</h1>
    {/* recipes list */}
    <RecipePreview external={false} name={RecipeData[0].name} description={RecipeData[0].description} image={RecipeData[0].image} ingredients={[]} instructions={[]}/> 
    <RecipePreview external={false} name={RecipeData[1].name} description={RecipeData[1].description} image={RecipeData[1].image} ingredients={[]} instructions={[]}/> 
    <RecipePreview  external={false} name={RecipeData[2].name} description={RecipeData[2].description} image={RecipeData[2].image} ingredients={[]} instructions={[]}/> 
    {externalRecipes.map((recipe) => (
    <RecipePreview external = {true} name = {recipe.name} description = {recipe.description} image = {recipe.image} ingredients = {[]} instructions = {[]}/> 
    ))} 
    </body>
  </main>
);
}