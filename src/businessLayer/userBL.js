const userModel = require('../models/userModel');
const userDL = require('../dataAccessLayer/userDL');
const userAccessibilityOperation = require('../lib/userAccessibilityOperation');
const idAndPropertyValidationUtil = require('../lib/idAndPropertyValidationUtil');


//---------------------- Get methods ----------------------\\
exports.getUsers = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getUsers()");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { users: existingUsers, totalUser } = await userDL.getUsers({ roleSerial: roleFilter }, pagingQuery);

    // Check if users are null or undefined
    if (!existingUsers || existingUsers.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found";
        error.error = "User not found or you do not have access to the data";
        throw error;
    }

    // Exclude password field from each user object
    const usersWithoutPassword = existingUsers.map(user => {
        const { password, ...userWithoutPassword } = user.toObject();
        return userWithoutPassword;
    });

    return usersWithoutPassword;
};

exports.getUserById = async (authUser, userId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getUserById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(userId, "user");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { users: existingUsers, totalUser } = await userDL.getUsers({ roleSerial: roleFilter, _id: userId });

    if (!existingUsers || existingUsers.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "user not found with the provided user ID";
        error.error = `user not found by the provided ID (${userId}) or you do not have access to the data`;
        throw error;
    }

    // Exclude password field from each user object
    const usersWithoutPassword = existingUsers.map(user => {
        const { password, ...userWithoutPassword } = user.toObject();
        return userWithoutPassword;
    });

    return usersWithoutPassword;
};

exports.getUsersByIds = async (authUser, userIds, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 1 for all

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkUsers()");

    // Valid, Invalid and Duplicate IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs");

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

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid user ids";
        error.error = `All user ids (${displayInvalidIds}) are invalid, no user found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    const { users: existingUsers, totalUser } = await userDL.getUsers({ userAccessLevel: roleFilter, _id: { $in: validIds } }, pagingQuery);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUsers.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUsers || existingUsers.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "User not found with the provided user IDs";
        error.error = `User not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Get data
    return { users: existingUsers, presentIds, absentIds, invalidIds, duplicateIds };
};


// ---------------------- Create methods ----------------------\\
exports.createUser = async (authUser, newUser) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only
    // This operation access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createUser()");

    // Property validation for given input object
    idAndPropertyValidationUtil.checkWrongProperty(newUser, userModel.schema.paths, "user", []);

    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newUser, "user");

    // create new user
    const createdUser = await userDL.createUser(newUser);

    // Exclude password field from each user object
    const { password, ...userWithoutPassword } = createdUser.toObject();

    return userWithoutPassword;
};

exports.createBulkUser = async (authUser, newUsers) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkUser()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(newUsers, userModel.schema.paths, "user", []);
    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newUsers, "user");

    // create new users in bulk
    return await userDL.createBulkUser(newUsers);
};


// ---------------------- Update methods ----------------------\\
exports.updateUserById = async (authUser, userId, updatableUser) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateUserById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(userId, "user");
    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(updatableUser, userModel.schema.paths, "user", []);

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Check data existence
    const { users: existingUsers, totalUser } = await userDL.getUsers({ roleSerial: roleFilter, _id: userId });

    if (!existingUsers || existingUsers.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found with the provided user ID";
        error.error = `User not found by the provided ID (${userId}) or you do not have access to the data`;
        throw error;
    }

    return await userDL.updateUserById(userId, updatableUser);
};

exports.updateBulkUsers = async (authUser, updatableUsers) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkUsers()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableUsers, userModel.schema.paths, "user", []);

    // ID validation
    const userIds = updatableUsers.map(user => user._id);
    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs");

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid user ids";
        error.error = `All user ids (${displayInvalidIds}) are invalid, no user found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { users: existingUsers, totalUser } = await userDL.getUsers({ userAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUsers.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUsers || existingUsers.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "User not found with the provided user IDs";
        error.error = `User not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Valid data
    const validUpdatableUsers = updatableUsers.filter(user => presentIds.includes(user._id));
    // Bulk operation generator
    const bulkUpdateOperations = await userModel.generateBulkUpdateOperations(validUpdatableUsers);
    // Update data
    const updatedUsers = await userDL.updateBulkUsers(bulkUpdateOperations);

    return { user: updatedUsers, presentIds, absentIds, invalidIds };
};


// ---------------------- Delete methods ----------------------\\
exports.deleteUserById = async (authUser, userId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteUserById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(userId, "user");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Check data existence
    const { users: existingUsers, totalUser } = await userDL.getUsers({ roleSerial: roleFilter, _id: userId });

    if (!existingUsers || existingUsers.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found with the provided user ID";
        error.error = `User not found by the provided ID (${userId}) or you do not have access to the data`;
        throw error;
    }

    // Delete data
    return await userDL.deleteUserById(existingUsers[0]._id);
};

exports.deleteBulkUsers = async (authUser, userIds) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkUsers()");

    // Valid, Invalid and Duplicate IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs");

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

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid user IDs";
        error.error = `All user ids (${displayInvalidIds}) are invalid, no user found by the provided IDs`;
        throw error;
    }

    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { users: existingUsers, totalUser } = await userDL.getUsers({ userAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUsers.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUsers || existingUsers.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "User not found with the provided user IDs";
        error.error = `User not found with the provided user IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Bulk operation generator
    const bulkDeleteOperations = await userModel.generateBulkDeleteOperations(existingUsers);

    // Delete data
    const deletedUsers = await userDL.deleteBulkUser(bulkDeleteOperations);

    return { user: deletedUsers, presentIds, absentIds, invalidIds, duplicateIds };
};


// ---------------------- Search methods ----------------------\\
exports.searchUser = async (authUser, searchTermsForUser, pagingQuery) => {

    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookReservation()");

    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(searchTermsForUser, userModel.schema.paths, "user", []);

    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, searchTermsForUser, "user");

    // Filter generator
    const searchUserFilter = await userModel.generateSearchOperations(authUser.roleSerial, searchTermsForUser);
    const { users: existingUsers, totalUser } = await userDL.getUsers(searchUserFilter, pagingQuery);

    // Check if users are null or undefined
    if (!existingUsers || existingUsers.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "User not found";
        error.error = "User not found with the provided search criteria or you do not have access to the data";
        throw error;
    }

    return existingUsers;
};

// Specific operations - able to search by user role, category etc.


// Authentication
exports.registerUser = async (user) => {
    user.role = 'user';
    return await userDL.createUser(user);
};

// Special user operations
exports.getAndUpdateOrCreateUserBasedOnEmail = async (authUser, user) => {
    const thisOperationAccessibilityLevel = 2;
    // This operation access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createUser()");

    // Property validation for given input object
    idAndPropertyValidationUtil.checkWrongProperty(user, userModel.schema.paths, "user", []);

    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, user, "user");


    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Check data existence
    const { users: existingUsers, totalUser } = await userDL.getUsers({ roleSerial: roleFilter, email: user.email });

    // Create if not exists
    if (!existingUsers || existingUsers.length === 0) {
        user.roleSerial = 10;
        user.password = '12345';
        const createdUser = await userDL.createUser(user);
        return createdUser;
    }

    // Update if exists
    const updatedUser = await userDL.updateUserById(existingUsers[0]._id, user);

    return updatedUser;
};