const mongoose = require("mongoose");

//schema/Model
const masterUserSchema = new mongoose.Schema(
    {
        masterUserName: {
            type: String,
            required: [true, "Master user name is required"],
            unique: true,
        },
        masterUserSerial: {
            type: Number,
            required: [true, "Master user number is required"],
            unique: true,
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
        },
        masterUserDescription: {
            type: String,
        },
        masterUserAccessLevel: {
            type: Number,
            //required: [true, "Master user role access level is required"],
            default: 10,
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
        error.message = 'The master user is not valid';
        error.error = 'The master user is null or undefined';
        throw error;
    }

    // Check for specific properties including _id
    if (
        '_id' in value &&
        'masterUserName' in value &&
        'masterUserSerial' in value &&
        'masterUserDescription' in value &&
        'masterUserAccessLevel' in value
    ) {
        // Check the types of properties
        if (
            typeof value._id === 'string' &&  // Assuming _id is a string, modify if it's a different type
            typeof value.masterUserName === 'string' &&
            typeof value.masterUserSerial === 'number' &&
            (typeof value.masterUserDescription === 'string' || value.masterUserDescription === undefined) &&
            (typeof value.masterUserAccessLevel === 'number' || value.masterUserAccessLevel === undefined)
        ) {
            return;
        }
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The master user is invalid';
    error.error = 'The master user is not containing all of the required properties';
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
        error.message = 'The master user is not valid';
        error.error = 'The master user is null or undefined';
        throw error;
    }

    if (!('_id' in value && typeof value._id === 'string')) {
        const error = new Error();
        error.status = 400;
        error.message = 'The master user is not valid';
        error.error = 'The master user is not containing _id property';
        throw error;
    }
}

// Function to check if a value is an object and contains specific properties
const isOneOfPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The master user is not valid';
        error.error = 'The master user is null or undefined';
        throw error;
    }

    // Check for at least one of the specific properties
    if (
        ('masterUserName' in value && typeof value.masterUserName === 'string') ||
        ('masterUserSerial' in value && typeof value.masterUserSerial === 'number') ||
        ('masterUserDescription' in value && (typeof value.masterUserDescription === 'string' || value.masterUserDescription === undefined)) ||
        ('masterUserAccessLevel' in value && (typeof value.masterUserAccessLevel === 'number' || value.masterUserAccessLevel === undefined))
    ) {
        return;
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The master user is invalid';
    error.error = 'The master user is not containing at least one of the required properties';
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
masterUserSchema.statics.generateBulkUpdateOperations = (updatableMasterUsers) => {

    isOneOfPropertiesPresenceWithIdOfListObjects(updatableMasterUsers);

    return updatableMasterUsers.map(({ _id, masterUserName, masterUserSerial, masterUserDescription, masterUserAccessLevel }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    masterUserName,
                    masterUserSerial,
                    masterUserDescription,
                    masterUserAccessLevel
                }
            },
        },
    }));
};

masterUserSchema.statics.generateBulkDeleteOperations = (deletableMasterUsers) => {

    return deletableMasterUsers.map(({ _id, masterUserName, masterUserSerial, masterUserDescription, masterUserAccessLevel }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { _id },
                    { masterUserName },
                    { masterUserSerial },
                    { masterUserDescription },
                    { masterUserAccessLevel },
                ]
            },
        },
    }));
};

masterUserSchema.statics.generateSearchOperations = (authRoleSerial, searchTermsOfMasterUser) => {

    isOneOfPropertiesPresence(searchTermsOfMasterUser);

    const { masterUserName, masterUserSerial, masterUserDescription, masterUserAccessLevel } = searchTermsOfMasterUser;
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
            masterUserName ? { masterUserName: { $regex: new RegExp(masterUserName, 'i') } } : { role: 999 },
            masterUserSerial ? { masterUserSerial: { $eq: masterUserSerial } } : { role: 999 },
            masterUserDescription ? { masterUserDescription: { $regex: new RegExp(masterUserDescription, 'i') } } : { role: 999 },
            masterUserAccessLevel ? { masterUserAccessLevel: { $eq: masterUserAccessLevel } } : { role: 999 },
        ],
        $and: [
            { masterUserAccessLevel: { $in: accessibilityRoleSerials } },
        ],
    };
};


// Mapping the mongoose model to the MongoDB collection
const masterUserModel = mongoose.model('masterUser', masterUserSchema);

//export the model
module.exports = masterUserModel;
