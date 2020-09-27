//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Declare Function
function RecipeList() {

    // Run fetchRecipes once component (RecipeList) has mounted
    useEffect(() => {
        fetchRecipes();
    }, []);

    const [meals, setMeals] = useState([]);

    // API Call for populating main list of random meals
    // Async is used for this call to ensure fetch has passed before converting the returned promise to json data readable by us
    const fetchRecipes = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php');
        const meals = await data.json();
        setMeals(meals.meals);
    };

    // API Calls for populating FILTERS
    // Async is used for this call to ensure fetch has passed before converting the returned promise to json data readable by us
    const fetchRecipesByFilter = async (filterName) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${filterName}`);
        const meals = await data.json();
        setMeals(meals.meals);
    }

    return (
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-utensils"></i>                        
                        Recipes
                    </h2>
                    <h2>
                        <i className="fas fa-filter"></i>
                        Filters
                        <div className="center">
                            <button className='user-action-button' onClick={() => fetchRecipesByFilter("Chicken")}>Chicken</button>
                            <button className='user-action-button' onClick={() => fetchRecipesByFilter("Beef")}>Beef</button>
                            <button className='user-action-button' onClick={() => fetchRecipesByFilter("Seafood")}>Seafood</button>
                            <button className='user-action-button' onClick={() => fetchRecipesByFilter("Vegetarian")}>Vegetarian</button>
                            <button className='user-action-button' onClick={() => fetchRecipesByFilter("Vegan")}>Vegan</button>
                            <button className='user-action-button' onClick={fetchRecipes}>10 Random Meals (No Filter)</button>
                        </div>
                    </h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Recipes
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals.map(meals => (
                                <tr key={meals.idMeal}>
                                    <td>
                                        <Link to={`recipe-list/${meals.idMeal}`} target='_blank'>
                                            <img src={meals.strMealThumb} alt={meals.strMeal} />
                                            <div>
                                                {meals.strMeal}
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`recipe-list/${meals.idMeal}`} target='_blank'>
                                            <button className="table-button">
                                                <i className="fas fa-book-reader"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Recipes
                                </th>
                                <th>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipeList;