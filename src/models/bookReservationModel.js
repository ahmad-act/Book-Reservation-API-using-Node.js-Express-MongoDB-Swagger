const mongoose = require("mongoose");
const moment = require('moment');

//schema
const bookReservationSchema = new mongoose.Schema(
    {
        reservationRef: {
            type: String,
            required: [true, "Book reservation reference is required"],
            unique: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: [true, "User ID is required"],
        },
        reservationStatusNum: {
            type: Number,
            required: [true, "Reservation status number is required"],
            enum: [1, 2, 3], // 1 for reserved, 2 for returned, 3 for canceled
            default: 1,
        },
        reservationDate: {
            type: Date,
            required: [true, "Reservation date is required"],
            default: Date.now(),
        },
        reservationAccessLevel: {
            type: Number,
            default: 10,
        },
        reservationComment: {
            type: String,
        },
    },
    { timestamps: true }
);


// Common methods
// Function to check if a value is an object and contains specific properties
const isAllPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book reservation is not valid';
        error.error = 'The book reservation is null or undefined';
        throw error;
    }

    // Check for specific properties including _id
    if (
        '_id' in value &&
        'reservationRef' in value &&
        'userId' in value &&
        'reservationStatusNum' in value &&
        'reservationDate' in value &&
        'reservationAccessLevel' in value &&
        'reservationComment' in value
    ) {
        // Check the types of properties
        if (
            typeof value._id === 'string' &&  // Assuming _id is a string, modify if it's a different type
            typeof value.reservationRef === 'string' &&
            typeof value.userId === 'string' &&
            typeof value.reservationStatusNum === 'number' &&
            typeof value.reservationDate === 'date' &&
            typeof value.reservationAccessLevel === 'number' &&
            (typeof value.reservationComment === 'string' || value.reservationComment === undefined)
        ) {
            return;
        }
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The book reservation is invalid';
    error.error = 'The book reservation is not containing all of the required properties';
    throw error;
};

// Function to check if a list of objects are valid
const isAllPropertiesPresenceOfListObjects = (list) => {
    // Check if it's an array
    if (!Array.isArray(list)) {
        const error = new Error();
        error.status = 400;
        error.message = 'Please provide a valid array';
        error.error = 'The list is not valid array';
        throw error;
    }

    // Check each object in the array
    for (const value of list) {
        // Check for all of the specific properties including _id presence
        isAllPropertiesPresence(value);
    }

    return; // All objects in the array are valid
}

const isIdPropertyPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book reservation is not valid';
        error.error = 'The book reservation is null or undefined';
        throw error;
    }

    if (!('_id' in value && typeof value._id === 'string')) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book reservation is not valid';
        error.error = 'The book reservation is not containing _id property';
        throw error;
    }
}

// Function to check if a value is an object and contains specific properties
const isOneOfPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book reservation is not valid';
        error.error = 'The book reservation is null or undefined';
        throw error;
    }

    // Check for at least one of the specific properties
    if (
        ('reservationRef' in value && typeof value.reservationRef === 'string') ||
        ('userId' in value && typeof value.userId === 'string') ||
        ('reservationStatusNum' in value && typeof value.reservationStatusNum === 'number') ||
        ('reservationDate' in value && typeof value.reservationDate === 'date') ||
        ('reservationAccessLevel' in value && (typeof value.reservationAccessLevel === 'number')) ||
        ('reservationComment' in value && (typeof value.reservationComment === 'string' || value.reservationComment === undefined))
    ) {
        return;
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The book reservation is invalid';
    error.error = 'The book reservation is not containing at least one of the required properties';
    throw error;
}

const isOneOfPropertiesPresenceWithIdOfListObjects = (list) => {
    // Check if it's an array
    if (!Array.isArray(list)) {
        const error = new Error();
        error.status = 400;
        error.message = 'The input value is not valid array';
        error.error = 'The list is not valid array';
        throw error;
    }

    // Check each object in the array
    for (const value of list) {
        // Check if id is present
        isIdPropertyPresence(value);
        // Check for at least one of the specific properties presence
        isOneOfPropertiesPresence(value);
    }

    return; // All objects in the array are valid
}

// Function to check if a list of objects are valid
const isOneOfPropertiesPresenceOfListObjects = (list) => {
    // Check if it's an array
    if (!Array.isArray(list)) {
        const error = new Error();
        error.status = 400;
        error.message = 'The input value is not valid array';
        error.error = 'The list is not valid array';
        throw error;
    }

    // Check each object in the array
    for (const value of list) {
        // Check for at least one of the specific properties presence
        isOneOfPropertiesPresence(value);
    }

    return; // All objects in the array are valid
}

// Public static methods
bookReservationSchema.statics.generateBulkUpdateOperations = (updatableBookReservations) => {

    isOneOfPropertiesPresenceWithIdOfListObjects(updatableBookReservations);

    return updatableBookReservations.map(({ _id, reservationRef, userId, reservationStatusNum, reservationDate, reservationAccessLevel, reservationComment }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    reservationRef,
                    userId,
                    reservationStatusNum,
                    reservationDate,
                    reservationAccessLevel,
                    reservationComment,
                }
            },
        },
    }));
};

bookReservationSchema.statics.generateBulkDeleteOperations = (deletableBookReservations) => {

    return deletableBookReservations.map(({ _id, reservationRef, bookReservationSerial, bookReservationDescription, reservationAccessLevel }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { _id },
                    { reservationRef },
                    { userId },
                    { reservationStatusNum },
                    { reservationDate },
                    { reservationAccessLevel },
                    { reservationComment },
                ]
            },
        },
    }));
};

bookReservationSchema.statics.generateSearchOperations = (authRoleSerial, searchTermsOfBookReservation) => {

    isOneOfPropertiesPresence(searchTermsOfBookReservation);

    const { reservationRef, userId, reservationStatusNum, reservationDate, reservationAccessLevel, reservationComment } = searchTermsOfBookReservation;
    const endRoleSerial = 10; // See Role enum of userRoleSchema

    let accessibilityRoleSerials = [];
    for (let i = authRoleSerial; i <= endRoleSerial; i++) {
        accessibilityRoleSerials.push(i);
    }

    if (!accessibilityRoleSerials.includes(authRoleSerial)) {
        const error = new Error();
        error.status = 401;
        error.message = 'You are not authorized. Please contact your administrator.'
        error.error = `You are not authorized to access this data, request user role serial: ${authRoleSerial}`
        throw error;
    }

    return {
        $or: [
            reservationRef ? { reservationRef: { $regex: new RegExp(reservationRef, 'i') } } : { role: 999 },
            userId ? { userId: { $regex: new RegExp(userId, 'i') } } : { role: 999 },
            reservationStatusNum ? { reservationStatusNum: { $eq: reservationStatusNum } } : { role: 999 },
            reservationDate ? {
                reservationDate: {
                    $gte: moment(reservationDate).startOf('day').toISOString(),
                    $lt: moment(reservationDate).endOf('day').toISOString(),
                },
            } : { role: 999 },
            reservationAccessLevel ? { reservationAccessLevel: { $eq: reservationAccessLevel } } : { role: 999 },
            reservationComment ? { reservationComment: { $regex: new RegExp(reservationComment, 'i') } } : { role: 999 },
        ],
        $and: [
            { reservationAccessLevel: { $in: accessibilityRoleSerials } },
        ],
    };
};


// Mapping the mongoose model to the MongoDB collection
const bookReservationModel = mongoose.model('bookReservation', bookReservationSchema);

//export the model
module.exports = bookReservationModel;
