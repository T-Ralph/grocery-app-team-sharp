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
        const data = await fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php');
        const meals = await data.json();
        setMeals(meals.meals);
    };

    // API Calls for populating FILTERS
    const fetchChicken = async () => {
     let filterName = document.getElementById('chickenFilter').innerHTML;
        const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${filterName}`);
        const meals = await data.json();
        setMeals(meals.meals);
    }
    const fetchBeef = async () => {
        let filterName = document.getElementById('beefFilter').innerHTML;
           const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${filterName}`);
           const meals = await data.json();
           setMeals(meals.meals);
       }
       const fetchSeafood = async () => {
        let filterName = document.getElementById('seafoodFilter').innerHTML;
           const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${filterName}`);
           const meals = await data.json();
           setMeals(meals.meals);
       }
       const fetchVege = async () => {
        let filterName = document.getElementById('vegFilter').innerHTML;
           const data = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${filterName}`);
           const meals = await data.json();
           setMeals(meals.meals);
       }
       const fetchVegan = async () => {
        let filterName = document.getElementById('veganFilter').innerHTML;
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
                        Filters:
                        <p>
                            <button id='chickenFilter' className='user-action-button' onClick={fetchChicken}>Chicken</button>
                            <button id='beefFilter' className='user-action-button' onClick={fetchBeef}>Beef</button>
                            <button id='seafoodFilter' className='user-action-button' onClick={fetchSeafood}>Seafood</button>
                            <button id='vegFilter' className='user-action-button' onClick={fetchVege}>Vegetarian</button>
                            <button id='veganFilter' className='user-action-button' onClick={fetchVegan}>Vegan</button>
                            <button id='noFilter' className='user-action-button' onClick={fetchRecipes}>10 Random Meals (No Filter)</button>
                        </p>
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