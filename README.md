# jwt-and-auth
https://hackmd.io/lCsuFB6xR7SsS89_oulwkg?view

<h3>How To Run this project: </h3>
<ol>
<li>clone repo.</li>
<li>in terminal: npm i</li>
  <li>in terminal write the following commands: </li>
- psql <br>
- create database registration_system; <br>
- create user authuser with superuser password 'cookies'; <br>
- grant all privileges on database registration_system to authuser; 
<li>create .env file in the project directory locally. Write inside it the following:</li>
	DATABASE_URL = postgres://authuser:cookies@localhost:5432/registration_system
<li>to create the tables in your local db go back to terminal and write: node src/models/database/db_build.js</li>
<li>in the terminal : npm start</li>
<li>open localhost:3000 and the project will run.</li>
</ol>
