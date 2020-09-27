//Import React
import React from 'react';

//Declare Function
function Home() {

    //Declare Function for ToggleRealWorldUseCase
    const ToggleRealWorldUseCase = () => {
        //Check If ID 'read-more-toggle' Has Class 'show/hide' and Toggle Between Both
        if (document.getElementById("read-more-toggle-content").classList.contains("hide")) {
            document.getElementById("read-more-toggle-content").classList.remove("hide");
            document.getElementById("read-more-toggle-content").classList.add("show");
            document.getElementById("read-more-toggle-button-text").textContent = "Hide Content";
        }
        else {
            document.getElementById("read-more-toggle-content").classList.remove("show");
            document.getElementById("read-more-toggle-content").classList.add("hide");
            document.getElementById("read-more-toggle-button-text").textContent = "Read More";
        }
    }

    return (
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-home"></i>
                        Grocery App Powered by Team Sharp
                    </h2>

                    <p>Grocery App was designed to take the stress out of meal planning. Who has the time to browse the Internet or cook books for recipes and make shopping lists by hand these days? Grocery App was developed with the busy, always-on-the-go user in mind to make everyday meal planning as simple as 1-2-3.</p>

                    <ol>
                        <li>Go to the Recipes page and use the fun filters to view random recipes from our large database until you see one that catches your eye. Click on it for details!</li>
                        <li>If you like it, add any of the ingredients to your shopping list by simply pressing the little green shopping cart button on the right.</li>
                        <li>Review and print your shopping list. Voila! Your plan is done and you are ready to go!</li>

                    </ol>
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
                        The application was built with a mobile-first approach and is fully-responsive. It features six distinct pages:
                    </p>
                    <ol>
                        <li>The Home page - that describes the application and the project itself</li>
                        <li>The Recipe List - where the user can use filters to randomly pull recipes from an API</li>
                        <li>The Individual Recipe page(s) - where the user can see details about a specific meal and has the option to add its ingredients to their shopping list</li>
                        <li>The Shopping List - where the user can review, print, or further manage their shopping list by adding and removing ingredients</li>
                        <li>About us - where the user can "meet" the members of Team Sharp</li>
                        <li>The Login page - that displays either a login/sign-in form or a logged-in page that shows the currently signed in user, offering them the option to either browse for more recipes, visit their shopping list, or to sign out</li>
                    </ol>
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
                    <h2>A Real-World Use Case Scenario: Martha's Sunday Dinner</h2>
                    <p>
                        In this fictitious scenario, Martha receives a phone call that her family will be dropping by for dinner on Sunday. Given that she is a shift-working nurse with a busy social life, Martha knows that she could use a little inspiration to come up with a meal she can be proud of.
                    </p>
                    <button className="table-button center" onClick={ToggleRealWorldUseCase}>
                        <i className="fab fa-readme"></i>
                        <span id="read-more-toggle-button-text">
                            Read More
                        </span>
                    </button>
                    <div className="hide" id="read-more-toggle-content">
                        <div className='home-divider'></div>
                        <figure>
                            <figcaption><b>Figure 1</b> She logs into Grocery App and uses the filters on the Recipes page to find something delicious.</figcaption>
                            <img src={require('../img/scenario-signin.PNG')} alt='screenshot of login screen' title='Login' />
                        </figure>
                        <div className='home-divider'></div>
                        <figure>
                            <figcaption><b>Figure 2.1</b> She notices 'Beef and Oyster Pie' and clicks on it to see the meal details.</figcaption>
                            <img src={require('../img/scenario-beefpie.PNG')} alt='screenshot of recipe list' title='Recipe List' />
                        </figure>
                        <div className='home-divider'></div>
                        <figure>
                            <figcaption><b>Figure 2.2</b> There are no special dietary restrictions and the instructions seem easy enough, so she adds the ingredients to her shopping list.</figcaption>
                            <img src={require('../img/scenario-addsingredients.PNG')} alt='screenshot of adding individual ingredients' title='Adding Ingredients' />
                        </figure>
                        <div className='home-divider'></div>
                        <figure>
                            <figcaption><b>Figure 2.3</b> She adds wine and chips to her list using the 'Add' button.</figcaption>
                            <img src={require('../img/scenario-addsowningredients.PNG')} alt='screenshot of addint own ingredients' title='Adding Own Ingredients' />
                        </figure>
                        <div className='home-divider'></div>
                        <figure>
                            <figcaption><b>Figure 3</b> Martha prints her list and puts it in her purse. With her Sunday meal planned, she can just set herself a reminder to stop by the grocery store on Saturday, on her way home from work. No last minute scrambling, no stress!</figcaption>
                            <img src={require('../img/scenario-printscreen.PNG')} alt='screenshot of print dialogue box' title='Print Dialogue Box with Print Preview' />
                        </figure>
                        <div className='home-divider'></div>
                    </div>
                    <h2>
                        Technologies Used On this App:
                    </h2>
                    <ul className='framework-images'>
                        <li><img src={require('../img/react.png')} alt='react logo' title='React' /></li>
                        <li><img src={require('../img/redux.png')} alt='redux logo' title='Redux' /></li>
                        <li><img src={require('../img/react-redux.png')} alt='react redux logo' title='React-Redux' /></li>
                        <li><img src={require('../img/css.png')} alt='css logo' title='CSS' /></li>
                        <li><img src={require('../img/html5.png')} alt='html 5 logo' title='HTML5' /></li>
                    </ul>
                </section>
            </main>
        </>
    );
}
//Export Function
export default Home;