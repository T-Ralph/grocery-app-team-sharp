//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';


//Declare Function
function MealPages({ match }) {
    // Calls 'fetchMeal' once component has mounted successfully.
    useEffect(() => {
        fetchMeal();
        console.log(match);
    }, []); // [] on the end of this useEffect signifies "Once component has mounted"

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
        // Put the current meal into a variable
        let currentMeal = meal.meals[0];
        
   
        renderIngredientList( currentMeal );
    }

    const renderIngredientList = ( currentMeal ) => {
        // Put number of object keys into a variable so we can loop over them with ease
        let numberOfKeys = Object.keys( currentMeal ).length;
        const ingredients = document.getElementById("mealIngredients");

        for ( let i = 0; i < numberOfKeys; i++ ) {
            
            const keyWord = "strIngredient";
            let key = Object.keys (currentMeal);
            let value = Object.values (currentMeal);
            const numbers = /[0-9]/;

            if ( key[i].includes(keyWord) && ( value[i].length > 0 )) {
        
                const listItem = document.createElement("LI");
                listItem.textContent = value[i];
                // Found the digits in the key
                let ingredientNumber = key[i].match(numbers); 
     
      
                //Find the right quantity number for the ingredient
                for ( let j = 0; j < numberOfKeys; j++ ) {
                    if ( (key[j].includes("strMeasure")) && ( key[j].includes(ingredientNumber) ) && (key[j] !== "")) {
                        const listQuantity = document.createElement("SPAN");
                        listQuantity.textContent = value[j];
                        listItem.prepend ( listQuantity );
                    };
                }
                // Add a button to each list item so user can add to shopping list
                const listButton = document.createElement("BUTTON");
                listButton.textContent = "Add to Shopping List";
                listItem.appendChild(listButton);

                ingredients.appendChild(listItem);
            }
        }        
    }
  

    return (
        <div>
            {/* Note to Tosin/Tarun:
            When Styling this page make sure you remove all <br />'s and apply the spacing in CSS instead. I've used them here just to give my eyes some white space while
            working on the code portion of it. Thanks :)!!! -LG */}

            <h1>{myMeal.strMeal}</h1>
            <img src={myMeal.strMealThumb} alt={`Picture of the dish - ${myMeal.strMeal}`}/>
            <br />
            <br />
            <h3>About the Dish:</h3>
            <p>A {myMeal.strArea} {myMeal.strCategory} dish.</p>
            <br />
            <br />
            <h3>Dietary Restrictions:</h3>
            <p>This meal contains the following ingredients that common dietary restrictions contain:</p>
            <br />
            <p>{myMeal.strTags}</p>
            <br />
            <br />
            <h3>Ingredients:</h3>

            <p id="mealIngredients"></p>
       
            <br />
            <br />
            <h3>Instructions:</h3>
            <p>{myMeal.strInstructions}</p>
            <br />
            <br />
            <h3>Youtube Tutorial:</h3>
            <p><a href={`${myMeal.strYoutube}`} target='_blank' rel='noopener noreferrer'>
                <img src={require('../images/youtube-light.png')} alt='Youtube Logo' />
                </a>
            </p>
        </div>
    );
}

//Export Function
export default MealPages;