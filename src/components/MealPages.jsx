//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';

//Declare Function
function MealPages({ match }) {
    useEffect(() => {
        fetchMeal();
        console.log(match);
    }, []);

    const [myMeal, setMeal] = useState([
    ]);

    const fetchMeal = async () => {
        const fetchMeals = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${match.params.meal}`);
        const meal = await fetchMeals.json();
        console.log(meal.meals[0].strMeal);
        setMeal(meal.meals[0]);
        console.log(meal.meals[0]);
    }

    return (
        <div>
            <h1>{myMeal.strMeal}</h1>
            <img src={myMeal.strMealThumb} />
            <br />
            <br />
            <h3>TODO: ADD REMAINING CONTENT TO THIS PAGE</h3>
            <br />
            <br />
            <h3>{myMeal.strMeasure1} - {myMeal.strIngredient1}<button>Add to Shopping List</button> - PLACEHOLDER, FIX LATER</h3>
        </div>
    );
}

//Export Function
export default MealPages;