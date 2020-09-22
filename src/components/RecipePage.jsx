//Import React, useState & useEffect from React
import React, { useState, useEffect } from 'react';

//Declare Function
function RecipePage({ match }) {

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
                    <p>
                        {myMeal.strTags}
                    </p>
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
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient1} - ${myMeal.strMeasure1}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient2} - ${myMeal.strMeasure2}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient3} - ${myMeal.strMeasure3}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient4} - ${myMeal.strMeasure4}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient5} - ${myMeal.strMeasure5}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient6} - ${myMeal.strMeasure6}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient7} - ${myMeal.strMeasure7}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient8} - ${myMeal.strMeasure8}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient9} - ${myMeal.strMeasure9}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient10} - ${myMeal.strMeasure10}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient11} - ${myMeal.strMeasure11}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient12} - ${myMeal.strMeasure12}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient13} - ${myMeal.strMeasure13}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient14} - ${myMeal.strMeasure14}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient15} - ${myMeal.strMeasure15}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient16} - ${myMeal.strMeasure16}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient17} - ${myMeal.strMeasure17}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient18} - ${myMeal.strMeasure18}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient19} - ${myMeal.strMeasure19}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`${myMeal.strIngredient20} - ${myMeal.strMeasure20}`}
                                </td>
                                <td>
                                    <button className="table-button" title="Add to Shopping List">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </td>
                            </tr>
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
                        <iframe src={myMeal.strYoutube} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen className="recipe-page-youtube"></iframe>
                    </p>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipePage;