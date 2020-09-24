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
                                <li>step 1: Choose a recipe you like</li>
                                <li>step 2: Do not have the ingredients at home? No problem - Cgit add --allreate your own ingredient/shopping list</li>
                                <li>step 3: Have your shopping list ready and Enjoy your recipe prep.</li>
                            </ul>


                        </p>
                        <p>
                            You can also login and save all your recipes and shopping list.
                    </p>

                        <h2 class="text-center">
                            <i className="fas fa-scroll"></i>
                        About the Project
                    </h2>
                        <p>
                            This team project is part of TechCareers Milestone 2. As a team, we built this application within a span of 1 week. For this project we used the following programming languages:

                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>React-Router</li>
                                <li>CSS</li>
                                <li>HTML</li>
                            </ul>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul><ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul><ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul><ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
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