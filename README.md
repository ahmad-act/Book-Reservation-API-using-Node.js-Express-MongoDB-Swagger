# Book Reservation API
[![Outlook](https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:engzaman2020@outlook.com) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmad-awsaf-uz-zaman/) [![Live Link](https://img.shields.io/badge/Live%20Link-Book%20Reservation%20Api-blue?style=for-the-badge)](https://book-reservation-api-u5zc.onrender.com)


<!-- TABLE OF CONTENTS -->

## Table of Contents
- [Book Reservation API](#book-reservation-api)
  - [Table of Contents](#table-of-contents)
  - [ℹ️ About The Book Reservation API](#ℹ️-about-the-book-reservation-api)
  - [💡 Conceptual Model](#-conceptual-model)
  - [💡 Logical Model](#-logical-model)
  - [📁 Project Structure](#-project-structure)
    - [🚀 Build and Run](#-build-and-run)
  - [⚒️ Tech Stack](#️-tech-stack)
  - [🧰 Prerequisites](#-prerequisites)
  - [🛣️ Getting Started](#️-getting-started)
    - [🖥️ Usage](#️-usage)
    - [🛤️ Road map](#️-road-map)
    - [🤝 Contributing](#-contributing)
  - [📧 Contact](#-contact)

<!-- ABOUT THE PROJECT -->
## ℹ️ About The Book Reservation API

The Book Reservation System API is a RESTful web service designed to facilitate the management of book reservations for libraries or bookstores. It serves as the backend infrastructure for the book reservation system, providing endpoints for various operations related to books, users, and reservations.

Key features of the Book Reservation API include:

- **Book Management:** The API allows administrators to manage books, including adding new books to the system, updating existing book information, and deleting books when necessary. This ensures that the database of available books remains up-to-date and accurate.

- **User Management:** User accounts are an essential part of the reservation system, and the API enables administrators to manage user accounts. This includes creating new user accounts, updating user information, and deactivating or deleting user accounts as needed.

- **Reservation Handling:** The API provides endpoints for users to reserve books, view their existing reservations, and cancel reservations if necessary. Additionally, administrators can view and manage all reservations through dedicated endpoints, allowing for efficient oversight of the reservation process.

- **Authentication and Security:** To ensure the security of user data and prevent unauthorized access, the API implements robust authentication mechanisms. This typically involves token-based authentication, where users and administrators must authenticate themselves with a valid token before accessing protected endpoints.

Overall, the goal of the Book Reservation System API is to provide a reliable and flexible backend infrastructure for managing book reservations, helping libraries and bookstores streamline their operations and provide better service to their patrons.

<!-- Conceptual Model -->
## 💡 Conceptual Model 
![Book Reservation API](https://github.com/awsaf-utm/public-resources/blob/main/cdm-book-reservation.png?raw=true)

<!-- Logical Model -->
## 💡 Logical Model 
![Book Reservation API](https://github.com/awsaf-utm/public-resources/blob/main/ldm-book-reservation.png?raw=true)

<!-- Project Structure -->
## 📁 Project Structure
The folder structure of this app is explained below:

| Name                   | Description                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------|
| **build**              | Contains the distributable (or output) from the Babel build process.                           |
| **dev-build**          | Contains the distributable (or output) from the Webpack build process for development.          |
| **prod-build**         | Contains the distributable (or output) from the Webpack build process for production.           |
| **node_modules**       | Contains all npm dependencies.                                                                |
| **src**                | Contains the source code that will be compiled to the build/dev-build/prod-build directory.     |
| **src/index.js**       | Entry point to the Express application.                                                        |
| **src/models**         | Defines schemas for storing and retrieving data from the application database.                  |
| **src/routes**         | Contains all Express routes, organized by module or area of application.                        |
| **src/controllers**    | Contains functions that define various Express routes.                                          |
| **src/businessLayer**  | Houses all business logic of the application.                                                   |
| **src/dataAccessLayer**| Contains code for interacting with the database.                                                |
| **src/middlewares**    | Express middleware functions that process incoming requests before routing them to routes.      |
| **src/lib**            | Contains common libraries used across the application.                                          |
| **swagger**            | Contains Swagger API documentation files.                                                       |
| **tests**              | Contains unit tests for the application.                                                        |
| **uploads**            | Directory for uploaded files.                                                                  |
| **package.json**       | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped).|
| **.env**               | Contains application environment variables.                                                     |
| **.babelrc**           | Configuration file for Babel, specifying presets and plugins for transpilation.                |
| **mocha.config.json**  | Configuration file for Mocha, specifying options and settings for test execution.               |
| **webpack.dev.js**     | Configuration file for Webpack in development mode.                                             |
| **webpack.prod.js**    | Configuration file for Webpack in production mode.                                              |

### 🚀 Build and Run
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script   | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `start`      | Runs the Node.js application using `src/index.js` as the entry point. Can be invoked with `npm start`. |
| `test`       | Runs the build process and executes tests using Mocha.                                          |
| `build`      | Transpiles the source code in the `src` directory to JavaScript and outputs it to the `build` directory. |
| `start:build`| Starts the application after building it.                                                        |
| `build:dev`  | Transpiles the source code in the `src` directory to JavaScript and outputs it to the `dev-build` directory. |
| `start:dev`  | Starts the development server using the output from the development build.                       |
| `build:prod` | Transpiles the source code in the `src` directory to JavaScript and outputs it to the `prod-build` directory. |
| `start:prod` | Starts the production server using the output from the production build.                         |

<!-- Tech Stack -->
## ⚒️ Tech Stack
![bcrypt](https://img.shields.io/badge/bcrypt-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;bcrypt&amp;logoColor&#x3D;white) ![cookie-parser](https://img.shields.io/badge/cookie-parser-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;cookie-parser&amp;logoColor&#x3D;white) ![dotenv](https://img.shields.io/badge/dotenv-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;dotenv&amp;logoColor&#x3D;white) ![express](https://img.shields.io/badge/express-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;express&amp;logoColor&#x3D;white) ![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;jsonwebtoken&amp;logoColor&#x3D;white) ![moment](https://img.shields.io/badge/moment-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;moment&amp;logoColor&#x3D;white) ![mongoose](https://img.shields.io/badge/mongoose-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;mongoose&amp;logoColor&#x3D;white) ![multer](https://img.shields.io/badge/multer-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;multer&amp;logoColor&#x3D;white) ![swagger-jsdoc](https://img.shields.io/badge/swagger-jsdoc-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;swagger-jsdoc&amp;logoColor&#x3D;white) ![validator](https://img.shields.io/badge/validator-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;validator&amp;logoColor&#x3D;white) ![winston](https://img.shields.io/badge/winston-F0EDCF?style&#x3D;for-the-badge&amp;logo&#x3D;winston&amp;logoColor&#x3D;white) ![babel-loader](https://img.shields.io/badge/babel-loader-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;babel-loader&amp;logoColor&#x3D;white) ![chai](https://img.shields.io/badge/chai-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;chai&amp;logoColor&#x3D;white) ![chai-http](https://img.shields.io/badge/chai-http-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;chai-http&amp;logoColor&#x3D;white) ![esm](https://img.shields.io/badge/esm-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;esm&amp;logoColor&#x3D;white) ![mocha](https://img.shields.io/badge/mocha-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;mocha&amp;logoColor&#x3D;white) ![node.js](https://img.shields.io/badge/Node.js-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;Node.js&amp;logoColor&#x3D;white) ![sinon](https://img.shields.io/badge/sinon-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;sinon&amp;logoColor&#x3D;white) ![webpack](https://img.shields.io/badge/webpack-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;webpack&amp;logoColor&#x3D;white) ![webpack-cli](https://img.shields.io/badge/webpack-cli-40A2D8?style&#x3D;for-the-badge&amp;logo&#x3D;webpack-cli&amp;logoColor&#x3D;white)

<!-- Prerequisites -->
## 🧰 Prerequisites

This project requires NodeJS (version 21 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
npm -v && node -v
10.2.0
v21.0.0
```

<!-- GETTING STARTED -->
## 🛣️ Getting Started

To get started with the **Book Reservation System API**, follow these steps:

1. **Fork the Project:**
   - Fork the project repository from [GitHub](https://github.com/awsaf-utm/book-reservation-api.git) to your GitHub account.

2. **Clone the Repository:**
   - Clone the forked repository to your local machine using the following command:
     ```bash
     git clone https://github.com/awsaf-utm/book-reservation-api.git
     ```

3. **Install Dependencies:**
   - Navigate to the project directory:
     ```bash
     cd book-reservation-api
     ```
   - Install the required dependencies by running:
     ```bash
     npm install
     ```

4. **Set Environment Variables:**
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
     ```plaintext
     PORT=3000
     MONGODB_URL=your_mongodb_connection_string
	 MONGODB_TEST_URL=your_mongodb_test_connection_string
     JWT_SECRET=your_jwt_secret
	 TIMEZONE='Europe/Helsinki'
	 NEXT_PUBLIC_RECORD_PER_PAGE=30
     ```

5. **Start the Server:**
   - Start the server by running:
     ```bash
     npm start
     ```
   - This will start the server at `http://localhost:3000`.

6. **Testing:**
   - To run tests, execute:
     ```bash
     npm test
     ```

7. **API Documentation:**
   - Once the server is running, you can access the Swagger documentation by navigating to `http://localhost:3000/v1/api-docs` in your web browser. This documentation provides details about the available endpoints and how to interact with them.


   
Following these steps will get you up and running with the Book Reservation System API. Feel free to explore and customize the codebase to suit your needs!

<!-- USAGE EXAMPLES -->
### 🖥️ Usage

The Book Reservation API simplifies the process of managing book reservations for libraries or bookstores. Here's how you can utilize it effectively:

1. **Authentication:**
   - Before accessing most endpoints, you need to authenticate yourself. Use the `/v1/user/login` endpoint with your credentials (username and password) to obtain a JWT token.

2. **Book Management:**
   - Utilize the `/v1/book-info` endpoints to manage books within the system:
     - Retrieve books: Send a GET request to `/v1/book-info`.
     - Add a new book: Send a POST request to `/v1/book-info` with the book details in the request body.
     - Update an existing book: Send a PUT request to `/v1/book-info/{id}` with the updated book details in the request body.
     - Delete a book: Send a DELETE request to `/v1/book-info/{id}`.

3. **User Management:**
   - Administrators can handle user accounts using the `/v1/user-info` endpoints:
     - Get users: Send a GET request to `/v1/user-info`.
     - Create a new user: Send a POST request to `/v1/user-info` with the user details in the request body.
     - Update an existing user: Send a PUT request to `/v1/user-info/{id}` with the updated user details in the request body.
     - Delete a user: Send a DELETE request to `/v1/user-info/{id}`.

4. **Reservation Handling:**
   - Users can reserve books through the `/v1/book-reservation` endpoints:
     - View existing reservations: Send a GET request to `/v1/book-reservation`.
     - Create a new reservation: Send a POST request to `/v1/book-reservation` with the book ID in the request body.
     - Cancel a reservation: Send a DELETE request to `/v1/book-reservation/{id}`.

5. **Swagger Documentation:**
   - Detailed information on available endpoints and their usage is provided in the Swagger documentation. Access it by navigating to `http://localhost:3000/v1/api-docs` in your web browser after starting the server.

By following these usage guidelines, you can effectively manage book reservations using the Book Reservation API.


<!-- ROAD MAP -->
### 🛤️ Road map
Currently, the project is considered complete. However, in the future, I may identify areas for improvement or additional features to enhance its functionality. At that point, I'll update the roadmap with a more detailed plan for the project's evolution.


<!-- CONTRIBUTING -->
### 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature)
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<!-- CONTACT -->
## 📧 Contact

Feel free to reach out to me with questions comments, or concerns at one of the ways below.

Git Hub: https://github.com/awsaf-utm

Email: engzaman2020@outlook.com

LinkedIn Link: https://www.linkedin.com/in/ahmad-awsaf-uz-zaman

Project Link: https://github.com/awsaf-utm/book-reservation-api

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


<!-- License -->
##📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
