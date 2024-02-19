/**
 * @swagger
 * tags:
 *   name: UserRole
 *   description: API operations for managing user roles
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRole:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the user role.
 *         roleName:
 *           type: string
 *           description: The name of the user role.
 *         roleSerial:
 *           type: number
 *           description: The numeric representation of the user role.
 *         Description:
 *           type: string
 *           description: Description of the user role.
 *         userRoleAccessLevel:
 *           type: number
 *           description: Access level associated with the user role.
 *       required:
 *         - roleName
 *         - roleSerial
 *         - userRoleAccessLevel
 */

/**
 * @swagger
 * /v1/user-role:
 *   get:
 *     summary: Get all user roles
 *     description: Retrieve a list of all user roles.
 *     tags: [UserRole]
 *     responses:
 *       200:
 *         description: A list of all user roles.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               userRoles:
 *                 - _id: "123"
 *                   roleName: "admin"
 *                   roleSerial: 1
 *                   Description: "Administrator role"
 *                   userRoleAccessLevel: 10
 *                 - _id: "456"
 *                   roleName: "user"
 *                   roleSerial: 2
 *                   Description: "Regular user role"
 *                   userRoleAccessLevel: 5
 *                 # Add more user role objects as needed
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
 * /v1/user-role/{id}:
 *   get:
 *     summary: Get user role by ID
 *     description: Retrieve a user role by its ID.
 *     tags: [UserRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User Role ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User role retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               userRole:
 *                 _id: "123"
 *                 roleName: "admin"
 *                 roleSerial: 1
 *                 Description: "Administrator role"
 *                 userRoleAccessLevel: 10
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user role id"
 *       404:
 *         description: User role not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User role not found with the provided id"
 */

/**
 * @swagger
 * /v1/user-role:
 *   post:
 *     summary: Create a new user role
 *     description: Create a new user role with the provided details.
 *     tags: [UserRole]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRole'
 *           example:
 *             roleName: "manager"
 *             roleSerial: 3
 *             Description: "Manager role"
 *             userRoleAccessLevel: 8
 *     responses:
 *       201:
 *         description: User role created successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User role created successfully"
 *               userRole:
 *                 _id: "789"
 *                 roleName: "manager"
 *                 roleSerial: 3
 *                 Description: "Manager role"
 *                 userRoleAccessLevel: 8
 *       400:
 *         description: Invalid request body.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide valid details for the new user role"
 */

/**
 * @swagger
 * /v1/user-role/{id}:
 *   put:
 *     summary: Update user role by ID
 *     description: Update user role details by its ID.
 *     tags: [UserRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User Role ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRole'
 *           example:
 *             roleName: "supervisor"
 *             roleSerial: 4
 *             Description: "Supervisor role"
 *             userRoleAccessLevel: 7
 *     responses:
 *       200:
 *         description: User role updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User role updated successfully"
 *       400:
 *         description: Invalid request parameters or body.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user role id and update data"
 *       404:
 *         description: User role not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User role not found with the provided id"
 */

/**
 * @swagger
 * /v1/user-role/{id}:
 *   delete:
 *     summary: Delete user role by ID
 *     description: Delete a user role by its ID.
 *     tags: [UserRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User Role ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User role deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User role deleted successfully"
 *               userRole:
 *                 _id: "789"
 *                 roleName: "manager"
 *                 roleSerial: 3
 *                 Description: "Manager role"
 *                 userRoleAccessLevel: 8
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Please provide a valid user role id"
 *       404:
 *         description: User role not found.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "User role not found with the provided id"
 */
