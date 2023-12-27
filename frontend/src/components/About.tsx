import React from "react";
import "./navbar.css";

export default function About() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <main className = "main">
            <header className = "banner">
                <h1>About the Chief</h1> 
                <p>I am a poor college student tried of college food</p>
            </header>
            <section className = "recipes">
                <h2>Why Recipe Warehouse</h2>
                <p className = "recipeDescription">
                   I would love to eat the food I used to have at home. But I don't remember all of the recipes.
                   But I HATE making and storing notecards
                   That is why I made Recipe Warehouse.
                </p>
            </section>
        </main>
  );
}