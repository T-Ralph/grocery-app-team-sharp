//Import React, Link from React-Router
import React, { useState, useEffect } from 'react';


//Declare Function
function MealPages({ match }) {
    // Calls 'fetchMeal' once component has mounted successfully.
    useEffect(() => {
        fetchMeal();
        console.log(match);
    }, []);

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


    // 

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

            {/* TO DO: Render this using a for loop to only display ingredients where result != "" */}
            <p>{myMeal.strMeasure1} - {myMeal.strIngredient1}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure2} - {myMeal.strIngredient2}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure3} - {myMeal.strIngredient3}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure4} - {myMeal.strIngredient4}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure5} - {myMeal.strIngredient5}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure6} - {myMeal.strIngredient6}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure7} - {myMeal.strIngredient7}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure8} - {myMeal.strIngredient8}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure9} - {myMeal.strIngredient9}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure10} - {myMeal.strIngredient10}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure11} - {myMeal.strIngredient11}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure12} - {myMeal.strIngredient12}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure13} - {myMeal.strIngredient13}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure14} - {myMeal.strIngredient14}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure15} - {myMeal.strIngredient15}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure16} - {myMeal.strIngredient16}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure17} - {myMeal.strIngredient17}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure18} - {myMeal.strIngredient18}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure19} - {myMeal.strIngredient19}<button>Add to Shopping List</button></p>
            <p>{myMeal.strMeasure20} - {myMeal.strIngredient20}<button>Add to Shopping List</button></p>
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