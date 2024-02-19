/**
 * @swagger
 * tags:
 *   name: BookInfo
 *   description: API operations for managing book information
 */

//#region Schemas
/**
 * @swagger
 * components:
 *   schemas:
 *     BookInfo:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the book.
 *         bookTitle:
 *           type: string
 *           description: The title of the book.
 *         stock:
 *           type: number
 *           description: The stock quantity of the book.
 *         bookCategoryId:
 *           type: string
 *           description: The ID of the book category.
 *         author:
 *           type: string
 *           description: The author of the book.
 *         ISBN:
 *           type: string
 *           description: The ISBN of the book.
 *         publisher:
 *           type: string
 *           description: The publisher of the book.
 *         publishDate:
 *           type: string
 *           format: date
 *           description: The publication date of the book.
 *         language:
 *           type: string
 *           description: The language of the book.
 *         coverImage:
 *           type: file
 *           description: The cover image file of the book.
 *         note:
 *           type: string
 *           description: Additional notes about the book.
 *       required:
 *         - bookTitle
 *         - stock
 *         - author
 */

//#endregion


//#region Get operations
/**
* @swagger
* /v1/book-info:
*   get:
*     summary: Get all book info
*     description: Retrieve a list of all book info
*     tags: [BookInfo]
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
*         example: bookTitle
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
*               message: "Book info retrieved successfully"
*               bookInfo:
*                 - _id: "65b278161ca1b80b6680afac"
*                   bookTitle: "Book Title 1"
*                   author: "Author 1"
*                   publishedYear: 2022
*                   genre: "Fiction"
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookTitle: "Book Title 2"
*                   author: "Author 2"
*                   publishedYear: 2021
*                   genre: "Non-Fiction"
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
*               message: "Error while retrieving book info"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found"
*               error: "Book info not found or you do not have access to the data"
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
* /v1/book-info/{id}:
*   get:
*     summary: Get book info by ID
*     description: Retrieve book info by its ID.
*     tags: [BookInfo]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Info ID
*         schema:
*           type: string
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info retrieved successfully"
*               bookInfo:
*                 _id: "65b278161ca1b80b6680afac"
*                 bookTitle: "Book Title 1"
*                 author: "Author 1"
*                 publishedYear: 2022
*                 genre: "Fiction"
*                 createdAt: "2024-01-25T15:02:46.259Z"
*                 updatedAt: "2024-01-25T15:02:46.259Z"
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
*               message: "Error while retrieving the book info"
*               error: "Invalid type of MongoDB book info ID / Please provide a valid book info ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book info"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found with the provided book info ID"
*               error: "Book info not found by the provided ID (65b278161ca1b80b6680afac) or you do not have access to the data"
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
* /v1/book-info/by-ids:
*   post:
*     summary: Get book info by IDs
*     description: Get multiple book info entries by their IDs
*     tags: [BookInfo]
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
*         example: bookTitle
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
*             - "65b278161ca1b80b6680afac"
*             - "65b242c1d5eb7d24f88e34f9"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info entries retrieved successfully"
*               bookInfoEntries:
*                 - _id: "65b278161ca1b80b6680afac"
*                   bookTitle: "Book Title 1"
*                   author: "Author 1"
*                   publishedYear: 2022
*                   genre: "Fiction"
*                   createdAt: "2024-01-25T15:02:46.259Z"
*                   updatedAt: "2024-01-25T15:02:46.259Z"
*                   __v: 0
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookTitle: "Book Title 2"
*                   author: "Author 2"
*                   publishedYear: 2023
*                   genre: "Non-Fiction"
*                   createdAt: "2024-01-26T12:34:56.789Z"
*                   updatedAt: "2024-01-26T12:34:56.789Z"
*                   __v: 0
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
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       400:
*         description: "Bad Request"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / Invalid book info IDs"
*               error: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / All book info ids (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) are invalid, no book info found by the provided IDs"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info entries not found with the provided book info IDs"
*               error: "Book info entries not found by the provided IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
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
 * paths:
 *   /v1/book-info:
 *     post:
 *       summary: Create a new book information
 *       description: Create a new book information with the provided details.
 *       tags:
 *         - BookInfo
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 bookTitle:
 *                   type: string
 *                   description: The title of the book.
 *                   example: "Sample Book Title"
 *                 stock:
 *                   type: number
 *                   description: The stock quantity of the book.
 *                   default: 1
 *                   example: 10
 *                 bookCategoryId:
 *                   type: string
 *                   description: The category number of the book.
 *                   example: "65b242c1d5eb7d24f88e34f9"
 *                 author:
 *                   type: string
 *                   description: The name of the author.
 *                   example: "John Doe"
 *                 ISBN:
 *                   type: string
 *                   description: The ISBN of the book.
 *                   example: "1234567890"
 *                 publisher:
 *                   type: string
 *                   description: The publisher of the book.
 *                   example: "Sample publisher"
 *                 publishDate:
 *                   type: string
 *                   format: date
 *                   description: The publish date of the book.
 *                   example: "2024-01-28"
 *                 language:
 *                   type: string
 *                   description: The language of the book.
 *                   example: "English"
 *                 coverImage:
 *                   type: file
 *                   description: The book cover image file.
 *                   example: (upload the file)
 *                 note:
 *                   type: string
 *                   description: Additional notes about the book.
 *                   example: "This is a sample book"
 *               required:
 *                 - bookTitle
 *                 - stock
 *                 - bookCategoryId
 *                 - author
 *       responses:
 *         201:
 *           description: "Created"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "New book information created successfully"
 *                 createdBookInfo:
 *                   bookTitle: "Sample Book Title"
 *                   stock: 10
 *                   bookCategoryId: "65b242c1d5eb7d24f88e34f9"
 *                   author: "John Doe"
 *                   ISBN: "1234567890"
 *                   publisher: "Sample publisher"
 *                   publishDate: "2024-01-28"
 *                   language: "English"
 *                   coverImage: "https://example.com/covers/sample-book-cover.jpg"
 *                   note: "This is a sample book"
 *                   _id: "65b23453937af637d0cb130c"
 *                   createdAt: "2024-01-25T10:13:39.066Z"
 *                   updatedAt: "2024-01-25T10:13:39.066Z"
 *                   __v: 0
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
 *         400:
 *           description: "Bad Request"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Error while creating the book information"
 *                 error: "Invalid property: (given wrong properties) in the given bookInfo"
 *         500:
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "<Provide unhandled error>"
 */


/**
* @swagger
* /v1/book-info/bulk-create:
*   post:
*     summary: Bulk create book info entries
*     description: Create multiple book info entries in bulk.
*     tags: [BookInfo]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               $ref: '#/components/schemas/BookInfo'
*           example:
*             - bookTitle: "Book Title 2"
*               author: "Author 2"
*               publishedYear: 2022
*               genre: "Fiction"
*             - bookTitle: "Book Title 3"
*               author: "Author 3"
*               publishedYear: 2023
*               genre: "Non-Fiction"
*     responses:
*       201:
*         description: "Created"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info entries created successfully in bulk"
*               bookInfoEntries:
*                 - bookTitle: "Book Title 5"
*                   author: "Author 5"
*                   publishedYear: 2024
*                   genre: "Mystery"
*                   _id: "65b242c1d5eb7d24f88e34f9"
*                   __v: 0
*                   createdAt: "2024-01-25T11:15:13.983Z"
*                   updatedAt: "2024-01-25T11:15:13.983Z"
*                 - bookTitle: "Book Title 6"
*                   author: "Author 6"
*                   publishedYear: 2025
*                   genre: "Thriller"
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
*               message: "Invalid property: ([[\"bookTitle1\"]]) in one or more of the given book info entries"
*               error: "Invalid property: ([[\"bookTitle1\"]]) in one or more of the given book info entries"
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
* /v1/book-info/{id}:
*   put:
*     summary: Update book info by ID
*     description: Update book info details by its ID.
*     tags: [BookInfo]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Info ID
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/BookInfo'
*           example:
*             bookTitle: "Book Title 4 updated"
*             author: "Author 4 updated"
*             publishedYear: 2024
*             genre: "Updated Genre"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info updated successfully"
*               updatedBookInfo:
*                 _id: "65b27c68857b9142cd78d2b3"
*                 bookTitle: "Book Title 4 updated"
*                 author: "Author 4 updated"
*                 publishedYear: 2024
*                 genre: "Updated Genre"
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
*               message: "Error while retrieving the book info"
*               error: "Invalid type of MongoDB book info ID / Please provide a valid book info ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found with the provided ID"
*               error: "Book info not found by the provided ID (65b27c68857b9142cd78d2b3) or you do not have access to the data"
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
* /v1/book-info/bulk-update:
*   post:
*     summary: Bulk update book info
*     description: Update multiple book info entries in bulk.
*     tags: [BookInfo]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               $ref: '#/components/schemas/BookInfo'
*           example:
*             - _id: "65b242c1d5eb7d24f88e34f9"
*               bookTitle: "Book Title 5 updated"
*               author: "Author 5 updated"
*               publishedYear: 2025
*               genre: "Updated Genre 5"
*             - _id: "65b242c1d5eb7d24f88e34fa"
*               bookTitle: "Book Title 6 updated"
*               author: "Author 6 updated"
*               publishedYear: 2026
*               genre: "Updated Genre 6"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info entries updated successfully in bulk"
*               updatedBookInfo:
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookTitle: "Book Title 5 updated"
*                   author: "Author 5 updated"
*                   publishedYear: 2025
*                   genre: "Updated Genre 5"
*                   createdAt: "2024-01-25T11:15:13.983Z"
*                   updatedAt: "2024-01-25T11:15:13.983Z"
*                   __v: 0
*                 - _id: "65b242c1d5eb7d24f88e34fa"
*                   bookTitle: "Book Title 6 updated"
*                   author: "Author 6 updated"
*                   publishedYear: 2026
*                   genre: "Updated Genre 6"
*                   createdAt: "2024-01-25T11:15:13.984Z"
*                   updatedAt: "2024-01-25T11:15:13.984Z"
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
*               message: "Invalid property: ([[\"bookTitle1\"]]) in one or more of the given book info entries / Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"]"
*               error: "Invalid property: ([[\"bookTitle1\"]]) in one or more of the given book info entries / Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"]"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info entry not found with the provided IDs"
*               error: "Book info entry not found by the provided IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
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
* /v1/book-info/{id}:
*   delete:
*     summary: Delete book info by ID
*     description: Delete a book info entry by its ID.
*     tags: [BookInfo]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Book Info ID
*         schema:
*           type: string
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info deleted successfully"
*               bookInfo:
*                 _id: "65b2427bcb55566026bd4324"
*                 bookTitle: "Sample Book"
*                 author: "John Doe"
*                 publishedYear: 2020
*                 genre: "Fiction"
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
*               message: "Error while retrieving the book info"
*               error: "Invalid type of MongoDB book info ID / Please provide a valid book info ID"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found with the provided ID"
*               error: "Book info not found by the provided ID (65b278161ca1b80b6680afac) or you do not have access to the data"
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
* /v1/book-info/bulk-delete:
*   delete:
*     summary: Bulk delete book info entries
*     description: Delete multiple book info entries in bulk.
*     tags: [BookInfo]
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
*               message: "Book info entries deleted successfully"
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
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       400:
*         description: "Bad Request"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / Invalid book info IDs"
*               error: "Duplicate ID found: [\"65b242c1d5eb7d24f88e34f9\"] / All book info ids (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) are invalid, no book info found by the provided IDs"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found with the provided IDs"
*               error: "Book info not found with the provided IDs (65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa) or you do not have access to the data"
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
* /v1/book-info/search:
*   post:
*     summary: Search book info entries
*     description: Search for book info entries based on specific criteria.
*     tags: [BookInfo]
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
*         example: bookTitle
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
*               bookTitle:
*                 type: string
*                 description: The title of the book.
*               author:
*                 type: string
*                 description: The author of the book.
*               publicationYear:
*                 type: number
*                 description: The publication year of the book.
*               genre:
*                 type: string
*                 description: The genre of the book.
*             example:
*               bookTitle: "Sample Book"
*               author: "John Doe"
*               publicationYear: 2022
*               genre: "Fiction"
*     responses:
*       200:
*         description: "OK"
*         content:
*           application/json:
*             example:
*               success: true
*               message: "Book info entries retrieved successfully based on the search criteria"
*               bookInfoEntries:
*                 - _id: "65b242c1d5eb7d24f88e34f9"
*                   bookTitle: "Sample Book 1"
*                   author: "John Doe"
*                   publicationYear: 2022
*                   genre: "Fiction"
*                 - _id: "65b242c1d5eb7d24f88e34fa"
*                   bookTitle: "Sample Book 2"
*                   author: "Jane Doe"
*                   publicationYear: 2022
*                   genre: "Non-Fiction"
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
*               message: "Invalid property: [\"bookTitle1\"] in one or more of the given book info"
*               error: "Invalid property: [\"bookTitle1\"] in one or more of the given book info"
*       403:
*         description: "Forbidden"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Error while retrieving book info entries"
*               error: "You are not authorized to access this operation"
*       404:
*         description: "Not Found"
*         content:
*           application/json:
*             example:
*               success: false
*               message: "Book info not found"
*               error: "Book info not found with the provided search criteria or you do not have access to the data"
*       500:
*         description: Internal Server Error
*         content:
*           application/json:
*             example:
*               success: false
*               message: "<Provide unhandled error>"
*/

//#endregion