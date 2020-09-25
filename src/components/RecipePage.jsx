//Import React, useState & useEffect from React, Link from React-Router-Dom
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions/shoppingAction';
import { Link } from 'react-router-dom';

//Declare Function
function RecipePage({ match }) {

    // Calls 'fetchMeal' once component has mounted successfully. [] on the end of this useEffect signifies "Once component has mounted"
    useEffect(() => {
        fetchMeal();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Local State
    const [myMeal, setMeal] = useState([]);
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const [dietaryRestrictionsArray, setDietaryRestrictionsArray] = useState([]);
    const [youtubeEmbed, youtubeEmbedSwap] = useState("");
    
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

        // Put the Youtube Video in to a variable
        let embedSwap = currentMeal.strYoutube.replace('watch?v=', 'embed/');
        youtubeEmbedSwap(embedSwap);
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
                    measure: currentMeal['strMeasure' + index],
                    meal: currentMeal.strMeal
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

    const newShoppingListItem = (event, ingredients) => {
        // shoppingReducer global state gets updated with new listitem
        dispatch(addAction({ ingredient: ingredients.ingredient, measure: ingredients.measure, meal: ingredients.meal })); 

        //Switch Icon to Indicate Button has been Clicked
        event.currentTarget.firstChild.remove(); //Remove the Current Icon
        const newIconCheck = document.createElement("I"); //Create New Icon
        newIconCheck.classList.add("fas"); //Add Font Awesome Icon Class
        newIconCheck.classList.add("fa-check"); //Add Font Awesome Icon Class
        event.currentTarget.appendChild(newIconCheck); //Append New Icon to Button
    }

    const addAllToShoppingList = (event) => {
        //Loop Through the ingredientsArray
        for (const ingredient of ingredientsArray) {
            //Dispatch Each ingredient in ingredientsArray
            dispatch(addAction({ ingredient: ingredient.ingredient, measure: ingredient.measure, meal: ingredient.meal }));
        }

        //Switch Icon to Indicate Button has been Clicked
        event.currentTarget.firstChild.remove(); //Remove the Current Icon
        const newIconCheck = document.createElement("I"); //Create New Icon
        newIconCheck.classList.add("fas"); //Add Font Awesome Icon Class
        newIconCheck.classList.add("fa-check"); //Add Font Awesome Icon Class
        event.currentTarget.prepend(newIconCheck); //Append New Icon to Button
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
                                <tr key={ingredients.key} meal={ingredients.meal}>
                                    <td>
                                        {`${ingredients.key}. ${ingredients.ingredient} - ${ingredients.measure}`}
                                    </td>
                                    <td>
                                        <button className="table-button" title="Add to Shopping List" onClick={(event) => newShoppingListItem(event, ingredients)}>
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
                    <div className="center">
                        <button className="user-action-button" title="Add All Ingredients to Shopping List" onClick={addAllToShoppingList}>
                            <i className="fas fa-folder-plus"></i>
                            <span className="desktop-screen-only">Add All</span>
                        </button>
                        <button className="user-action-button" title="Go to Shopping List">
                            <Link to="/shopping-list">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="desktop-screen-only">Shopping List</span>
                            </Link>
                        </button>
                    </div>
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
                        <iframe width="560" height="315" src={youtubeEmbed} title='embedded video' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="recipe-page-youtube"></iframe>
                    </p>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipePage;