const mongoose = require("mongoose");

// Private function
function getWrongPropertyList(modelSchema, enumTable, modelName, ignorePropertyList = []) {
    let displayModelName = modelName || 'object';

    if (typeof enumTable !== 'object' || enumTable === null) {
        const error = new Error();
        error.status = 400;
        error.message = `Invalid ${displayModelName}, please provide a valid ${displayModelName}`;
        error.error = `Invalid ${displayModelName} structure`;
        throw error;
    }

    const modelProperties = Object.keys(modelSchema);
    const givenObjectProperties = Object.keys(enumTable);
    return givenObjectProperties.filter(property => !modelProperties.includes(property) && !ignorePropertyList.includes(property));
}

// Public function
exports.checkWrongId = (id, idName) => {
    let displayIdName = idName || 'id';

    // Given id validation
    if (!id) {
        const error = new Error();
        error.status = 400;
        error.message = `Please provide a valid ${displayIdName} ID`;
        error.error = `Invalid ${displayIdName} ID`;
        throw error;
    }

    // MongoDB id type validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error();
        error.status = 400;
        error.message = `Invalid ${displayIdName} ID`;
        error.error = `Invalid type of MongoDB ${displayIdName} ID`;
        throw error;
    }
};

// exports.checkWrongIdOfList = (ids, idName) => {
//     let displayIdName = idName || 'id';

//     // Check if given ids is null or undefined
//     if (!ids) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid ${displayIdName} ID`;
//         error.error = `Invalid ${displayIdName} ID`;
//         throw error;
//     }

//     // Check if given data is an array
//     if (!Array.isArray(ids)) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid array of ${displayModelName}(s)`;
//         error.error = `The array of ${displayModelName} is not a valid array`;
//         throw error;
//     }

//     const wrongIdList = [];
//     const idsList = [];
//     const duplicateIds = [];

//     for (const id of ids) {
//         if (id) {
//             if (idsList.includes(obj._id) && !duplicateIds.includes(obj._id)) {
//                 duplicateIds.push(obj._id);
//             }

//             idsList.push(obj._id);
//         }

//         // MongoDB id type validation
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             wrongIdList.push(id);
//         }
//     }

//     // Check for duplicate IDs
//     if (duplicateIds && duplicateIds.length > 0) {
//         const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
//         const duplicateIdsString = JSON.stringify(duplicateIds);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         throw error;
//     }

//     // Check for wrong IDs
//     if (wrongIdList && wrongIdList.length > 0) {
//         const pluralSuffix = wrongIdList.length > 1 ? 'ies' : 'y';
//         const propertiesString = JSON.stringify(wrongIdList);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Invalid ID${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
//         error.error = `Invalid ID${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
//         throw error;
//     }
// };


exports.checkWrongProperty = (obj, modelSchema, modelName, ignorePropertyList = []) => {
    let displayModelName = modelName || 'object';

    // Check if given enum tables is null or undefined
    if (!obj) {
        const error = new Error();
        error.status = 400;
        error.message = `Please provide valid ${displayModelName}`;
        error.error = `The ${displayModelName} is null or undefined`;
        throw error;
    }

    const wrongProperties = getWrongPropertyList(modelSchema, obj, modelName, ignorePropertyList);
    if (wrongProperties && wrongProperties.length > 0) {
        const pluralSuffix = wrongProperties.length > 1 ? 'ies' : 'y';
        const propertiesString = JSON.stringify(wrongProperties); //wrongProperties.join('", "');

        const error = new Error();
        error.status = 400;
        error.message = `Invalid propert${pluralSuffix}: ${propertiesString} in one or more of the given ${displayModelName}`;
        error.error = `Invalid propert${pluralSuffix}: ${propertiesString} in one or more of the given ${displayModelName}`;
        throw error;
    }
}

exports.checkWrongPropertyOfList = (objectList, modelSchema, modelName, ignorePropertyList = []) => {
    let displayModelName = modelName || 'array of objects';

    // Check if given enum tables is null or undefined
    if (!objectList) {
        const error = new Error();
        error.status = 400;
        error.message = `Please provide valid ${displayModelName}(s)`;
        error.error = `The ${displayModelName} is null or undefined`;
        throw error;
    }

    // Check if given data is an array
    if (!Array.isArray(objectList)) {
        const error = new Error();
        error.status = 400;
        error.message = `Please provide a valid array of ${displayModelName}(s)`;
        error.error = `The array of ${displayModelName} is not a valid array`;
        throw error;
    }

    const wrongPropertiesList = [];
    const idsList = [];
    const duplicateIds = [];

    for (const obj of objectList) {
        if (obj._id) {
            if (idsList.includes(obj._id) && !duplicateIds.includes(obj._id)) {
                duplicateIds.push(obj._id);
            }

            idsList.push(obj._id);
        }

        const wrongProperties = getWrongPropertyList(modelSchema, obj, ignorePropertyList);
        if (wrongProperties && wrongProperties.length > 0) {
            wrongPropertiesList.push(wrongProperties);
        }
    }

    // Check for duplicate IDs
    if (duplicateIds && duplicateIds.length > 0) {
        const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
        const duplicateIdsString = JSON.stringify(duplicateIds);
        const error = new Error();
        error.status = 400;
        error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        throw error;
    }

    // Check for wrong properties
    if (wrongPropertiesList && wrongPropertiesList.length > 0) {
        const pluralSuffix = wrongPropertiesList.length > 1 ? 'ies' : 'y';
        const propertiesString = JSON.stringify(wrongPropertiesList);
        const error = new Error();
        error.status = 400;
        error.message = `Invalid propert${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
        error.error = `Invalid propert${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
        throw error;
    }
};

exports.separateMongoDbValidAndInvalidIds = (ids, idName) => {
    let displayIdName = idName || 'IDs';

    // Check if given enum tables is null or undefined
    if (!ids) {
        const error = new Error();
        error.status = 400;
        error.message = `Please provide valid ${displayIdName}`;
        error.error = `The ${displayIdName} is null or undefined`;
        throw error;
    }

    // Check if given data is an array
    const idArray = Array.isArray(ids);
    if (!idArray) {
        const error = new Error();
        error.status = 400;
        error.message = `Invalid array of ${displayIdName}, please provide a valid array of ${displayIdName}`
        error.error = `Invalid array of ${displayIdName}`
        throw error;
    }

    const validIds = [];
    const invalidIds = [];
    const duplicateIds = [];
    const checkedIdsList = [];

    ids.forEach((id) => {
        if (mongoose.Types.ObjectId.isValid(id)) {
            validIds.push(id);
        } else {
            invalidIds.push(id);
        }

        if (checkedIdsList.includes(id) && !duplicateIds.includes(id)) {
            duplicateIds.push(id);
        }

        checkedIdsList.push(id);
    });

    return {
        validIds,
        invalidIds,
        duplicateIds,
    };

    //Read: const { validIds, invalidIds, duplicateIds } = userModel.separateValidAndInvalidIds(idList);
};

// exports.checkDuplicateIdsOfList = (enumTableIds, modelName) => {
//     let displayModelName = modelName || 'array of objects';

//     // Check if given enum tables is null or undefined
//     if (!enumTableIds) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide valid ${displayModelName}(s) ID`;
//         error.error = `The ${displayModelName} is null or undefined`;
//         throw error;
//     }

//     if (!Array.isArray(enumTableIds)) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid array of ${displayModelName}(s) ID`;
//         error.error = `The array of ${displayModelName} is not a valid array of IDs`;
//         throw error;
//     }

//     const idsList = [];
//     const duplicateIds = [];

//     for (const enumTableId of enumTableIds) {

//         if (idsList.includes(enumTableId) && !duplicateIds.includes(enumTableId)) {
//             duplicateIds.push(enumTableId);
//         }

//         idsList.push(enumTableId);

//     }

//     // Check for duplicate IDs
//     if (duplicateIds && duplicateIds.length > 0) {
//         const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
//         const duplicateIdsString = JSON.stringify(duplicateIds);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         throw error;
//     }
// };


exports.checkWrongAccessLevel = (authUser, newEnumTable, modelName) => {
    if (newEnumTable.enumTableAccessLevel < authUser.roleSerial) {
        const error = new Error();
        error.status = 400;
        error.message = `Invalid ${modelName} access level`;
        error.error = `The ${modelName} access level (${newEnumTable.enumTableAccessLevel}) cannot be less than logged in user access level (${authUser.roleSerial})`;
        throw error;
    }
}

exports.checkWrongAccessLevelOfList = (authUser, newEnumTables, modelName) => {
    newEnumTables.forEach(enumTable => {
        if (enumTable.enumTableAccessLevel < authUser.roleSerial) {
            const error = new Error();
            error.status = 400;
            error.message = `Invalid ${modelName} access level`;
            error.error = `The ${modelName} access level (${enumTable.enumTableAccessLevel}) cannot be less than logged in user access level (${authUser.roleSerial})`;
            throw error;
        }
    });
}