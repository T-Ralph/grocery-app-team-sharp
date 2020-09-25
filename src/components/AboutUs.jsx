//Import React
import React from 'react';

//Import Images
import Lindsey from '../img/Lindsey.jpg'
import Krisztina from '../img/Krisztina.png'
import Tosin from '../img/Tosin.JPG'

//Declare Function
function AboutUs() {
    return (
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-scroll"></i>
                        About the Team
                    </h2>
                    <div className="team-member">
                        <img className="team-member-img" src={Lindsey} alt="Lindsey Graham" />
                        <span className="team-member-name">Lindsey Graham</span>
                        <p className="team-member-text">
                            Lindsey spent the early years of his professional life in the Oil & Gas sector, doing jobs ranging from Purchasing, to onsite work as an Electrician.
                            In early 2019 due to being unemployed, he picked up a few programming courses on Udemy to learn Python and ended up loving it to the point that he knew he wanted to change careers and take up the path of Software Development.
                        </p>
                        <p className="team-member-text">
                            Lindsey assumed the role of GitHub Manager on this project, handling all pull requests, merge conflicts, and primarily worked on React & API content.
                        </p>
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={Krisztina} alt="Krisztina Pap" />
                        <span className="team-member-name"> Krisztina Pap</span>
                        <p className="team-member-text">
                            Krisztina is hard-at-work turning her passion for programming into a career. She has a strong background in training, project management, and tech. When she's not writing code, she enjoys reading fantasy novels, jogging, and playing board games with her family.
                        </p>
                        <p className="team-member-text">
                            Krisztina was nominated for the role of Team-Lead for this assignment. She worked primarily on Redux and Bug Solving.
                        </p>
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={Tosin} alt="Tosin Olaniyi" />
                        <span className="team-member-name"> Tosin Olaniyi</span>
                        <p className="team-member-text">
                            Tosin is a Pharmacist by Profession and Programmer by Passion. Tosin has keen interest in using technology and data science to improve the processes and systems used in the health sector.
                        </p>
                        <p className="team-member-text">
                            Tosin took on the big job of CSS for this project. He primarily worked on ensuring the styling of every page was consistent, bug fixes, and React Content.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

//Export Function
export default AboutUs;