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
    const fetchRecipes = async () => {
        // Using cors-anywhere.herokuapp.com to bypass CORS errors in browser. API doesnt like us without it.
        const data = await fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php');
        const meals = await data.json();
        console.log(meals);
        setMeals(meals.meals);
    };


    return (
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-utensils"></i>
                        Recipes
                    </h2>
                    {/* Commenting out Filters for now. We can add these once the 'base functionality' is completed.
                        Each filter will require an entire API call dedicated to it
                        Below are the API calls for reference when we work on them:
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Chicken
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Beef
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Seafood
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Vegetarian
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Vegan
                            https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Desert */}
                    {/*<form className="form" id="form-filters">
                        <label htmlFor="filters"><i className="fas fa-filter"></i> Filters</label>
                        <select id="filters">
                            <option value="">Select a Filter</option>
                            <option>Chicken</option>
                            <option>Beef</option>
                            <option>Seafood</option>
                            <option>Vegetarian</option>
                            <option>Vegan</option>
                            <option>Desert</option>
                        </select>
                     </form>*/}
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