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
                        Grocery App Powered by Team Sharp
                    </h2>

                    <p>Grocery App was designed to take the stress out of meal planning. Who has the time to browse the Internet or cook books for recipes and make shopping lists by hand these days? Grocery App was developed with the busy, always-on-the-go user in mind to make everyday meal planning as simple as 1-2-3.</p>
                  
                    <ul>
                        <li>Step 1: Go to the Recipes page and use the fun filters to view random recipes from our large database until you see one that catches your eye. Click on it for details!</li>
                        <li>Step 2: If you like it, add any of the ingredients to your shopping list by simply pressing the little green shopping cart button on the right.</li>
                        <li>Step 3: Review and print your shopping list. Voila! Your plan is done and you are ready to go!</li>
                
                    </ul>
                    <p>You can plan a single meal or an entire week's worth! If you add ingredients from several different recipes, the meal titles will always display on your shopping list. Don't worry, we know you may want to add your own items to your list, that's what the Add button is for!
                    </p>
                    <p>We sincerely hope that our Grocery App makes your meal planning easier and more efficient, therefore leaving you more time for whatever makes you happy! Thank you for using our product and have a wonderful day! 
                    </p>
                    <p>Wishing you all the best,</p>
                    <p>Team Sharp</p>
                   
                    <h2>
                        <i className="fas fa-scroll"></i>
                        About the Project
                    </h2>
                    <h3>Summary</h3>
                    <p>
                        Grocery App was built over the course of a week as part of the TECHCareers program in Edmonton, Alberta. To satisfy the core requirements of the project, which included clearly demonstrating competency in the use of HTML5, CSS, ES6 JavaScript, git, GitHub, React, React-Redux, and React-Router - Team Sharp (as we decided to call ourselves) decided to build a recipe app with a shopping list component. 
                    </p>
                    <p>
                        The application was built with a mobile-first approach and is fully-responsive. In addition to the home page that describes the application and the project itself, there are also pages for the recipe list (where the user can use filters to randomly pull recipes from an API), the individual recipe (where the user can see details about the meal and has the option to add individual ingredients to their shopping list), the shopping list (where the user can add ingredients to, remove from, preview, or even print their list), the About Us (where the user can "meet" the team members), and a login page (that displays either a login/sign-in form or a page that shows who is logged in and gives them the options to either browse more recipes, visit their shopping list, or sign out). 
                    </p>
                    <h3>The Recipe List</h3>
                    <p>
                        This page fetches and dynamically displays recipe data from TheMealDB API. The user can filter for recipes with certain ingredients/dietary restrictions (ie. 'chicken' or 'vegetarian' recipes) or they can ask for '10 Random Meals'. Each list item (recipe) features a thumbnail of the meal, the title of the dish, and a details button. The user can click on any of the elements to open the individual recipe in another window.
                    </p>
                    <h3>The Individual Recipe Page</h3>
                    <p>
                        In addition to a larger photo of the dish, the individual recipe page also displays a quick description of the meal(About), any dietary restrictions, a list of the ingredients necessary to make it, and instructions on how to prepare the meal (in both written and embedded YouTube video format). The ingredients area has a numbered list with the name and quantity of each ingredient and a green shopping cart button that turns into a checkmark when the user clicks it. This indicates that the ingredient has been added to the shopping list. These items get stored in the Redux store to allow for global access of the state. There is also a shopping list button at the bottom of the list to ensure easy movement between the two pages for the user.
                    </p>
                    <h3>The Shopping List</h3>
                    <p>
                        The shopping list pulls from the global state and displays each ingredient previously added to the cart. Each item shows the amount and name of the ingredient, followed by the title of the meal in brackets, and the trash button that allows the user to easily remove any entry from the list. There are 3 buttons at the bottom: The '+-Add' button expands a hidden section of the page, giving the user the option to add their own items to the list (ingredient, amount, and meal title). This small form doesn't have any mandatory fields, leaving the user completely in charge of what they want to add to their own lists. The 'Reset' button clears the form fields but will not affect the shopping list itself. The second shopping list button allows the user to print their list. When clicked, a print preview dialogue box opens. The third button clears the entire list.
                    </p>
                    {/* <p> 
                        This team project is part of <a href="http://www.techcareers.ca/" target="_blank" rel="noopener noreferrer">TECHCareers</a>' Milestone 2. 
                        Our team decided to build a recipe and shopping list web application. 
                        As a team, we completed this project within the span of a week. 
                        This application fetches and displays dynamically recipe data from <a href="https://www.themealdb.com/api.php/" target="_blank" rel="noopener noreferrer">TheMealDB API</a>.
                    </p> */}
                    <h3>
                        The following technologies were used for this project:
                    </h3>
                    <ul className='framework-images'>
                        <li><img src={require('../img/react.png')} alt='react logo' title='React' /></li>
                        <li><img src={require('../img/redux.png')} alt='redux logo' title='Redux' /></li>
                        <li><img src={require('../img/react-redux.png')} alt='react redux logo' title='React-Redux' /></li>
                        <li><img src={require('../img/css.png')} alt='css logo' title='CSS'/></li>
                        <li><img src={require('../img/html5.png')} alt='html 5 logo' title='HTML5' /></li>
                    </ul>
                    {/* <ul>
                        <li>Clear button – clears the entire list enabling one to start from beginning.</li>
                        <li>Reset button to ‘Add your own ingredient’ list.</li>
                        <li>Login feature to save all the recipes and an Avatar will show that the user is logged in.</li>
                        <li>Print feature has been introduced to print the entire list as a document.</li>
                    </ul> */}
                </section>
            </main>
        </>
    );
}
//Export Function
export default Home;