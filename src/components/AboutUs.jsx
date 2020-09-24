//Import React
import React from 'react';

//Import Images
import Lindsey from '../img/Lindsey.jpg'
import Krisztina from '../img/Krisztina.png'
import Tosin from '../img/Tosin.JPG'
import Tarun from '../img/Tarun.jpg'

//Declare Function
function AboutUs() {
    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-scroll"></i>
                        About the Team
                    </h2>
                    <div className="team-member">
                        <img className="team-member-img" src={Lindsey} alt="Lindsey Graham" />
                        <p className="team-member-text">
                        <span className = "team-member-name">Lindsey Graham </span> Born in Edmonton, Alberta, Lindsey spent the early years of his professional life in the Oil & Gas sector, doing jobs ranging from Purchasing, to onsite work as an Electrician. </p>
                        
                        <p className="team-member-text">In early 2019 due to being unemployed, he picked up a few programming courses on Udemy to learn Python and ended up loving it to the point that he knew he wanted to change careers and take up the path of Software Development.</p>
                        
                        <p className="team-member-text">As a life long technology enthusiast, Lindsey enjoys spending his spare time doing many technology related activities ranging from video games to coding apps to make everyday life easier.
                        In addition to technology related activities, he also partakes in a slowpitch team that has been together for 4 years 
                        and won their leagues championship twice! 
                        There's nothing quite like unwinding after a long day with a casual game of slowpitch with friends.</p>
                        
                        

                            
                            
                        
                    </div>
                        <div className="team-member">
                        <img className="team-member-img" src={Krisztina} alt="Krisztina Pap" />
                        <p className="team-member-text">
                        <span className = "team-member-name"> Krisztina Pap</span>Krisztina is hard-at-work turning her passion for programming into a career. She has a strong background in training, project management, and tech. When she's not writing code, she enjoys reading fantasy novels, jogging, and playing board games with her family.
                        </p>
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={Tosin} alt="Tosin Olaniyi" />
                        <p className="team-member-text">
                        <span className = "team-member-name"> Tosin Olaniyi</span>Tosin is a Pharmacist by Profession and Programmer by Passion. Tosin has keen interest in using technology and data science to improve the processes and systems used in the health sector.
                        </p>
                    </div>
                    <div className="team-member">
                        <img className="team-member-img" src={Tarun} alt="Tarun Mulle" />
                        <p className="team-member-text">
                        <span className = "team-member-name"> Tarun Mulle</span>Tarun is born in India and made Canada his home. He is enthusiastic professional who is aspiring to start a new career with the Tech sector and hoping to solve societal problems using technology. A few of his interests include public speaking, human psychology and yoga.
                        </p>
                    </div>
                    
                </section>
            </main>
        </>
    );
}

//Export Function
export default AboutUs;