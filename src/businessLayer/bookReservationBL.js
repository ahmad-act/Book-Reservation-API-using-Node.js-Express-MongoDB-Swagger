const bookReservationModel = require("../models/bookReservationModel");
const reservationDetailModel = require("../models/reservationDetailModel");
const bookReservationDL = require("../dataAccessLayer/bookReservationDL");
const userAccessibilityOperation = require("../lib/userAccessibilityOperation");
const idAndPropertyValidationUtil = require("../lib/idAndPropertyValidationUtil");
const userBL = require('../businessLayer/userBL');
const { generateReferenceNumber } = require('../lib/commonUtil');

//---------------------- Get methods ----------------------\\
exports.getBookReservations = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookReservations()");
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    const { bookReservations: existingBookReservations, totalBookReservation } = await bookReservationDL.getBookReservations({ reservationAccessLevel: roleFilter }, pagingQuery);

    // Check if book reservations are null or undefined
    if (!existingBookReservations || existingBookReservations.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book reservation not found";
        error.error = "Book reservation not found or you do not have access to the data";
        throw error;
    }

    return existingBookReservations;
};

exports.getBookReservationById = async (authUser, bookReservationId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookReservationById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookReservationId, "book reservation");

    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    const { bookReservations: existingBookReservations, totalBookReservation } = await bookReservationDL.getBookReservations({ reservationAccessLevel: roleFilter, _id: bookReservationId });

    if (!existingBookReservations || existingBookReservations.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book reservation not found with the provided book reservation ID";
        error.error = `Book reservation not found by the provided ID (${bookReservationId}) or you do not have access to the data`;
        throw error;
    }

    return existingBookReservations;
};


// ---------------------- Create methods ----------------------\\
exports.createBookReservation = async (authUser, newBookReservation, pagingQuery) => {

    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookReservation()");

    // Property validation
    // Master property validation
    idAndPropertyValidationUtil.checkWrongProperty(newBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails", "user"]);
    // Detail property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookReservation.reservationDetails, reservationDetailModel.schema.paths, "reservation detail", []);

    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookReservation, "book reservation");
    // Check if reservation details are provided
    if (!newBookReservation.reservationDetails) {
        const error = new Error();
        error.status = 400;
        error.message = "Reservation details are required";
        error.error = "Reservation details are required";
        throw error;
    }

    // Generate reference number if not provided
    newBookReservation.reservationRef || (newBookReservation.reservationRef = generateReferenceNumber());

    // Set reservation date if not provided
    newBookReservation.reservationDate || (newBookReservation.reservationDate = new Date());

    // Check if user already exists by email
    // if exists, get the user ID and update the user
    // if not exists, create a new user and get the user ID

    const userData = {
        name: newBookReservation.user.customerName,
        email: newBookReservation.user.customerEmail,
        mobile: newBookReservation.user.customerPhone,
        address: [
            {
                street: newBookReservation.user.address.street,
                postalCode: newBookReservation.user.address.postalCode,
                city: newBookReservation.user.address.city,
                state: newBookReservation.user.address.state,
                country: newBookReservation.user.address.country
            }
        ]
    };

    const user = await userBL.getAndUpdateOrCreateUserBasedOnEmail(authUser, userData);
    // Set user ID to new book reservation who brow the book
    newBookReservation.userId = user._id;

    // Create new book reservation and get book reservation ID
    let createdBookReservation = await bookReservationDL.createBookReservation(newBookReservation, pagingQuery);
    if (!createdBookReservation) {
        const error = new Error();
        error.status = 400;
        error.message = "Book reservation not created";
        error.error = "Book reservation not created";
        throw error;
    }

    newBookReservation._id = createdBookReservation._id;

    // Create detail data and associate it with the book reservation

    const reservationDetails = newBookReservation.reservationDetails.map(detail => ({
        ...detail,
        bookReservationId: createdBookReservation._id, // Assign book reservation ID to each detail
    }));

    // Insert details data into details table
    const savedDetails = await reservationDetailModel.insertMany(reservationDetails);

    newBookReservation.reservationDetails = savedDetails;

    return newBookReservation;
};


// ---------------------- Update methods ----------------------\\
exports.updateBookReservationById = async (authUser, bookReservationId, updatableBookReservation) => {
    const thisOperationAccessibilityLevel = 2;

    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookReservationById()");
    idAndPropertyValidationUtil.checkWrongProperty(updatableBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails"]);

    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    const { bookReservations: existingBookReservations, totalBookReservation } = await bookReservationDL.getBookReservations({ reservationAccessLevel: roleFilter, _id: bookReservationId });

    if (!existingBookReservations || existingBookReservations.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book reservation not found with the provided book reservation ID";
        error.error = `Book reservation not found by the provided ID (${bookReservationId}) or you do not have access to the data`;
        throw error;
    }

    return await bookReservationDL.updateBookReservationById(bookReservationId, updatableBookReservation);
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookReservationById = async (authUser, bookReservationId) => {
    const thisOperationAccessibilityLevel = 2;

    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookReservationById()");

    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    const { bookReservations: existingBookReservations, totalBookReservation } = await bookReservationDL.getBookReservations({ reservationAccessLevel: roleFilter, _id: bookReservationId });

    if (!existingBookReservations || existingBookReservations.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book reservation not found with the provided book reservation ID";
        error.error = `Book reservation not found by the provided ID (${bookReservationId}) or you do not have access to the data`;
        throw error;
    }

    return await bookReservationDL.deleteBookReservationById(existingBookReservations[0]._id);
};


// ---------------------- Search methods ----------------------\\
exports.searchBookReservation = async (authUser, searchTermsForBookReservation, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 10 for all


    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookReservation()");
    idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails"]);

    const searchBookReservationFilter = await bookReservationModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookReservation);

    const { bookReservations: existingBookReservations, totalBookReservation } = await bookReservationDL.getBookReservations(searchBookReservationFilter, pagingQuery);

    // Check if book reservations are null or undefined
    if (!existingBookReservations || existingBookReservations.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book reservation not found";
        error.error = "Book reservation not found with the provided search criteria or you do not have access to the data";
        throw error;
    }

    return existingBookReservations;
};



// ---------------------- Extra methods ----------------------\\
exports.getAvailableBook = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 2;

    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookInfo.bookTitle',
        sortOrder: 1
    };

    const applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    //const sortedQuery = {};
    //sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    return await reservationDetailModel.aggregate([
        {
            $lookup: {
                from: "bookreservations",
                localField: "bookReservationId",
                foreignField: "_id",
                as: "bookReservation",
            },
        },
        {
            $unwind: "$bookReservation",
        },
        {
            $match: {
                "bookReservation.reservationStatusNum": 1,
            },
        },
        {
            $group: {
                _id: "$bookInfoId",
                totalReserved: { $sum: "$quantity" },
            },
        },
        {
            $lookup: {
                from: "bookinfos",
                localField: "_id",
                foreignField: "_id",
                as: "bookInfo",
            },
        },
        {
            $unwind: "$bookInfo",
        },
        {
            $lookup: {
                from: "bookcategories",
                localField: "bookInfo.bookCategoryId",
                foreignField: "_id",
                as: "bookCategory",
            },
        },
        {
            $unwind: {
                path: "$bookCategory",
                preserveNullAndEmptyArrays: true, // Preserve documents that don't have a matching category
            },
        },
        {
            $project: {
                totalReserved: 1,
                bookInfoId: 1,
                "bookInfo.bookTitle": 1,
                "bookInfo.stock": 1,
                "bookInfo.bookCategoryId": 1,
                "bookInfo.author": 1,
                "bookInfo.ISBN": 1,
                "bookInfo.publisher": 1,
                "bookInfo.publishDate": 1,
                "bookInfo.language": 1,
                "bookInfo.coverImage": 1,
                "bookInfo.note": 1,
                "bookCategory.bookCategoryName": 1, // Include the category data in the projection
                remainingStock: {
                    $subtract: [
                        "$bookInfo.stock",
                        "$totalReserved",
                    ],
                },
            },
        },
        {
            $match: {
                remainingStock: { $gt: 0 }, // Filter where remainingStock is greater than 0
            },
        },
        {
            $sort: {
                [defaultPagingQuery.sortBy]: applyPagingQuery.sortOrder === 'desc' ? -1 : 1, // 1 for ascending order, -1 for descending order
            },
        },
        {
            $skip: startIndex,
        },
        {
            $limit: applyPagingQuery.pageSize,
        },
    ])







    // ///////////
    // [
    //     {
    //         $lookup: {
    //             from: "bookreservations",
    //             localField: "bookReservationId",
    //             foreignField: "_id",
    //             as: "bookReservation",
    //         },
    //     },
    //     {
    //         $unwind: "$bookReservation",
    //     },
    //     {
    //         $match: {
    //             "bookReservation.reservationStatusNum": 1,
    //         },
    //     },
    //     {
    //         $group: {
    //             _id: "$bookInfoId",
    //             totalQuantity: { $sum: "$quantity" },
    //         },
    //     },
    //     {
    //         $lookup: {
    //             from: "bookinfos",
    //             localField: "_id",
    //             foreignField: "_id",
    //             as: "bookInfo",
    //         },
    //     },
    //     {
    //         $unwind: "$bookInfo",
    //     },
    //     {
    //         $project: {
    //             quantity: 1,
    //             bookInfoId: 1,
    //             "bookInfo.bookTitle": 1,
    //             "bookInfo.stock": 1,
    //             "bookInfo.bookCategoryId": 1,
    //             "bookInfo.author": 1,
    //             "bookInfo.ISBN": 1,
    //             "bookInfo.publisher": 1,
    //             "bookInfo.publishDate": 1,
    //             "bookInfo.language": 1,
    //             "bookInfo.coverImage": 1,
    //             "bookInfo.note": 1,
    //             remainingStock: {
    //                 $subtract: [
    //                     "$bookInfo.stock",
    //                     "$totalQuantity",
    //                 ],
    //             },
    //         },
    //     },
    //     {
    //         $match: {
    //             remainingStock: { $gt: 0 }, // Filter where remainingStock is greater than 0
    //         },
    //     },
    //     {
    //         $sort: {
    //             [defaultPagingQuery.sortBy]: applyPagingQuery.sortOrder, // 1 for ascending order, -1 for descending order
    //         },
    //     },
    //     {
    //         $skip: startIndex,
    //     },
    //     {
    //         $limit: applyPagingQuery.pageSize,
    //     },
    // ]
    // ////////
    // .then((reservationDetails) => {
    //     return reservationDetails;
    // })
    // .catch((err) => {
    //     return err;
    // });


    // Get all books

    // Get all reserved books with quantity from reservation details where book reservation status is reserved

    //Group by book ID, and sum quantity of each book

    // Available book = book quantity  - reserved book quantity
    // Available book > 0 then the book is available book

    // Check 

};

exports.getReservedBook = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 2;

    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookInfo.bookTitle',
        sortOrder: 1
    };

    const applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    //const sortedQuery = {};
    //sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    return await reservationDetailModel.aggregate([
        {
            $lookup: {
                from: "bookreservations",
                localField: "bookReservationId",
                foreignField: "_id",
                as: "bookReservation",
            },
        },
        {
            $unwind: "$bookReservation",
        },
        {
            $match: {
                "bookReservation.reservationStatusNum": 1,
            },
        },
        {
            $group: {
                _id: "$bookInfoId",
                totalReserved: { $sum: "$quantity" },
            },
        },
        {
            $lookup: {
                from: "bookinfos",
                localField: "_id",
                foreignField: "_id",
                as: "bookInfo",
            },
        },
        {
            $unwind: "$bookInfo",
        },
        {
            $lookup: {
                from: "bookcategories",
                localField: "bookInfo.bookCategoryId",
                foreignField: "_id",
                as: "bookCategory",
            },
        },
        {
            $unwind: {
                path: "$bookCategory",
                preserveNullAndEmptyArrays: true, // Preserve documents that don't have a matching category
            },
        },
        {
            $project: {
                totalReserved: 1,
                bookInfoId: 1,
                "bookInfo.bookTitle": 1,
                "bookInfo.stock": 1,
                "bookInfo.bookCategoryId": 1,
                "bookInfo.author": 1,
                "bookInfo.ISBN": 1,
                "bookInfo.publisher": 1,
                "bookInfo.publishDate": 1,
                "bookInfo.language": 1,
                "bookInfo.coverImage": 1,
                "bookInfo.note": 1,
                "bookCategory.bookCategoryName": 1, // Include the category data in the projection
                remainingStock: {
                    $subtract: [
                        "$bookInfo.stock",
                        "$totalReserved",
                    ],
                },
            },
        },
        {
            $match: {
                remainingStock: { $eq: 0 }, // Filter where remainingStock is greater than 0
            },
        },
        {
            $sort: {
                [defaultPagingQuery.sortBy]: applyPagingQuery.sortOrder === 'desc' ? -1 : 1, // 1 for ascending order, -1 for descending order
            },
        },
        {
            $skip: startIndex,
        },
        {
            $limit: applyPagingQuery.pageSize,
        },
    ])
};

