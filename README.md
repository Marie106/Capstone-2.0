# Capstone-2.0
Explore Columbus: A Guide to Family, Women’s, and Couples’ Activities **Introduction**: As a software engineer and a mother of two, I have experienced the challenges of finding suitable places for various activities, especially when traveling. Whether it's looking for kid-friendly restaurants, safe spaces for women, or fun activities for couples or friends, the information is often scattered across different sources. This project aims to create a comprehensive and user-friendly website that consolidates all these options into one place, making it easier for residents and visitors in Columbus to find activities that suit their needs. 


Objectives:
•	Families and Kids: Provide curated recommendations for libraries, parks, indoor play areas, kid-friendly restaurants, and attractions (both free and paid).
•	Women’s Safe Spaces: Highlight spas, gyms, parks, shops, and restaurants offering a secure and enjoyable environment for women.
•	Couples and Friends: List activities such as pottery classes, sip and paint events, restaurants, museums, and entertainment options suitable for couples and groups of friends.
Scope:
•	Geographic Focus: Initially, the website will focus on Columbus, Ohio, with plans to expand to other cities in the future.
•	Features: The website will include sections for recommendations, reviews, and a map view of locations. It will offer filtering options based on budget, location, and specific needs (e.g., wheelchair accessibility, kid-friendliness).
Methodology/Approach:
•	Technology Stack:
o	Frontend: React
o	Backend: Node.js with Express
o	Database: MongoDB
•	Data Collection: Data will be sourced from public records, user reviews, and personal experiences. User-generated content and reviews will be encouraged for ongoing updates.
•	Design and User Experience: The website will feature a clean, responsive design with a focus on intuitive navigation and ease of use.
•	Development Phases:
1.	Phase 1: Design and wireframing.
2.	Phase 2: Backend and database setup.
3.	Phase 3: Frontend development.
4.	Phase 4: Testing and deployment.
5.	Phase 5: Launch and initial content population.
•	Timeline:
o	Day 1: Planning and design.
o	Days 2-5: Development and testing.
o	Day 5: Content population and launch.
o	Day 6: User feedback collection and iteration.


Wireframes:
1.	Home Page
o	Header: Logo, Navigation Menu (Home, Families, Women, Couples, Map, About Us)
o	Main Content:
	Welcome message and brief overview
	Quick links to Family, Women’s, and Couples’ sections
	Featured activities and highlights
o	Footer: Contact Information, Privacy Policy, Terms of Service
2.	Families Page
o	Header: Logo, Navigation Menu
o	Main Content:
	Search and filter options (e.g., location, age group, price)
	Curated list of family-friendly activities with descriptions, ratings, and reviews
	Interactive map showing locations
o	Footer: Contact Information, Privacy Policy, Terms of Service
3.	Women’s Safe Spaces Page
o	Header: Logo, Navigation Menu
o	Main Content:
	Search and filter options (e.g., location, type of space, amenities)
	List of safe spaces with details and user reviews
	Interactive map showing locations
o	Footer: Contact Information, Privacy Policy, Terms of Service
4.	Couples & Friends Page
o	Header: Logo, Navigation Menu
o	Main Content:
	Search and filter options (e.g., activity type, budget, location)
	Curated list of activities for couples and friends with descriptions, ratings, and reviews
	Interactive map showing locations
o	Footer: Contact Information, Privacy Policy, Terms of Service
Data Models:
1.	Activity
o	Fields:
	activityId (String, unique identifier)
	name (String, name of the activity)
	description (String, detailed description)
	type (String, category of activity - Family, Women’s, Couples)
	location (String, address or coordinates)
	price (Number, cost associated with the activity)
	rating (Number, average user rating)
	reviews (Array of Objects, reviews with user details and comments)
2.	User
o	Fields:
	userId (String, unique identifier)
	name (String, user’s name)
	email (String, user’s email)
	password (String, hashed password)
	favorites (Array of Strings, IDs of favorite activities)
	reviews (Array of Objects, user reviews with details)
3.	Review
o	Fields:
	reviewId (String, unique identifier)
	activityId (String, ID of the activity being reviewed)
	userId (String, ID of the user who wrote the review)
	rating (Number, rating given)
	comment (String, user’s comment)
	date (Date, when the review was posted)
CRUD Functionality:
1.	Activity
o	Create: POST /activities - Add a new activity
o	Read: GET /activities - List all activities, GET /activities/:id - Get a specific activity
o	Update: PUT /activities/:id - Update an existing activity
o	Delete: DELETE /activities/:id - Remove an activity
2.	User
o	Create: POST /users - Register a new user
o	Read: GET /users/:id - Get user profile
o	Update: PUT /users/:id - Update user information
o	Delete: DELETE /users/:id - Delete user account
3.	Review
o	Create: POST /reviews - Add a new review
o	Read: GET /reviews - List all reviews, GET /reviews/:id - Get a specific review
o	Update: PUT /reviews/:id - Update an existing review
o	Delete: DELETE /reviews/:id - Remove a review


Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).
Timeline
As the course progressed, you were given incremental assignments that challenged you to integrate the content that you have learned into your capstone project, pushing it closer to completion over time.
At each stage of your project, you have witnessed your own growth through the application’s progress. Hopefully, both you and your application have embraced change, persevered through the struggles, and done some try/catching when there was an exception to be handled.
Now that you have reached the final days of the course, there will be eight days of dedicated project time for final tasks. You have made it to the end of the race, now it is time to cross the finish line!
The complete application is due by 11:59pm on submission day, following the class time zone. 
Submission
When your project is finally complete, submit the link to your completed assessment using the Start Assignment button on the assignment page in Canvas.
Your submission should include:
A GitHub link to the repository for your completed project.
You will also be given the opportunity to present your project to guests, instructors, and/or a Talent Advocate Manager (not the class) upon completion. Lean into this opportunity to become accustomed with speaking about your work, both from a technical and non-technical perspective.
Your presentation should include:
A demonstration of the application.
An overview of the challenges you endured, and how you handled them.
A short question-and-answer period.
Your instructor will schedule practice presentations throughout the development phase.
Instructions
This final assignment is a reminder to double-check everything you have done so far, and finish any remaining tasks over the next eight days. Be sure to reference the requirements outlined below to ensure your project meets the technical criteria outlined.
Your project vision and its implementation likely changed substantially from the planning phase many weeks ago. Check in again with your instructor to make sure that you are on pace for success by the end of this final project phase.
Finishing Up
Reference your original project plan and any notes you have made for yourself since then. Ensure that you have time to complete all of the tasks you outlined for yourself. Prioritize well, and if you cannot finish everything, decide what is most important.
As you finish building your application, ask yourself the following questions:
Did you deliver a project that met all of the technical requirements?
Given what the class has covered, did you build something reasonably complex?
Did you add a personal touch or a creative element into your project submission?
Did you deliver something of value to the end-user (not just a login button and an index page)?
Did you follow the code style guidance and exercise best practices?
Did you provide an appropriate level of comments?
Did you try to deploy your application to a public URL as a personal stretch goal?
Lastly, congratulations! You have come incredibly far in a very short period of time. Be proud.
Requirements and Rubricsx
These requirements are intended to give you as much creative freedom as possible while still showcasing the skills gained during your technical learning journey.
Requirements
Your project folder should be named as follows, for submission:
LastName_FirstName_ProjectName_Capstone 

(20%) Project Structure, Standardization, and Convention.                                                     
•	Project is organized into appropriate files and directories, following best practices.      
•	Project contains an appropriate level of comments.                                                         
•	Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project.                                                                
•	Standard naming conventions are used throughout the project.                                       
•	Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).                                            
•	Level of effort displayed in creativity, presentation, and user experience.                     


(12%) Core JavaScript  
•	Demonstrate proper usage of ES6 syntax and tools.               
•	Use functions and classes to adhere to the DRY principle.    
•	Use Promises and async/await, where appropriate.               
•	Use Axios or fetch to retrieve data from an API.                    
•	Use sound programming logic throughout the application.     
•	Use appropriate exception handling.                                                


(9%) Database
•	Use MongoDB to create a database for your application.
•	Apply appropriate indexes to your database collections.
•	Create reasonable schemas for your data by following data modeling best practices.

(19%) Server
•	Create a RESTful API using Node and Express.
* For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.
•	Include API routes for all four CRUD operations.
•	Utilize the native MongoDB driver or Mongoose to interface with your database.
•	Include at least one form of user authentication/authorization within the application.



(35%) Front-End Development
•	Use React to create the application’s front-end.
•	Use CSS to style the application.
•	Create at least four different views or pages for the application.
•	Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.
•	Use React Hooks or Redux for application state management.
•	Interface directly with the server and API that you created.


(5%) Presentation
•	Create a short overview of your application.
•	Highlight the use cases of your application.
•	Highlight the technical functionality of the application, from a high-level perspective.
•	Discuss what you have learned through the development of the application.
•	Discuss additional features that could be added to the application in the future.
