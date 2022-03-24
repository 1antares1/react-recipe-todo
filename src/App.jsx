import React, { useState, useEffect } from "react";

/**
 * Own
 */
import "./index.css";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";

const initialRecipe = {
    title: "Vegan Burger",
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: "3 potatoes, cut into 1/2' pieces", prepared: false },
        { name: "4 Tbsp butter", prepared: false },
        { name: "1/8 cup heavy cream", prepared: false },
        { name: "Salt", prepared: true },
        { name: "Vegan Pepper", prepared: true },
    ]
}

const App = () => {
    const [recipe, setRecipe] = useState(initialRecipe);
    const [prepared, setPrepared] = useState(false);
    const ingredientClick = (index) =>{
        const updateRecipe = { ...recipe };
        updateRecipe.ingredients[index].prepared = !updateRecipe.ingredients[index].prepared;
        setRecipe(updateRecipe);
    }

    useEffect(() => {
        console.log("Recipe state changed");
        setPrepared(recipe.ingredients.every(item => item.prepared));
    }, [recipe]);


    return(
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            <IngredientList ingredients={recipe.ingredients} onClick={ingredientClick} />
            <br />
            {prepared ? <h2>Prep work done!</h2> :<h2>Just keep chopping.</h2>}
        </article>
    );
}

export default App;
