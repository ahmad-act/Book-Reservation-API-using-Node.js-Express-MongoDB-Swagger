const bookReservationModel = require('../models/bookReservationModel');
const reservationDetailModel = require('../models/reservationDetailModel');

//---------------------- Get methods ----------------------\\
exports.getBookReservations = async (searchBookReservation, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookReservationName',
        sortOrder: 1
    };

    const applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    try {
        const [bookReservations, totalBookReservation] = await Promise.all([
            bookReservationModel.find(searchBookReservation)
                .sort(sortedQuery)
                .skip(startIndex)
                .limit(applyPagingQuery.pageSize),
            bookReservationModel.countDocuments()
        ]);

        // Populate details for each book reservation
        const bookReservationsWithDetails = await Promise.all(bookReservations.map(async (bookReservation) => {
            const details = await reservationDetailModel.find({ bookReservationId: bookReservation._id });
            return {
                ...bookReservation.toObject(),
                detailTable: details.map(detail => detail.toObject())
            };
        }));

        return { bookReservations: bookReservationsWithDetails, totalBookReservation };
    } catch (error) {
        // Handle errors
        console.error('Error retrieving book reservations:', error);
        throw error;
    }
};


// ---------------------- Create methods ----------------------\\
exports.createBookReservation = async (bookReservation) => {
    const newBookReservation = new bookReservationModel(bookReservation);
    return await newBookReservation.save();

    // try {
    //     // User part
    //     // Get user by email and update and use that id


    //     // Create new if email not exist
    //     // // Detail part
    //     // if (bookReservation.reservationDetails && bookReservation.reservationDetails.length > 0) {

    //     //     const reservationDetails = bookReservation.reservationDetails.map(detail => ({
    //     //         ...detail,
    //     //         bookReservationId: savedBookReservation._id, // Assign book reservation ID to each detail
    //     //     }));

    //     //     // Insert details data into details table
    //     //     const savedDetails = await reservationDetailModel.insertMany(reservationDetails);

    //     //     // Associate the details with the book reservation
    //     //     savedBookReservation.detailTable = savedDetails.map(detail => detail._id);
    //     //     await savedBookReservation.save();
    //     // }

    //     // return savedBookReservation;
    // } catch (error) {
    //     await bookReservationModel.findByIdAndDelete(savedBookReservation._id);

    //     const condition = { bookReservationId: { $eq: savedBookReservation._id } };

    //     const bulkOperations = [
    //         {
    //             deleteMany: {
    //                 filter: condition,
    //             },
    //         },
    //     ];

    //     await reservationDetailModel.bulkWrite(bulkOperations);
    //     throw error;
    // }
};

// ---------------------- Update methods ----------------------\\
exports.updateBookReservationById = async (bookReservationId, updatedBookReservation) => {
    // Update book reservation
    const updatedMaster = await bookReservationModel.findByIdAndUpdate(
        bookReservationId,
        updatedBookReservation,
        { new: true }
    );

    // Update details tables
    if (updatedMaster && updatedBookReservation.detailTable && updatedBookReservation.detailTable.length > 0) {

        const updateDetailsPromises = updatedBookReservation.detailTable.map(async (detail) => {
            return await reservationDetailModel.findByIdAndUpdate(
                detail._id,
                {
                    detailTableName: detail.detailTableName,
                    detailTableAccessLevel: detail.detailTableAccessLevel,
                    detailTableDescription: detail.detailTableDescription,
                },
                { new: true }
            );
        });

        await Promise.all(updateDetailsPromises);
    }

    return updatedMaster;
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookReservationById = async (bookReservationId) => {
    const deletedBookReservation = await bookReservationModel.findByIdAndDelete(bookReservationId);

    if (deletedBookReservation) {
        await reservationDetailModel.deleteMany({ bookReservationId });
    }

    return deletedBookReservation;
};


// ---------------------- Extra methods ----------------------\\
exports.getAvailableBook = async (pipeline, pagingQuery) => {


    reservationDetailModel.aggregate(pipeline)
};


exports.getReservedBook = async (pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookReservationName',
        sortOrder: 1
    };

    const applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;


};