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
                        Grocery List Webapp - Powered by Team Sharp
                    </h2>

                    {/* <div id= "landing-page"> */}


                    <div className="parallax">

                    </div>

                    <div className="my-content">


                        {/* <h2 class="text-center">Welcome to the world of recipes!</h2> */}


                        <p>
                            To use this application, follow these simple steps:
                    </p>
                        <section className='instructions-home'>
                            <ul>
                                <li>Step 1: Choose a recipe you like</li>
                                <li>Step 2: Do not have the ingredients at home? No problem – make your own ingredient/shopping list</li>
                                <li>Step 3: Have your shopping list ready and organized for your meal preparation.</li>
                                <li> Step 4: Print the ingredient list for offline usage. </li>
                            </ul>
                            <section className='instructions-home'>
                                Once, the list is populated the user either have a choice to add more custom ingredients and quantity.
                                This feature is introduced to enable the users to add more ingredients to their list apart from the existing recipe.

                                The following features are added for more efficient use of application:

                                	<li>Clear button – clears the entire list enabling one to start from beginning.</li>
                                	<li>Reset button to ‘Add your own ingredient’ list.</li>
                                	<li>Login feature to save all the recipes and an Avatar will show that the user is logged in.</li>
                                	<li>Print feature has been introduced to print the entire list as a document.</li>
                            </section>


                        </section>
                        

                        <h2 className="text-center">
                            <i className="fas fa-scroll"></i>
                        About the Project
                        </h2>
                        <p>
                            This team project is part of <a href="http://www.techcareers.ca/">TECHCareers</a> Milestone 2. Our team decided to build a recipe and shopping
                            list web application. As a team, we completed this project within a span of 1 week. This application
                            fetches recipe data and displays dynamically from <a href="https://www.themealdb.com/api.php/">TheMealDB API</a>
                        </p>



                        <section className='frameworks-home'>
                            The following frameworks were used for this project:
                            <ul className='framework-images'>
                                <li><img src={require('../img/react.png')} alt='react logo'/></li>
                                <li><img src={require('../img/redux.png')} alt='redux logo'/></li>
                                <li><img src={require('../img/react-redux.png')} alt='react redux logo' /></li>
                                <li><img src={require('../img/css.png')} alt='css logo'/></li>
                                <li><img src={require('../img/html5.png')} alt='html 5 logo' /></li>
                            </ul>



                        </section>
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