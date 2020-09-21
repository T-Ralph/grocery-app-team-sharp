//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


//Declare Function
function RecipeList() {

    useEffect(() => {
        fetchRecipes();
    }, []);

    const [meals, setMeals] = useState([]);

    const fetchRecipes = async () => {
        // Using cors-anywhere.herokuapp.com to bypass CORS errors in browser. API doesnt like us without it.
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v2/9973533/randomselection.php');
        const meals = await data.json();
        console.log(meals);
        setMeals(meals.meals);
    };


    return (
        <>
            <section className="main-section">
                <h2>
                    <i className="fas fa-utensils"></i>
                    Recipes
                </h2>
                <form className="form" id="form-filters">
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
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Recipe
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {meals.map(meals => (
                                    <h1 key={meals.idMeal}>{meals.strMeal}</h1>
                                ))}
                            </td>
                            <td>
                                <button className="table-button">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Recipe 2
                            </td>
                            <td>
                                <button className="table-button">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Recipe 3
                            </td>
                            <td>
                                <button className="table-button">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Recipe 4
                            </td>
                            <td>
                                <button className="table-button">View</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                                Recipe
                            </th>
                            <th>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <p>
                    <Link to="/recipe-page">
                        Sample/Preview the Individual Recipe Page
                    </Link>
                </p>
            </section>
        </>
    );
}

//Export Function
export default RecipeList;