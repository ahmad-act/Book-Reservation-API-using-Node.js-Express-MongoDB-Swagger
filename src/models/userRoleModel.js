const messageLog = require('../lib/messageLog');
const errorLog = require('../lib/errorLog');
const mongoose = require("mongoose");

//schema
const userRoleSchema = new mongoose.Schema(
    {
        roleName: {
            type: String,
            required: [true, "user name is required"],
            unique: true,
        },
        roleSerial: {
            type: Number,
            required: [true, "user role is required"],
            unique: true,
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
        },
        Description: {
            type: String,
        },
        userRoleAccessLevel: {
            type: Number,
            //required: [true, "user role access level is required"],
            default: 10,
        },
    },
    { timestamps: true }
);

// create user roles
userRoleSchema.statics.createDefaultUserRoles = async () => {
    try {
        const userRoles = [
            {
                roleName: 'Admin',
                roleSerial: 1,
                Description: 'Only Admin can access',
                userRoleAccessLevel: 1,
            },
            {
                roleName: 'User',
                roleSerial: 2,
                Description: 'User as well as Admin can access',
                userRoleAccessLevel: 2,
            },
        ];

        const existingUsers = await userRoleModel.find({});
        const absentRoles = userRoles.filter(role =>
            !existingUsers.some(user => user.roleSerial === role.roleSerial)
        );

        const absentUserRoles = [];
        if (absentRoles.length > 0) {
            absentRoles.forEach(role => {
                absentUserRoles.push({
                    roleName: role.roleName,
                    roleSerial: role.roleSerial,
                    Description: role.Description,
                    userRoleAccessLevel: role.userRoleAccessLevel,
                });
            });

            await userRoleModel.insertMany(absentUserRoles);
            console.log('Default user roles are created.');
        }

    } catch (err) {
        errorLog('Error creating default user roles:', err);
    }
};


userRoleSchema.statics.generateBulkUpdateOperations = (userRoles) => {
    return userRoles.map(({ _id, roleName, roleSerial, Description, userRoleAccessLevel }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    roleName,
                    roleSerial,
                    Description,
                    userRoleAccessLevel
                }
            },
        },
    }));
};

userRoleSchema.statics.generateBulkDeleteOperations = (userRoles) => {

    return userRoles.map(({ _id, roleName, roleSerial, Description, userRoleAccessLevel }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { _id },
                    { roleName },
                    { roleSerial },
                    { Description },
                    { userRoleAccessLevel },
                ]
            },
        },
    }));
};

userRoleSchema.statics.generateSearchOperations = (authRoleSerial, operationAccessibilityLevel) => {

    if (authRoleSerial === 99) {
        const error = new Error('You are not authorized to access this data');
        error.status = 401;
        throw error;
    }

    if (!operationAccessibilityLevel) {
        const error = new Error('Please provide valid Operation Accessibility Level for the method');
        error.status = 401;
        throw error;
    }

    const { roleName, roleSerial, Description, userRoleAccessLevel } = operationAccessibilityLevel;

    const endRole = 10; // See Role enum of userRoleSchema

    let accessableRoles = [];
    for (let i = operationAccessibilityLevel; i <= endRole; i++) {
        accessableRoles.push(i);
    }

    if (!accessableRoles.includes(authRoleSerial)) {
        const error = new Error('You are not authorized to access this data');
        error.status = 401;
        throw error;
    }

    return {
        $or: [
            roleName ? { name: { $regex: new RegExp(roleName, 'i') } } : { role: 999 },
            roleSerial ? { roleSerial: { $regex: new RegExp(roleSerial, 'i') } } : { role: 999 },
            Description ? { Description: { $regex: new RegExp(Description, 'i') } } : { role: 999 },
            userRoleAccessLevel ? { userRoleAccessLevel: { $eq: userRoleAccessLevel } } : { role: 999 },
        ],
        $and: [
            { userRoleAccessLevel: { $in: accessableRoles } },
        ],
    };
};



// userRoleSchema.statics.separateValidAndInvalidIds = (ids) => {
//     const idArray = Array.isArray(ids);

//     if (!idArray) {
//         throw new Error('Invalid array of ids');
//     }

//     const validIds = [];
//     const invalidIds = [];

//     ids.forEach((id) => {
//         if (mongoose.Types.ObjectId.isValid(id)) {
//             validIds.push(id);
//         } else {
//             invalidIds.push(id);
//         }
//     });

//     return {
//         validIds,
//         invalidIds,
//     };

//     //Read: const { validIds, invalidIds } = userModel.separateValidAndInvalidIds(idList);
// };

const userRoleModel = mongoose.model('userRole', userRoleSchema);

//Search options using index
//userRoleSchema.index({ name: 'text' });

//export
module.exports = userRoleModel;
