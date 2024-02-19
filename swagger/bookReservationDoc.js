/**
 * @swagger
 * tags:
 *   name: BookReservation
 *   description: API operations for managing book reservations
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     BookReservation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the book reservation.
 *         reservationRef:
 *           type: string
 *           description: The name of the book reservation.
 *         userId:
 *           type: string
 *           description: The unique identifier of the user who made the reservation.
 *         reservationStatusNum:
 *           type: number
 *           description: Reservation status number (1 for reserved, 2 for returned, 3 for canceled).
 *         reservationDate:
 *           type: string
 *           format: date-time
 *           description: Date of the reservation.
 *         reservationAccessLevel:
 *           type: number
 *           description: Access level associated with the book reservation.
 *         reservationComment:
 *           type: string
 *           description: Additional comments or notes related to the reservation.
 *         reservationDetails:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/DetailTable'
 *       required:
 *         - reservationRef
 *         - reservationDetails
 */



/**
 * @swagger
 * paths:
 *   /v1/book-reservation:
 *     get:
 *       summary: Get book reservations
 *       description: Retrieve a list of book reservations.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *           description: Page number for pagination
 *           example: 1
 *         - in: query
 *           name: pageSize
 *           schema:
 *             type: integer
 *           description: Number of items per page
 *           example: 100
 *         - in: query
 *           name: sortBy
 *           schema:
 *             type: string
 *           description: Property to sort by
 *           example: reservationRef
 *         - in: query
 *           name: sortOrder
 *           schema:
 *             type: string
 *           description: Sort order ('asc' or 'desc')
 *           example: asc
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservations retrieved successfully"
 *                 bookReservations:
 *                   - reservationRef: "reservationRef1"
 *                     userId: "65b23453937af637d0cb130d"  # Replace with actual User ID
 *                     reservationStatusNum: 1
 *                     reservationDate: "2024-01-28T12:00:00.000Z"
 *                     reservationAccessLevel: 1
 *                     reservationComment: "This is a sample reservation comment"
 *                     _id: "65b23453937af637d0cb130c"
 *                     createdAt: "2024-01-25T10:13:39.066Z"
 *                     updatedAt: "2024-01-25T10:13:39.066Z"
 *                     __v: 0
 *                     reservationDetails:
 *                       - reservationDetailsName: "reservationDetails1"
 *                         reservationDetailsAccessLevel: 5
 *                         reservationDetailsDescription: "Detail Table 1"
 *                       - reservationDetailsName: "reservationDetails2"              
 *                         reservationDetailsAccessLevel: 10
 *                         reservationDetailsDescription: "Detail Table 2"
 *                   - reservationRef: "reservationRef2"
 *                     userId: "65b23453937af637d0cb130e"  # Replace with actual User ID
 *                     reservationStatusNum: 2
 *                     reservationDate: "2024-01-26T12:30:45.123Z"
 *                     reservationAccessLevel: 2
 *                     reservationComment: "This is another sample reservation comment"
 *                     _id: "65b23453937af637d0cb130d"
 *                     createdAt: "2024-01-26T12:30:45.123Z"
 *                     updatedAt: "2024-01-26T12:30:45.123Z"
 *                     __v: 0
 *                     reservationDetails:
 *                       - reservationDetailsName: "reservationDetails3"
 *                         reservationDetailsAccessLevel: 8
 *                         reservationDetailsDescription: "Detail Table 3"
 *                       - reservationDetailsName: "reservationDetails4"              
 *                         reservationDetailsAccessLevel: 12
 *                         reservationDetailsDescription: "Detail Table 4"
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
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
 * paths:
 *   /v1/book-reservation/{id}:
 *     get:
 *       summary: Get book reservation by ID
 *       description: Retrieve a book reservation by its ID.
 *       tags: [BookReservation]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Book Reservation ID
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservation retrieved successfully"
 *                 bookReservation:
 *                   _id: "65b23453937af637d0cb130c"
 *                   reservationRef: "reservationRef1"
 *                   userId: "65b23453937af637d0cb130d"  # Replace with actual User ID
 *                   reservationStatusNum: 1
 *                   reservationDate: "2024-01-28T12:00:00.000Z"
 *                   reservationAccessLevel: 1
 *                   reservationComment: "This is a sample reservation comment"
 *                   createdAt: "2024-01-25T10:13:39.066Z"
 *                   updatedAt: "2024-01-25T10:13:39.066Z"
 *                   __v: 0
 *                   reservationDetails:
 *                     - reservationDetailsName: "reservationDetails1"
 *                       reservationDetailsAccessLevel: 5
 *                       reservationDetailsDescription: "Detail Table 1"
 *                     - reservationDetailsName: "reservationDetails2"              
 *                       reservationDetailsAccessLevel: 10
 *                       reservationDetailsDescription: "Detail Table 2"
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
 *                 message: "Error while retrieving the book reservation"
 *                 error: "Invalid type of MongoDB book reservation ID / Please provide a valid book reservation ID"
 *         403:
 *           description: "Forbidden"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Error while retrieving book reservations"
 *                 error: "You are not authorized to access this operation"
 *         404:
 *           description: "Not Found"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Book reservation not found with the provided book reservation ID"
 *                 error: "Book reservation not found by the provided ID (65b23453937af637d0cb130c) or you do not have access to the data"
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
 * paths:
 *   /v1/book-reservation:
 *     post:
 *       summary: Create a new book reservation
 *       description: Create a new book reservation with the provided details.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookReservation'
 *             example:
 *               user:
 *                 customerName: "John Doe"
 *                 customerEmail: "john.doe@example.com"
 *                 customerPhone: "+1234567890"
 *                 address:
 *                   street: "123 Main Street"
 *                   postalCode: "12345"
 *                   city: "Cityville"
 *                   state: "Stateville"
 *                   country: "Countryville"
 *               reservationRef: "RES-20240128001"
 *               reservationStatusNum: 1
 *               reservationDate: ""
 *               reservationAccessLevel: 1
 *               reservationComment: "This is a sample reservation comment."
 *               reservationDetails:
 *                 - bookInfoId: "65b23453937af637d0cb130d"
 *                   quantity: 2
 *                 - bookInfoId: "65b23453937af637d0cb130e"
 *                   quantity: 1
 *       responses:
 *         201:
 *           description: "Created"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "New book reservation created successfully"
 *                 createdBookReservation:
 *                   user:
 *                     customerName: "John Doe"
 *                     customerEmail: "john.doe@example.com"
 *                     customerPhone: "+1234567890"
 *                     address:
 *                       street: "123 Main Street"
 *                       postalCode: "12345"
 *                       city: "Cityville"
 *                       state: "Stateville"
 *                       country: "Countryville"
 *                   reservationRef: "RES-20240128001"
 *                   reservationStatusNum: 1
 *                   reservationDate: "2024-01-30T19:47:27.499Z"
 *                   reservationAccessLevel: 1
 *                   reservationComment: "This is a sample reservation comment."
 *                   reservationDetails:
 *                     - bookReservationId: "65b9524f1d5198667c5ecc5b"
 *                       bookInfoId: "65b23453937af637d0cb130d"
 *                       quantity: 2
 *                       _id: "65b9524f1d5198667c5ecc5d"
 *                       __v: 0
 *                     - bookReservationId: "65b9524f1d5198667c5ecc5b"
 *                       bookInfoId: "65b23453937af637d0cb130e"
 *                       quantity: 1
 *                       _id: "65b9524f1d5198667c5ecc5e"
 *                       __v: 0
 *                   userId: "65b7e76ef0b8f48d2fe8c6ad"
 *                   _id: "65b9524f1d5198667c5ecc5b"
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
 *                 message: "Error while creating the book reservation"
 *                 error: "Invalid property: (given wrong properties) in the given bookReservation"
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
 * paths:
 *   /v1/book-reservation/{id}:
 *     put:
 *       summary: Update a book reservation
 *       description: Update the details of a book reservation based on the provided ID.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the book reservation to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookReservation'
 *             example:
 *               reservationRef: "updatedBookReservation"
 *               userId: "65b23453937af637d0cb130d"  # Replace with actual User ID
 *               reservationStatusNum: 1
 *               reservationDate: "2024-01-28T12:00:00.000Z"
 *               reservationAccessLevel: 2
 *               reservationComment: "Updated reservation comment"
 *               reservationDetails:
 *                 - _id: "65b23453937af637d0cb130e"  # Detail Table ID for update
 *                   reservationDetailsName: "updatedDetailTable1"
 *                   reservationDetailsAccessLevel: 7
 *                   reservationDetailsDescription: "Updated Detail Table 1"
 *                 - _id: "65b23453937af637d0cb130f"  # Detail Table ID for update
 *                   reservationDetailsName: "updatedDetailTable2"
 *                   reservationDetailsAccessLevel: 12
 *                   reservationDetailsDescription: "Updated Detail Table 2"
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservation updated successfully"
 *                 updatedBookReservation:
 *                   reservationRef: "updatedBookReservation"
 *                   userId: "65b23453937af637d0cb130d"
 *                   reservationStatusNum: 1
 *                   reservationDate: "2024-01-28T12:00:00.000Z"
 *                   reservationAccessLevel: 2
 *                   reservationComment: "Updated reservation comment"
 *                   _id: "65b23453937af637d0cb130c"
 *                   createdAt: "2024-01-25T10:13:39.066Z"
 *                   updatedAt: "2024-01-27T15:45:20.123Z"
 *                   __v: 0
 *                   reservationDetails:
 *                     - _id: "65b23453937af637d0cb130e"  # Updated Detail Table ID
 *                       reservationDetailsName: "updatedDetailTable1"
 *                       reservationDetailsAccessLevel: 7
 *                       reservationDetailsDescription: "Updated Detail Table 1"
 *                     - _id: "65b23453937af637d0cb130f"  # Updated Detail Table ID
 *                       reservationDetailsName: "updatedDetailTable2"              
 *                       reservationDetailsAccessLevel: 12
 *                       reservationDetailsDescription: "Updated Detail Table 2"
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
 *         404:
 *           description: "Not Found"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Book reservation not found"
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
 * paths:
 *   /v1/book-reservation/{id}:
 *     delete:
 *       summary: Delete a book reservation
 *       description: Delete a book reservation and its associated details based on the provided ID.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the book reservation to delete.
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservation and associated details deleted successfully"
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
 *         404:
 *           description: "Not Found"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Book reservation not found"
 *         500:
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Internal server error occurred during book reservation deletion"
 */







/**
 * @swagger
 * paths:
 *   /v1/book-reservation/search:
 *     post:
 *       summary: Search book reservations
 *       description: Search for book reservations based on specific criteria.
 *       tags: [BookReservation]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *           description: Page number for pagination
 *           example: 1
 *         - in: query
 *           name: pageSize
 *           schema:
 *             type: integer
 *           description: Number of items per page
 *           example: 100
 *         - in: query
 *           name: sortBy
 *           schema:
 *             type: string
 *           description: Property to sort by
 *           example: reservationRef
 *         - in: query
 *           name: sortOrder
 *           schema:
 *             type: string
 *           description: Sort order ('asc' or 'desc')
 *           example: asc
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservationRef:
 *                   type: string
 *                   description: The name of the book reservation.
 *                 reservationAccessLevel:
 *                   type: number
 *                   description: Access level associated with the book reservation.
 *                 reservationStatusNum:
 *                   type: number
 *                   description: Status number of the book reservation (1 for reserved, 2 for returned, 3 for canceled).
 *                 reservationDate:
 *                   type: string
 *                   format: date-time
 *                   description: Date of the book reservation.
 *                 reservationComment:
 *                   type: string
 *                   description: Comment associated with the book reservation.
 *               example:
 *                 reservationRef: "reservationRef"
 *                 reservationAccessLevel: 5
 *                 reservationStatusNum: 1
 *                 reservationDate: "2024-01-28"
 *                 reservationComment: "This is a comment."
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservations retrieved successfully based on the search criteria"
 *                 bookReservations:
 *                   - _id: "65b23453937af637d0cb130c"
 *                     reservationRef: "reservationRef1"
 *                     reservationAccessLevel: 1
 *                     createdAt: "2024-01-25T10:13:39.066Z"
 *                     updatedAt: "2024-01-25T10:13:39.066Z"
 *                     __v: 0
 *                     reservationDetails:
 *                       - reservationDetailsName: "reservationDetails1"
 *                         reservationDetailsAccessLevel: 5
 *                         reservationDetailsDescription: "Detail Table 1"
 *                       - reservationDetailsName: "reservationDetails2"              
 *                         reservationDetailsAccessLevel: 10
 *                         reservationDetailsDescription: "Detail Table 2"
 *                   - _id: "65b23453937af637d0cb130d"
 *                     reservationRef: "reservationRef2"
 *                     reservationAccessLevel: 2
 *                     createdAt: "2024-01-26T12:30:45.123Z"
 *                     updatedAt: "2024-01-26T12:30:45.123Z"
 *                     __v: 0
 *                     reservationDetails:
 *                       - reservationDetailsName: "reservationDetails3"
 *                         reservationDetailsAccessLevel: 8
 *                         reservationDetailsDescription: "Detail Table 3"
 *                       - reservationDetailsName: "reservationDetails4"              
 *                         reservationDetailsAccessLevel: 12
 *                         reservationDetailsDescription: "Detail Table 4"
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
 *                 message: "Invalid property: [\"reservationRef1\"] in one or more of the given book reservation"
 *                 error: "Invalid property: [\"reservationRef1\"] in one or more of the given book reservation"
 *         403:
 *           description: "Forbidden"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Error while retrieving book reservations"
 *                 error: "You are not authorized to access this operation"
 *         404:
 *           description: "Not Found"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Book reservation not found"
 *                 error: "Book reservation not found with the provided search criteria or you do not have access to the data"
 *         500:
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Internal server error occurred during book reservation search"
 */



/**
 * @swagger
 * paths:
 *   /v1/book-reservation/available-book:
 *     get:
 *       summary: Get available books
 *       description: Retrieve a list of available books.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *           description: Page number for pagination
 *           example: 1
 *         - in: query
 *           name: pageSize
 *           schema:
 *             type: integer
 *           description: Number of items per page
 *           example: 100
 *         - in: query
 *           name: sortBy
 *           schema:
 *             type: string
 *           description: Property to sort by
 *           example: bookInfo.bookTitle
 *         - in: query
 *           name: sortOrder
 *           schema:
 *             type: string
 *           description: Sort order ('asc' or 'desc')
 *           example: asc
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Book reservations retrieved successfully based on the search criteria"
 *                 availableBooks:
 *                   - _id: "65b9f9ca6b378f33f89e7d59"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 2"
 *                       stock: 2
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     remainingStock: 1
 *                   - _id: "65b9f9d36b378f33f89e7d5d"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 3"
 *                       stock: 3
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     remainingStock: 2
 *                   - _id: "65b9f9f36b378f33f89e7d61"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 4"
 *                       stock: 4
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     remainingStock: 3
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
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
 * paths:
 *   /v1/book-reservation/reserved-book:
 *     get:
 *       summary: Get reserved books
 *       description: Retrieve a list of reserved books.
 *       tags:
 *         - BookReservation
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *           description: Page number for pagination
 *           example: 1
 *         - in: query
 *           name: pageSize
 *           schema:
 *             type: integer
 *           description: Number of items per page
 *           example: 100
 *         - in: query
 *           name: sortBy
 *           schema:
 *             type: string
 *           description: Property to sort by
 *           example: bookInfo.bookTitle
 *         - in: query
 *           name: sortOrder
 *           schema:
 *             type: string
 *           description: Sort order ('asc' or 'desc')
 *           example: asc
 *       responses:
 *         200:
 *           description: "OK"
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Reserved books retrieved successfully based on the search criteria"
 *                 reservedBooks:
 *                   - _id: "65b9f9ca6b378f33f89e7d59"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 2"
 *                       stock: 2
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     reservedQuantity: 1
 *                   - _id: "65b9f9d36b378f33f89e7d5d"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 3"
 *                       stock: 3
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     reservedQuantity: 2
 *                   - _id: "65b9f9f36b378f33f89e7d61"
 *                     bookInfo:
 *                       bookTitle: "Sample Book Title 4"
 *                       stock: 4
 *                       bookCategoryId: "65ba4fb2596ef438434fa23c"
 *                       author: "John Doe"
 *                       ISBN: "1234567890"
 *                       publisher: "Sample publisher"
 *                       publishDate: "2024-01-28T00:00:00.000Z"
 *                       language: "English"
 *                       coverImage: ""
 *                       note: "This is a sample book"
 *                     bookCategory:
 *                       bookCategoryName: "Undefined"
 *                     reservedQuantity: 3
 *         401:
 *           description: "Unauthorized"
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "You are not authorized"
 *                 error: "Token not found / You are not authorized to access this application"
 *         500:
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "<Provide unhandled error>"
 */
