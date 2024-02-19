/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations for managing users
 */

//#region Schema
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the user.
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         photo:
 *           type: string
 *         roleSerial:
 *           type: number
 *           description: The role of the user (e.g., 1 for admin, 2 for user).
 *         address:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *           description: The address of the user.
 *       required:
 *         - name
 *         - email
 *         - password
 *         - roleSerial
 */
//#endregion


//#region Get all users
/**
 * @swagger
 * /v1/user:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *         example: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *         example: 100
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Property to sort by
 *         example: username
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Sort order ('asc' or 'desc')
 *         example: asc
 *     responses:
 *       200:
 *         description: "OK"
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Users retrieved successfully"
 *               users:
 *                 - _id: "65b278161ca1b80b6680afac"
 *                   username: "user1"
 *                   email: "user1@example.com"
 *                   createdAt: "2024-01-25T10:13:39.066Z"
 *                   updatedAt: "2024-01-25T10:13:39.066Z"
 *                   accessLevel: 10
 *                 - _id: "65b242c1d5eb7d24f88e34f9"
 *                   username: "user2"
 *                   email: "user2@example.com"
 *                   createdAt: "2024-01-26T12:30:45.123Z"
 *                   updatedAt: "2024-01-26T12:30:45.123Z"
 *                   accessLevel: 5
 *       401:
 *         description: "Unauthorized"
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "You are not authorized"
 *               error: "Token not found / You are not authorized to access this application"
 *       403:
 *         description: "Forbidden"
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error while retrieving users"
 *               error: "You are not authorized to access this operation"
 *       404:
 *         description: "Not Found"
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User not found"
 *               error: "User not found or you do not have access to the data"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "<Provide unhandled error>"
 */

//#endregion


//#region Get user by ID
/**
 * @swagger
 * /v1/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               user:
 *                 _id: "123"
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 roleSerial: 2
 *                 address: "123 Main Street, Cityville"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user id"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User not found with the provided id"
 */
//#endregion




//#region Get multiple users by IDs
/**
 * @swagger
 * /v1/user/by-ids:
 *   post:
 *     summary: Get multiple users by IDs
 *     description: Retrieve information of multiple users by their IDs in a single request.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *         example: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *         example: 100
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Property to sort by
 *         example: enumTableName
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Sort order ('asc' or 'desc')
 *         example: asc
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: string
 *           example:
 *             - "123"
 *             - "456"
 *     responses:
 *       200:
 *         description: Users retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Users retrieved successfully"
 *               users:
 *                 - _id: "123"
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   roleSerial: 2
 *                   address:
 *                     - street: "123 Main St"
 *                       city: "City"
 *                       country: "Country"
 *                 - _id: "456"
 *                   name: "Jane Smith"
 *                   email: "jane.smith@example.com"
 *                   roleSerial: 1
 *                   address:
 *                     - street: "789 Pine Lane"
 *                       city: "Villageland"
 *                       country: "Country"
 *       400:
 *         description: Invalid request body or user IDs.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Invalid request body or user IDs"
 *       404:
 *         description: User(s) not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User(s) not found with the provided IDs"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Internal Server Error"
 */
//#endregion


//#region Create a new user
/**
 * @swagger
 * /v1/user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided name, email, password, address, and photo.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: test123
 *               photo:
 *                 type: file
 *                 example: (file) # Attach file
 *               roleSerial:
 *                 type: number
 *                 example: 2
 *               address:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     street:
 *                       type: string
 *                       example: "123 Main St"
 *                     Zip:
 *                       type: string
 *                       example: "12345"
 *                     city:
 *                       type: string
 *                       example: "City"
 *                     country:
 *                       type: string
 *                       example: "Country"
 *             required:
 *               - name
 *               - email
 *               - password
 *               - roleSerial
 *           example:
 *             name: John Doe
 *             email: john.doe@example.com
 *             password: test123
 *             photo: (file) # Attach file
 *             roleSerial: 2
 *             address:
 *               - street: "123 Main St"
 *                 Zip: "12345"
 *                 city: "City"
 *                 country: "Country"
 *     responses:
 *       201:
 *         description: "Created"
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "New user created successfully"
 *               user:
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 roleSerial: 2
 *                 address:
 *                   - street: "123 Main St"
 *                     Zip: "12345"
 *                     city: "City"
 *                     country: "Country"
 *                 _id: "65b7e76ef0b8f48d2fe8c6ad"
 *                 createdAt: "2024-01-29T17:59:10.904Z"
 *                 updatedAt: "2024-01-29T17:59:10.904Z"
 *                 __v: 0
 *       401:
 *         description: "Unauthorized"
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "You are not authorized"
 *               error: "Token not found / You are not authorized to access this application"
 *       400:
 *         description: "Bad Request"
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error while creating the user"
 *               error: "Invalid property: (given wrong properties) in the given user"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "<Provide unhandled error>"
 */


//#endregion

/**
 * @swagger
 * /v1/user/bulk-create:
 *   post:
 *     summary: Create multiple users in bulk
 *     description: Create multiple users with the provided information in a single request.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/User'
 *           example:
 *             - name: "John Doe"
 *               email: "john.doe@example.com"
 *               password: "test123"
 *               roleSerial: 2
 *               address:
 *                 - street: "123 Main St"
 *                   city: "City"
 *                   country: "Country"
 *             - name: "Jane Smith"
 *               email: "jane.smith@example.com"
 *               password: "test456"
 *               roleSerial: 1
 *               address:
 *                 - street: "789 Pine Lane"
 *                   city: "Villageland"
 *                   country: "Country"
 *     responses:
 *       201:
 *         description: Users created successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Users created successfully"
 *               createdUsers:
 *                 - _id: "123"
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   roleSerial: 2
 *                   address:
 *                     - street: "123 Main St"
 *                       city: "City"
 *                       country: "Country"
 *                 - _id: "456"
 *                   name: "Jane Smith"
 *                   email: "jane.smith@example.com"
 *                   roleSerial: 1
 *                   address:
 *                     - street: "789 Pine Lane"
 *                       city: "Villageland"
 *                       country: "Country"
 *       400:
 *         description: Invalid request body or user data.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Invalid request body or user data"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /v1/user/{id}:
 *   put:
 *     summary: Update user by ID
 *     description: Update user details by their ID.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: John Doe
 *             email: john.doe@example.com
 *             password: test1235
 *             roleSerial: 2
 *             address:
 *               - street: "123 Main St"
 *                 city: "City"
 *                 country: "Country"
 *     responses:
 *       200:
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User updated successfully"
 *       400:
 *         description: Invalid request parameters or body.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user id and update data"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User not found with the provided id"
 */

/**
 * @swagger
 * /v1/user/bulk-update:
 *   post:
 *     summary: Update multiple users in bulk
 *     description: Update the information of multiple users in a single request.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/User'
 *           example:
 *             - _id: "123"
 *               name: "John Doe"
 *               email: "john.doe@example.com"
 *               roleSerial: 2
 *               address:
 *                 - street: "Updated Street"
 *                   city: "Updated City"
 *                   country: "Updated Country"
 *             - _id: "456"
 *               name: "Jane Smith"
 *               email: "jane.smith@example.com"
 *               roleSerial: 2
 *               address:
 *                 - street: "New Street"
 *                   city: "New City"
 *                   country: "New Country"
 *     responses:
 *       200:
 *         description: Users updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Users updated successfully"
 *               updatedUsers:
 *                 - _id: "123"
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   roleSerial: 2
 *                   address:
 *                     - street: "Updated Street"
 *                       city: "Updated City"
 *                       country: "Updated Country"
 *                 - _id: "456"
 *                   name: "Jane Smith"
 *                   email: "jane.smith@example.com"
 *                   roleSerial: 2
 *                   address:
 *                     - street: "New Street"
 *                       city: "New City"
 *                       country: "New Country"
 *       400:
 *         description: Invalid request body or user data.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Invalid request body or user data"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /v1/user/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by their ID.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User deleted successfully"
 *               user:
 *                 _id: "123"
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 roleSerial: 2
 *                 address:
 *                   - street: "123 Main St"
 *                     city: "City"
 *                     country: "Country"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user id"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User not found with the provided id"
 */


/**
* @swagger
* /v1/user/bulk-delete:
*   delete:
*     summary: Bulk delete users
*     description: Delete multiple users in bulk.
*     tags: [User]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               type: string
*           example:
*             - "65b01c2b146a1f6c0d00789e"
*             - "65b7e76ef0b8f48d2fe8c6ad"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Users deleted successfully"
*               deletedIds:
*                 - "65b01c2b146a1f6c0d00789e"
*                 - "65b7e76ef0b8f48d2fe8c6ad"
*               absentIds: []
*               invalidIds: []
*       401:
*         description: "Unauthorized"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "You are not authorized"
*               error: "Token not found / You are not authorized to access this application"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving users"
*               error: "You are not authorized to access this operation"
*       400:
*         description: "Bad Request"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Duplicate ID found: [\"65b01c2b146a1f6c0d00789e\"] / Invalid user IDs"
*               error: "Duplicate ID found: [\"65b01c2b146a1f6c0d00789e\"] / All user ids (65b01c2b146a1f6c0d00789e,65b7e76ef0b8f48d2fe8c6ad) are invalid, no user found by the provided IDs"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "User not found with the provided user IDs"
*               error: "User not found with the provided user IDs (65b01c2b146a1f6c0d00789e,65b7e76ef0b8f48d2fe8c6ad) or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/




/**
 * @swagger
 * /v1/user/search:
 *   post:
 *     summary: Search users
 *     description: Search for users based on specific criteria.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: John
 *             email: john.doe@example.com
 *             roleSerial: 2
 *     responses:
 *       200:
 *         description: Users retrieved based on search criteria.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               users:
 *                 - _id: "123"
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   roleSerial: 2
 *                   address: 
 *                     - street: "123 Main St"
 *                       city: "City"
 *                       country: "Country"
 *                 - _id: "456"
 *                   name: "Jane Smith"
 *                   email: "jane.smith@example.com"
 *                   roleSerial: 1
 *                   address: 
 *                     - street: "789 Pine Lane"
 *                       city: "Villageland"
 *                       country: "Country"
 *               # Add more user objects as needed
 *       400:
 *         description: Invalid request body.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide valid search criteria"
 */

/**
 * @swagger
 * /v1/user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided name, email and password. Role is fixed to 'user'.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: John Doe
 *             email: john.doe@example.com
 *             password: test123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid request body or user already exists.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User with the provided email already exists or invalid request body"
 */

/**
 * @swagger
 * /v1/user/login:
 *   post:
 *     summary: User Login
 *     description: Log in with the provided credentials.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *           example:
 *             email: admin@example.com
 *             password: admin
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User logged in successfully"
 *               token: "JWT_TOKEN_HERE"
 *       400:
 *         description: Invalid login credentials.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Invalid login credentials"
*/


/**
 * @swagger
 * /v1/user/logout:
 *   post:
 *     summary: User Logout
 *     description: Log out the currently authenticated user.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User logged out successfully"
 *       401:
 *         description: Unauthorized. User not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Unauthorized. User not authenticated"
 */

/**
 * @swagger
 * /v1/user/check:
 *   post:
 *     summary: Check User Authentication
 *     description: Check the user's authentication status using the provided token.
 *     tags: [User]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *             required:
 *               - token
 *           example:
 *             token: null
 *     responses:
 *       200:
 *         description: User is authenticated.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Authenticated"
 *               user:
 *                 _id: "123"
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 roleSerial: 2
 *                 address:
 *                   - street: "123 Main St"
 *                     city: "City"
 *                     country: "Country"
 *       401:
 *         description: Unauthorized. User not authenticated or token is invalid.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Unauthorized"
 */

