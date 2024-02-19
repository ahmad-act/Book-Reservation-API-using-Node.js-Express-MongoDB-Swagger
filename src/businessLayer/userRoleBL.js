//const getAuthUser = require('../lib/getAuthUser');
const userRoleModel = require('../models/userRoleModel');
const userRoleDL = require('../dataAccessLayer/userRoleDL');
const userAccessibilityOperation = require('../lib/userAccessibilityOperation');
const idAndPropertyValidationUtil = require('../lib/idAndPropertyValidationUtil');


//---------------------- Get methods ----------------------\\
exports.getUserRoles = async (jwtToken) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, thisOperationAccessibilityLevel); 
    const roleFilter = await userRoleModel.generateSearchOperations(authUser.role, thisOperationAccessibilityLevel); 
    const filter = { userRoleAccessLevel: roleFilter };
    return await userRoleDL.getUserRoles(filter);
};

exports.getUserRoleById = async (jwtToken, userRoleId) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);

    idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);
    
    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter, _id: userRoleId };
    const userRole = await userRoleDL.getUserRoles(filter);

    if (!userRole) {
        const error = new Error("UserRole not found");
        error.status = 404;
        throw error;
    }

    return userRole;
};

exports.getUserRolesByIds = async (jwtToken, ids) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);

    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(ids);

    if (validIds.length === 0) {
        const error = new Error('Invalid user ids');
        error.status = 500;
        throw error;
    }

    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter, _id: { $in: validIds } };

    const existingUserRoles = await userRoleDL.getUserRoles(filter);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUserRoles.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUserRoles || existingUserRoles.length === 0) {
        const error = new Error('User role(s) not found');
        error.status = 500;
        throw error;
    }

    return { users: existingUserRoles, presentIds, absentIds, invalidIds };
};


// ---------------------- Create methods ----------------------\\
exports.createUserRole = async (jwtToken, newUserRole) => {
    await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);

    // Given user role validation
    if (!newUserRole) {
        const error = new Error("Please provide a valid userRole");
        error.status = 400;
        throw error;
    }

    return await userRoleDL.createUserRole(newUserRole);
};

exports.createBulkUserRole = async (jwtToken, userRoles) => {
    await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);

    // Given user roles validation
    if (!userRoles || !userRoles.length) {
        const error = new Error("Please provide a valid userRoles");
        error.status = 400;
        throw error;
    }

    return await userRoleDL.createBulkUserRole(user);
};


// ---------------------- Update methods ----------------------\\
exports.updateUserRoleById = async (jwtToken, userRoleId, user) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);
    
    idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);

    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter };
    const existingUserRole = await userRoleDL.getUserRoles({ filter, _id: userRoleId });

    if (!existingUserRole) {
        const error = new Error('UserRole not found');
        error.status = 404;
        throw error;
    }

    return await userRoleDL.updateUserRoleById(userRoleId, user);
};

exports.updateBulkUserRoles = async (jwtToken, updateUserRoles) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);

    // Given user roles validation
    if (!updateUserRoles) {
        const error = new Error("Please provide valid userRoles");
        error.status = 400;
        throw error;
    }

    const userRoleIds = updateUserRoles.map(user => user._id);

    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userRoleIds);

    if (validIds.length === 0) {
        const error = new Error('Invalid user ids');
        error.status = 500;
        throw error;
    }

    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter, _id: { $in: validIds } };

    const existingUserRoles = await userRoleDL.getUserRoles(filter);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUserRoles.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUserRoles || existingUserRoles.length === 0) {
        const error = new Error('User role(s) not found');
        error.status = 500;
        throw error;
    }

    const bulkUpdateOperations = await userRoleModel.generateBulkUpdateOperations(existingUserRoles);

    const updatedUserRoles = await userRoleDL.updateBulkUserRoles(bulkUpdateOperations);

    return { users: updatedUserRoles, presentIds, absentIds, invalidIds };
};


// ---------------------- Delete methods ----------------------\\
exports.deleteUserRoleById = async (jwtToken, userRoleId) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);

    idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);

    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter };

    const existingUserRole = await userRoleDL.getUserRoles({ filter, _id: userRoleId });

    if (!existingUserRole) {
        const error = new Error('UserRole not found');
        error.status = 404;
        throw error;
    }

    return await userRoleDL.deleteUserRole(existingUserRole._id);
};


exports.deleteBulkUserRoles = async (jwtToken, userRoleIds) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);

    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userRoleIds);

    if (validIds.length === 0) {
        const error = new Error('Invalid user ids');
        error.status = 400;
        throw error;
    }

    const roleFilter = await userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
    const filter = { userRoleAccessLevel: roleFilter, _id: { $in: validIds } };

    const existingUserRoles = await userRoleDL.getUserRoles(filter);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingUserRoles.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingUserRoles || existingUserRoles.length === 0) {
        const error = new Error('User role(s) not found');
        error.status = 500;
        throw error;
    }

    const bulkDeleteOperations = await userRoleModel.generateBulkDeleteOperations(existingUserRoles);

    const deletedUserRoles = await userRoleDL.deleteBulkUserRole(bulkDeleteOperations);

    return { users: deletedUserRoles, presentIds, absentIds, invalidIds };
};


// ---------------------- Search methods ----------------------\\
exports.searchUserRole = async (jwtToken, searchUserRole) => {
    const authUser = await userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);

    const searchUserRoleFilter = await userRoleModel.generateSearchOperations(searchUserRole, authUser.role);

    const users = await userRoleDL.searchUserRole(searchUserRoleFilter);
    return users;
};

// Specific operations - able to search by user role, category etc.


