const messageLog = require('../lib/messageLog');
const errorLog = require('../lib/errorLog');
const mongoose = require("mongoose");

//schema/Model
const bookCategorySchema = new mongoose.Schema(
    {
        bookCategoryName: {
            type: String,
            required: [true, "Book category name is required"],
            unique: true,
            validate: {
                validator: async function (value) {
                    const existingBookCategory = await this.constructor.findOne({ bookCategoryName: { $regex: new RegExp(`^${value}$`, 'i') } });
                    return !existingBookCategory;
                },
                message: props => `Book category '${props.value}' already exists.`,
            },
        },
        bookCategoryDescription: {
            type: String,
        },
        bookCategoryAccessLevel: {
            type: Number,
            //required: [true, "Book category role access level is required"],
            default: 10,
        },
    },
    { timestamps: true }
);

// create a default admin user when the server starts
bookCategorySchema.statics.createDefaultBookCategory = async () => {
    try {
        const adminUser = await bookCategoryModel.findOne({ bookCategoryName: 'Undefined' });
        if (!adminUser) {
            await bookCategoryModel.create({
                bookCategoryName: 'Undefined',
                bookCategoryDescription: 'Undefined',
                bookCategoryAccessLevel: 10,
            });

            messageLog('Default book category is created.');
        }
    } catch (err) {
        errorLog('Error creating default book category:', err);
    }
};


// Common methods
// Function to check if a value is an object and contains specific properties
const isAllPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book category is not valid';
        error.error = 'The book category is null or undefined';
        throw error;
    }

    // Check for specific properties including _id
    if (
        '_id' in value &&
        'bookCategoryName' in value &&
        'bookCategoryDescription' in value &&
        'bookCategoryAccessLevel' in value
    ) {
        // Check the types of properties
        if (
            typeof value._id === 'string' &&  // Assuming _id is a string, modify if it's a different type
            typeof value.bookCategoryName === 'string' &&
            (typeof value.bookCategoryDescription === 'string' || value.bookCategoryDescription === undefined) &&
            (typeof value.bookCategoryAccessLevel === 'number' || value.bookCategoryAccessLevel === undefined)
        ) {
            return;
        }
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The book category is invalid';
    error.error = 'The book category is not containing all of the required properties';
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
        error.message = 'The book category is not valid';
        error.error = 'The book category is null or undefined';
        throw error;
    }

    if (!('_id' in value && typeof value._id === 'string')) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book category is not valid';
        error.error = 'The book category is not containing _id property';
        throw error;
    }
}

// Function to check if a value is an object and contains specific properties
const isOneOfPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The book category is not valid';
        error.error = 'The book category is null or undefined';
        throw error;
    }

    // Check for at least one of the specific properties
    if (
        ('bookCategoryName' in value && typeof value.bookCategoryName === 'string') ||
        ('bookCategoryDescription' in value && (typeof value.bookCategoryDescription === 'string' || value.bookCategoryDescription === undefined)) ||
        ('bookCategoryAccessLevel' in value && (typeof value.bookCategoryAccessLevel === 'number' || value.bookCategoryAccessLevel === undefined))
    ) {
        return;
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The book category is invalid';
    error.error = 'The book category is not containing at least one of the required properties';
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
bookCategorySchema.statics.generateBulkUpdateOperations = (updatableBookCategories) => {

    isOneOfPropertiesPresenceWithIdOfListObjects(updatableBookCategories);

    return updatableBookCategories.map(({ _id, bookCategoryName, bookCategoryDescription, bookCategoryAccessLevel }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    bookCategoryName,
                    bookCategoryDescription,
                    bookCategoryAccessLevel
                }
            },
        },
    }));
};

bookCategorySchema.statics.generateBulkDeleteOperations = (deletableBookCategories) => {

    return deletableBookCategories.map(({ _id, bookCategoryName, bookCategoryDescription, bookCategoryAccessLevel }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { _id },
                    { bookCategoryName },
                    { bookCategoryDescription },
                    { bookCategoryAccessLevel },
                ]
            },
        },
    }));
};

bookCategorySchema.statics.generateSearchOperations = (authRoleSerial, searchTermsOfBookCategory) => {

    isOneOfPropertiesPresence(searchTermsOfBookCategory);

    const { bookCategoryName: bookCategoryName, bookCategoryDescription, bookCategoryAccessLevel } = searchTermsOfBookCategory;
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
            bookCategoryName ? { bookCategoryName: { $regex: new RegExp(bookCategoryName, 'i') } } : { role: 999 },
            bookCategoryDescription ? { bookCategoryDescription: { $regex: new RegExp(bookCategoryDescription, 'i') } } : { role: 999 },
            bookCategoryAccessLevel ? { bookCategoryAccessLevel: { $eq: bookCategoryAccessLevel } } : { role: 999 },
        ],
        $and: [
            { bookCategoryAccessLevel: { $in: accessibilityRoleSerials } },
        ],
    };
};


// Mapping the mongoose model to the MongoDB collection
const bookCategoryModel = mongoose.model('bookCategory', bookCategorySchema);

//export the model
module.exports = bookCategoryModel;
