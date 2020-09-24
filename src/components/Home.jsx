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
                        Welcome to the world of recipes!
                    </h2>

                    {/* <div id= "landing-page"> */}


                    <div class="parallax">

                    </div>

                    <div class="my-content">


                        {/* <h2 class="text-center">Welcome to the world of recipes!</h2> */}


                        <p>
                            To use this application, follow these simple steps:
                    </p>
                        <p>
                            <ul>
                                <li>Step 1: Choose a recipe you like</li>
                                <li>Step 2: Do not have the ingredients at home? No problem – make your own ingredient/shopping list</li>
                                <li>Step 3: Have your shopping list ready and organized for your meal preparation.</li>
                                <li> Step 4: Print the ingredient list for offline usage. </li>
                            </ul>
                            <p>
                                Once, the list is populated the user either have a choice to add more custom ingredients and quantity.
                                This feature is introduced to enable the users to add more ingredients to their list apart from the existing recipe.

                                The following features are added for more efficient use of application:

                                	<li>Clear button – clears the entire list enabling one to start from beginning.</li>
                                	<li>Reset button to ‘Add your own ingredient’ list.</li>
                                	<li>Login feature to save all the recipes and an Avatar will show that the user is logged in.</li>
                                	<li>Print feature has been introduced to print the entire list as a document.</li>


                            </p>


                        </p>
                        

                        <h2 class="text-center">
                            <i className="fas fa-scroll"></i>
                        About the Project
                        </h2>
                        <p>
                            This team project is part of <a href="http://www.techcareers.ca/">TECHCareers</a> Milestone 2. Our team decided to build a recipe and shopping
                            list web application. As a team, we completed this project within a span of 1 week. This application
                            fetches recipe data and displays dynamically from <a href="https://www.themealdb.com/api.php/">TheMealDB API</a>
                        </p>



                        <p>
                            For this project we used the following programming languages:
                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>React-Router</li>
                                <li>CSS</li>
                                <li>HTML</li>
                            </ul>



                        </p>
                    </div>





                    {/* </div> */}
                    {/* <img className="landing-page" src={Landing} alt="Recipe picture" /> */}



                </section>
            </main>
        </>
    );
}
//Export Function
export default Home;