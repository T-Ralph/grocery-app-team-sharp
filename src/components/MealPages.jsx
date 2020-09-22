//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';

//Declare Function
function MealPages({ match }) {
    // Calls 'fetchMeal' once component has mounted successfully.
    useEffect(() => {
        fetchMeal();
        console.log(match);
    }, []);

    // Local State
    const [myMeal, setMeal] = useState([
    ]);

    // Pull specific meal information in based on the meal you chose on the RecipeList page using {match} prop given to us through <Link>
    const fetchMeal = async () => {
        const fetchMeals = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${match.params.meal}`);
        const meal = await fetchMeals.json();
        console.log(meal.meals[0].strMeal);
        setMeal(meal.meals[0]);
        console.log(meal.meals[0]);
    }


    // 

    return (
        <div>
            {/* Note to Tosin/Tarun:
            When Styling this page make sure you remove all <br />'s and apply the spacing in CSS instead. I've used them here just to give my eyes some white space while
            working on the code portion of it. Thanks :)!!! -LG */}

            <h1>{myMeal.strMeal}</h1>
            <img src={myMeal.strMealThumb} />
            <br />
            <br />
            <h3>Ingredients:</h3>
            <br />
            <br />
            <h3>Instructions:</h3>
            <p>This is a test just for sizing</p>
            <br />
            <br />
            <h3>{myMeal.strMeasure1} - {myMeal.strIngredient1}<button>Add to Shopping List</button> - PLACEHOLDER, FIX LATER</h3>
        </div>
    );
}

//Export Function
export default MealPages;