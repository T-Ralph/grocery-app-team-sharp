//Import React
import React from 'react';
// import Landing from '../img/landing-page.jpg'

//Declare Function
function Home() {
    return (
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-home"></i>
                        Grocery App Project by Team Sharp
                    </h2>
                    <p>
                        To use this application, follow these simple steps:
                    </p>
                    <ul>
                        <li>Step 1: Choose a recipe you like</li>
                        <li>Step 2: Do not have the ingredients at home? No problem – make your own ingredient/shopping list</li>
                        <li>Step 3: Have your shopping list ready and organized for your meal preparation.</li>
                        <li>Step 4: Print the ingredient list for offline usage. </li>
                    </ul>
                    <p>
                        Once, the list is populated the user either have a choice to add more custom ingredients and quantity.
                        This feature is introduced to enable the users to add more ingredients to their list apart from the existing recipe.
                        The following features are added for more efficient use of application:
                    </p>
                    <ul>
                        <li>Clear button – clears the entire list enabling one to start from beginning.</li>
                        <li>Reset button to ‘Add your own ingredient’ list.</li>
                        <li>Login feature to save all the recipes and an Avatar will show that the user is logged in.</li>
                        <li>Print feature has been introduced to print the entire list as a document.</li>
                    </ul>
                    <h2>
                        <i className="fas fa-scroll"></i>
                        About the Project
                    </h2>
                    <p>
                        This team project is part of <a href="http://www.techcareers.ca/" target="_blank" rel="noopener noreferrer">TECHCareers</a>' Milestone 2. 
                        Our team decided to build a recipe and shopping list web application. 
                        As a team, we completed this project within the span of a week. 
                        This application fetches and displays dynamically recipe data from <a href="https://www.themealdb.com/api.php/" target="_blank" rel="noopener noreferrer">TheMealDB API</a>.
                    </p>
                    <p>
                        The following frameworks were used for this project:
                    </p>
                    <ul className='framework-images'>
                        <li><img src={require('../img/react.png')} alt='react logo' title='React' /></li>
                        <li><img src={require('../img/redux.png')} alt='redux logo' title='Redux' /></li>
                        <li><img src={require('../img/react-redux.png')} alt='react redux logo' title='React-Redux' /></li>
                        <li><img src={require('../img/css.png')} alt='css logo' title='CSS'/></li>
                        <li><img src={require('../img/html5.png')} alt='html 5 logo' title='HTML5' /></li>
                    </ul>
                </section>
            </main>
        </>
    );
}
//Export Function
export default Home;