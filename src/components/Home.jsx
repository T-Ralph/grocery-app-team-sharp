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
                            </ul>


                        </p>
                        <p>
                            Also, you can login and save all your recipes and shopping list.
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