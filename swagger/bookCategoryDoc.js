/**
 * @swagger
 * tags:
 *   name: BookCategory
 *   description: API operations for managing book categorys
 */

//#region Schemas
/**
 * @swagger
 * components:
 *   schemas:
 *     BookCategory:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the book category.
 *         bookCategory:
 *           type: string
 *           description: The name of the book category.
 *         bookCategoryDescription:
 *           type: string
 *           description: Description of the book category.
 *         bookCategoryAccessLevel:
 *           type: number
 *           description: Access level associated with the book category.
 *       required:
 *         - bookCategory
 *         - bookCategoryAccessLevel
 */
//#endregion


//#region Get operations
/**
* @swagger
* /v1/book-category:
*   get:
*     summary: Get all book categorys
*     description: Retrieve a list of all book categorys
*     tags: [BookCategory]
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
*         example: bookCategory
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
*               message: "Book categories retrieved successfully"
*               bookCategories:
*                 - _id: "65b278161ca1b80b6680afac"
*                   bookCategory: "bookCategory1"
*                   bookCategoryDescription: "bookCategory 1"
*                   bookCategoryAccessLevel: 10
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookCategory: "bookCategory2"
*                   bookCategoryDescription: "bookCategory 2"
*                   bookCategoryAccessLevel: 5
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
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found"
*               error: "Book category not found or you do not have access to the data"
*       500:
*         description: "Internal Server Error"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/

/**
* @swagger
* /v1/book-category/{id}:
*   get:
*     summary: Get book category by ID
*     description: Retrieve an book category by its ID.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Category ID
*         schema:
*           type: string
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book category retrieved successfully"
*               bookCategory:
*                 - _id: "65b278161ca1b80b6680afac"
*                   bookCategory: "bookCategory1"
*                   bookCategoryDescription: "bookCategory 1"
*                   bookCategoryAccessLevel: 1
*                   createdAt: "2024-01-25T15:02:46.259Z"
*                   updatedAt: "2024-01-25T15:02:46.259Z"
*                   __v: 0
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
*               message: "Error while retrieving the book category"
*               error: "Invalid type of MongoDB book category ID / Please provide a valid book category ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "EBook category not found with the provided book category ID"
*               error: "Book category not found by the provided ID (65b278161ca1b80b6680afac) or you do not have access to the data"
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
* /v1/book-category/by-ids:
*   post:
*     summary: Get book categorys by IDs
*     description: Get multiple book categorys by their IDs
*     tags: [BookCategory]
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
*         example: bookCategory
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
*             - "65b242c1d5eb7d24f88e34f9"
*             - "65b242c1d5eb7d24f88e34fa"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book categories retrieved successfully"
*               bookCategories:
*                 - _id: "65b278161ca1b80b6680afac"
*                   bookCategory: "bookCategory1"
*                   bookCategoryDescription: "bookCategory 1"
*                   bookCategoryAccessLevel: 10
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookCategory: "bookCategory2"
*                   bookCategoryDescription: "bookCategory 2"
*                   bookCategoryAccessLevel: 5
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
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       400:
*         description: "Bad Request"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / Invalid book category IDs"
*               error: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / All book category ids (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) are invalid, no book category found by the provided IDs"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found with the provided book category IDs"
*               error: "Book category not found by the provided IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/
//#endregion


//# region Create operations
/**
* @swagger
* /v1/book-category:
*   post:
*     summary: Create a new book category
*     description: Create a new book category with the provided details.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/BookCategory'
*           example:
*             bookCategory: "bookCategory1"
*             bookCategoryDescription: "bookCategory 1"
*             bookCategoryAccessLevel: 1
*     responses:
*       201:
*         description: "Created"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "New book category created successfully"
*               createdBookCategory:
*                 bookCategory: "bookCategory1"
*                 bookCategoryDescription: "bookCategory 1"
*                 bookCategoryAccessLevel: 1
*                 _id: "65b23453937af637d0cb130c"
*                 createdAt: "2024-01-25T10:13:39.066Z"
*                 updatedAt: "2024-01-25T10:13:39.066Z"
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
*               message: "Error while creating the book category"
*               error: "Invalid property: (given wrong properties) in the given bookCategory"
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
* /v1/book-category/bulk-create:
*   post:
*     summary: Bulk create book categorys
*     description: Create multiple book categorys in bulk.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               $ref: '#/components/schemas/BookCategory'
*           example:
*             - bookCategory: "bookCategory2"
*               bookCategoryDescription: "bookCategory 2"
*               bookCategoryAccessLevel: 2
*             - bookCategory: "bookCategory3"
*               bookCategoryDescription: "bookCategory 3"
*               bookCategoryAccessLevel: 3
*     responses:
*       201:
*         description: "Created"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book categories created successfully in bulk"
*               bookCategories:
*                 - bookCategory: "bookCategory5"
*                   bookCategoryDescription: "bookCategory 5"
*                   bookCategoryAccessLevel: 10
*                   _id: "65b242c1d5eb7d24f88e34f9"
*                   __v: 0
*                   createdAt: "2024-01-25T11:15:13.983Z"
*                   updatedAt: "2024-01-25T11:15:13.983Z"
*                 - bookCategory: "bookCategory6"
*                   bookCategoryDescription: "bookCategory 6"
*                   bookCategoryAccessLevel: 10
*                   _id: "65b242c1d5eb7d24f88e34fa"
*                   __v: 0
*                   createdAt: "2024-01-25T11:15:13.984Z"
*                   updatedAt: "2024-01-25T11:15:13.984Z"
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
*               message: "Invalid property: ([[\"bookCategory1\"]]) in one or more of the given book categorys"
*               error: "Invalid property: ([[\"bookCategory1\"]]) in one or more of the given book categorys"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/
//#endregion


//# region Update operations
/**
* @swagger
* /v1/book-category/{id}:
*   put:
*     summary: Update book category by ID
*     description: Update book category details by its ID.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Category ID
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/BookCategory'
*           example:
*             bookCategory: "bookCategory4 updated"
*             bookCategoryDescription: "bookCategory 4 updated"
*             bookCategoryAccessLevel: 4
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book category updated successfully"
*               updatedBookCategory:
*                 _id: "65b27c68857b9142cd78d2b3"
*                 bookCategory: "bookCategory4 updated"
*                 bookCategoryDescription: "bookCategory 4 updated"
*                 bookCategoryAccessLevel: 4
*                 createdAt: "2024-01-25T15:21:12.539Z"
*                 updatedAt: "2024-01-25T18:38:40.910Z"
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
*               message: "Error while retrieving the book category"
*               error: "Invalid type of MongoDB book category ID / Please provide a valid book category ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found with the provided book category ID"
*               error: "Book category not found by the provided ID (65b278161ca1b80b6680afac) or you do not have access to the data"
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
* /v1/book-category/bulk-update:
*   post:
*     summary: Bulk update book categorys
*     description: Update multiple book categorys in bulk.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               $ref: '#/components/schemas/BookCategory'
*           example:
*             - _id: "65b242c1d5eb7d24f88e34f9"
*               bookCategory: "bookCategory5 updated"
*               bookCategoryDescription: "bookCategory 5 updated"
*               bookCategoryAccessLevel: 5
*             - _id: "65b242c1d5eb7d24f88e34fa"
*               bookCategory: "bookCategory6 updated"
*               bookCategoryDescription: "bookCategory 6 updated"
*               bookCategoryAccessLevel: 6
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book categories updated successfully in bulk"
*               bookCategories:
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookCategory: "bookCategory5 updated"
*                   bookCategoryDescription: "bookCategory 5 updated"
*                   bookCategoryAccessLevel: 5
*                 - _id: "65b242c1d5eb7d24f88e34fa"
*                   bookCategory: "bookCategory6 updated"
*                   bookCategoryDescription: "bookCategory 6 updated"
*                   bookCategoryAccessLevel: 6
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
*               message: "Invalid property: ([[\"bookCategory1\"]]) in one or more of the given book categorys / Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"]"
*               error: "Invalid property: ([[\"bookCategory1\"]]) in one or more of the given book categorys / Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"]"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found with the provided book category IDs"
*               error: "Book category not found by the provided IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/
//#endregion

//# region Delete operations
/**
* @swagger
* /v1/book-category/{id}:
*   delete:
*     summary: Delete book category by ID
*     description: Delete an book category by its ID.
*     tags: [BookCategory]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Category ID
*         schema:
*           type: string
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book category deleted successfully"
*               bookCategory:
*                 _id: "65b2427bcb55566026bd4324"
*                 bookCategory: "manager"
*                 bookCategoryDescription: "Manager role"
*                 bookCategoryAccessLevel: 8
*                 createdAt: "2024-01-25T11:14:03.975Z"
*                 updatedAt: "2024-01-25T11:14:03.975Z"
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
*               message: "Error while retrieving the book category"
*               error: "Invalid type of MongoDB book category ID / Please provide a valid book category ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found with the provided book category ID"
*               error: "Book category not found by the provided ID (65b278161ca1b80b6680afac) or you do not have access to the data"
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
* /v1/book-category/bulk-delete:
*   delete:
*     summary: Bulk delete book categorys
*     description: Delete multiple book categorys in bulk.
*     tags: [BookCategory]
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
*             - "65b242c1d5eb7d24f88e34f9"
*             - "65b242c1d5eb7d24f88e34fa"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book categories deleted successfully"
*               deletedIds:
*                 - "65b242c1d5eb7d24f88e34f9"
*                 - "65b242c1d5eb7d24f88e34fa"
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
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       400:
*         description: "Bad Request"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / Invalid book category IDs"
*               error: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / All book category ids (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) are invalid, no book category found by the provided IDs"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found with the provided book category IDs"
*               error: "Book category not found with the provided book category IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/

//#endregion


//# region Search operations
/**
* @swagger
* /v1/book-category/search:
*   post:
*     summary: Search book categorys
*     description: Search for book categorys based on specific criteria.
*     tags: [BookCategory]
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
*         example: bookCategory
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
*             type: object
*             properties:
*               bookCategory:
*                 type: string
*                 description: The name of the book category.
*               bookCategoryDescription:
*                 type: string
*                 description: Description of the book category.
*               bookCategoryAccessLevel:
*                 type: number
*                 description: Access level associated with the book category.
*             example:
*               bookCategory: "bookCategory"
*               bookCategoryDescription: "bookCategory 5"
*               bookCategoryAccessLevel: 10
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book categories retrieved successfully based on the search criteria"
*               bookCategories:
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookCategory: "bookCategory5"
*                   bookCategoryDescription: "bookCategory 5"
*                   bookCategoryAccessLevel: 10
*                 - _id: "65b242c1d5eb7d24f88e34fa"
*                   bookCategory: "bookCategory6"
*                   bookCategoryDescription: "bookCategory 6"
*                   bookCategoryAccessLevel: 10
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
*               message: "Invalid property: [\"bookCategory1\"] in one or more of the given book category"
*               error: "Invalid property: [\"bookCategory1\"] in one or more of the given book category"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book categorys"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book category not found"
*               error: "Book category not found with the provided search criteria or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/

//#endregion