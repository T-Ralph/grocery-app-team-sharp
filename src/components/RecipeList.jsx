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
                                        <h3 key={meals.idMeal}>
                                            <Link to={`recipe-list/${meals.idMeal}`} target='_blank'>
                                                <p><img src={meals.strMealThumb}></img></p>
                                                {meals.strMeal}
                                                <button className="table-button">View</button>                                            
                                            </Link>
                                        </h3>
                                        
                                    ))}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <p>
                        <Link to="/recipe-page">
                            Sample/Preview the Individual Recipe Page
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipeList;