<p align="center">
 <img src="./src/assets/project-cover.png" alt="Foto de capa" width="100%" />
</p>  

[🇧🇷 Leia esta documentação em Português](./README.pt-BR.md)

## 👩‍💻 Key Learnings

During the development of Hairday, I applied several fundamental concepts for full-stack web projects. Some of the main takeaways include:

--> Webpack: I configured a bundler from scratch to manage frontend assets, creating a modern development environment with Hot Module Replacement (HMR), modular organization, and optimized builds.

--> Babel: I used Babel to transpile modern JavaScript (ES6+) into browser-compatible versions, deepening my understanding of backward compatibility in web development.

--> json-server: I simulated a full REST API using json-server, which allowed me to test HTTP requests (GET, POST, DELETE) and work with dynamic data efficiently.

--> Frontend + API Integration: I integrated the web interface with an API using fetch and async/await, handling asynchronous states, error management, and dynamic UI updates based on API data.

--> Version Control with Git: I improved my Git and GitHub skills, learning how to manage versioning, .gitignore files, commit organization, and indexing.

--> Automation with npm scripts: I configured custom scripts in package.json to automate common tasks like starting the server and building the project.

This project was essential in understanding how different tools and concepts connect in a modern development workflow, solidifying my web development foundation.

💻 Project Structure
hadirday_project

├── dist/                 # Webpack build (ignored by Git)

├── node_modules/         # Dependencies (ignored by Git)

├── src/                  # Frontend source code

├── .gitignore

├── README.md

├── README.pt-BR.md

├── index.html

├── package-lock.json

├── package.json

├── server.json           # Fake database (json-server)

└── webpack.config.js

## 💾 Prerequisites

--> Node.js installed

--> npm or yarn

## 🚀 How to Run

--> Start the API with json-server:

--> npm install -g json-server (if not already installed)

--> npm run server (starts the fake API on port 3333)

--> Run the frontend with Webpack:

--> npm install

--> npm run dev (starts the Webpack development server)

Usage:

--> Open your browser and navigate to the URL provided by Webpack.

--> Create appointments, which will be saved directly to the json-server fake API.

## ⚙️ Technologies
This project was developed using the following technologies:

--> Node.js

--> json-server

--> Webpack

--> Babel

--> HTML / CSS

--> JavaScript (ES6+)

--> Git & GitHub

## 🏷️ Layout
You can view the project layout through [this link](https://www.figma.com/community/file/1360316357733167308). Note: A Figma account is required [Figma](https://www.figma.com).
