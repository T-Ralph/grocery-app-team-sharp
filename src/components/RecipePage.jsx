//Import React, useState & useEffect from React
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions/shoppingAction';




//Declare Function
function RecipePage({ match }) {

    // Calls 'fetchMeal' once component has mounted successfully.
    useEffect(() => {
        fetchMeal();
    }, []); // [] on the end of this useEffect signifies "Once component has mounted"

    // Local State
    const [myMeal, setMeal] = useState([]);
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const [dietaryRestrictionsArray, setDietaryRestrictionsArray] = useState([]);

    
    // useDispatch hook is used to update global state
    const dispatch = useDispatch();

    // Pull specific meal information in based on the meal you chose on the RecipeList page using {match} prop given to us through <Link>
    const fetchMeal = async () => {
        const fetchMeals = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${match.params.meal}`);
        const meal = await fetchMeals.json();
        setMeal(meal.meals[0]);

        // Put the current meal into a variable
        let currentMeal = meal.meals[0];
        createIngredientsArray( currentMeal );
        createDietaryRestrictionsArray( meal.meals[0].strTags );
    }

    const createIngredientsArray = ( currentMeal ) => {
        //Create the ingredientsArray
        const ingredientsArray = [];
        
        //Create ingredientKey
        let ingredientKey = 1;

        //Loop Through The JSON Data
        for (let index = 1; index <= 20; index++) {
            //Check For Empty Strings
            if (currentMeal['strIngredient' + index] && currentMeal['strMeasure' + index]) {
                //Create tempIngredientObject
                const tempIngredientObject = {
                    key: ingredientKey,
                    ingredient: currentMeal['strIngredient' + index],
                    measure: currentMeal['strMeasure' + index]
                };

                //Push tempIngredientObject to Main ingredientsArray
                ingredientsArray.push(tempIngredientObject);
                
                //Increment for ingredientKey
                ingredientKey++;
            }
        }

        //Update the State of ingredientsArray
        setIngredientsArray(ingredientsArray);
    }

    const createDietaryRestrictionsArray = ( stringDietaryRestrictions ) => {
        //Create dietaryRestrictionsArray
        let dietaryRestrictionsArray = [];

        //Check for Empty stringDietaryRestrictions
        if (stringDietaryRestrictions) {
            //Convert Comma Separated Values to Array
            dietaryRestrictionsArray = stringDietaryRestrictions.split(",");
        }
        else {
            //Add Nil to 0 Index
            dietaryRestrictionsArray[0] = "Nil";
        }

        //Update the State of dietaryRestrictionsArray
        setDietaryRestrictionsArray(dietaryRestrictionsArray);
    }
    

    const newShoppingListItem = (ingredients) => {
        // shoppingReducer global state gets updated with new listitem
         dispatch(addAction({ ingredient: ingredients.ingredient, measure: ingredients.measure })); 
    }

    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-utensils"></i>
                        {myMeal.strMeal}
                    </h2>
                    <img src={myMeal.strMealThumb} alt={`${myMeal.strMeal}`} className="recipe-page-image" />
                    <h3>
                        About
                    </h3>
                    <p>
                        {myMeal.strArea} {myMeal.strCategory}
                    </p>
                    <h3>
                        Dietary Restrictions
                    </h3>
                    <ul>
                        {dietaryRestrictionsArray.map((dietaryRestrictions, index) => (
                            <li key={index}>
                                {dietaryRestrictions}
                            </li>
                        ))}
                    </ul>
                    <h3>
                        Ingredients
                    </h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Ingredients
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredientsArray.map(ingredients => (
                                <tr key={ingredients.key}>
                                    <td>
                                        {`${ingredients.key}. ${ingredients.ingredient} - ${ingredients.measure}`}
                                    </td>
                                    <td>
                                        <button className="table-button" title="Add to Shopping List" onClick={() => newShoppingListItem(ingredients)}>
                                            <i className="fas fa-cart-plus"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Ingredients
                                </th>
                                <th>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    <h3>
                        Instructions
                    </h3>
                    <p>
                        {myMeal.strInstructions}
                    </p>
                    <h3>
                        <i className="fab fa-youtube"></i>
                        YouTube
                    </h3>
                    <p>
                        <button className="table-button center">
                            <a href={`${myMeal.strYoutube}`} target='_blank' rel='noopener noreferrer'>
                                <i className="fab fa-youtube"></i>
                                Watch on YouTube
                            </a>
                        </button>
                        <iframe src={myMeal.strYoutube} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="recipe-page-youtube"></iframe>
                    </p>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipePage;