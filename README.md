![Team Logo](./src/img/TeamSharp-TwitterBanner.png?raw=true "Team Sharp Grocery Project")

## Team Sharp Grocery App Project
This web application was part of the TECHCareers Milestone 2 Group Project. 
   
As a group we were tasked with coming up with our own ideas for a website that implemented React, React-Router, and Redux, with flexibility to use any additional libraries we needed.  
Our group decided on a Grocery App that will pull random recipes from an API, and allow you to add individual items to a shopping list which can then be printed to PDF and taken to the grocery store with you to function as a checklist.

## Instructions:
- Users can choose to log in or use our app as a guest (For the purpose of this assignment, the 'login' isn't supported by a backend, and no true accounts exist, any combination of username/password will work. This was implemented to show our use of state)
- Users can proceed to the Recipe List page in the Nav bar and have a list of 10 random recipes rendered to them via [TheMealDB API](https://www.themealdb.com/).
- Once users select a recipe they will be directed in a new tab to the dynamic page for the recipe they selected. On this page users will find all the ingredients available to them, dish origins, allergy warnings, and a YouTube tutorial on how to make the recipe if they wish to follow along.
- Clicking on the shopping cart on any ingredient will add this item to the Shopping List
- Users can proceed back to the Recipe List page and continue adding items to the Shopping List, or proceed to the Shopping List page itself via Nav Bar or Shopping List button on the individual recipe page.
- On the shopping list:
    - Users have the option to add their own ingredient to their shopping list (Should they wish to use the printed PDF feature as a "Shopping List" to take with them to the store)
    - All items that have been added are displayed in a table with their corresponding meals in brackets.
    - Users have the ability to remove specific items by clicking the trash can or clear the entire list by clicking "Clear Shopping List"
    - Users can print the list to a PDF to print off and take with them to the store as a checklist so they do not forget any items.
- About Us:
    - This page contains a small paragraph about each team member who worked on this project.

## Team Members & Roles:
- Krisztina (Team Lead & Code)
- Tosin (Wireframes/Design & Code)
- Lindsey (Github Manager & Code)

## Trello:
https://trello.com/b/rnxAM8Nx/milestone2

## Citations:
- Warren Uhrich 
    - Class notes (React/Redux to-do list) - How to remove a to-do by id
- Dev Ed React Series
    - Tips & Tricks on React
        - https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE
- Bitmoji App
    - Avatars for 'About-Us' page
- Github Markdown Guide
    - https://guides.github.com/features/mastering-markdown/
- W3 Schools
    - Show/Hide Toggle
        - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp


## Introduction: 
- The Milestone 2 - React/Redux project is a React/Redux/Router application of your design. Convene with your group and plan a project that will challenge you and act as a future portfolio piece. Working through this project will demonstrate your knowledge and competency in: project planning, teamwork, HTML5, CSS3, ES6 JavaScript, git within a team context, React, React-Redux, and React-Router. There is a sample project description at the end of this document to give you ideas of what sort of application will meet the requirements

## Team Requirements:
- Please get in contact with your groups as soon as possible and decide on a group leader. The group leader will click on the GitHub classroom link and create a new team. All team members will then join the team created by the team leader.
- Create a “Team Name” to help identify yourselves!
- You must focus promptly on deciding what your project will be. Create a document detailing what features you are aiming to complete and a general description of what the project is. It is expected that a project summary be sent to TECHC@UAlberta.CA before the end of the week.

## Project Requirements:
- Demonstrates the use of Redux to manage global states
- Demonstrates the ability to get user input and process data before output
- Demonstrates the use of props
- Demonstrates the use of React Router to display multiple pages
- Code must pass validator tests (HTML, CSS, WCAG, if you are making custom content)

## Coding Criteria:
- Break down all functionality into reusable components
- Project must be error free
- Project must be warning free (the output when running ‘npm start’, from ESLint/Babel, must not contain warnings)
- Demonstrate use of project management skills (group meetings, use of Trello is required)
- Demonstrate concise and meaningful use of commenting
- Demonstrate concise and meaningful commit messages and active use of GitHub for version control as well as collaboration from multiple users
- Create a functionality document (intention of each page, explanation of features, think of it as a design and operating manual)
- Main GitHub page (ReadMe) should be set up with a proper project name, project banner, Trello link, and basic installation instructions (assume the user has no idea on how to run the application) Example: https://github.com/tensorflow/tensorflow
- Please include all wireframe, design, and planning documents in a folder within your GitHub Classroom repository

## Design Criteria:
- Demonstrates CARP design principles
- Demonstrates knowledge of color theory/correct colors are chosen
- No in-line styles
