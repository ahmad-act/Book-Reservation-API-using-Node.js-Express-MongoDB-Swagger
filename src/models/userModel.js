const messageLog = require('../lib/messageLog');
const errorLog = require('../lib/errorLog');
const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

//schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "user name is required"],
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        mobile: {
            type: String,
            unique: true,
            sparse: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            minlength: [5, 'Minimum password length is 5 characters'],
        },
        username: {
            type: String,
            unique: true,
            sparse: true,
        },
        roleSerial: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
            default: 99, // Default role is 'Unauthorized'
        },
        photo: {
            type: String,
        },
        address: {
            type: Array,
        },
    },
    { timestamps: true }
);

// fire a function before doc saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};

// create a default admin user when the server starts
userSchema.statics.createDefaultAdminUser = async () => {
    try {
        const adminUser = await userModel.findOne({ roleSerial: 1 });
        if (!adminUser) {
            await userModel.create({
                name: 'Admin User',
                email: 'admin@example.com',
                password: 'admin',
                roleSerial: 1,
            });

            messageLog('Default admin user is created.');
        }
    } catch (err) {
        errorLog('Error creating default admin user:', err);
    }
};



// Private methods
const isIdPropertyPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The user is not valid';
        error.error = 'The user is null or undefined';
        throw error;
    }

    if (!('_id' in value && typeof value._id === 'string')) {
        const error = new Error();
        error.status = 400;
        error.message = 'The user is not valid';
        error.error = 'The user is not containing _id property';
        throw error;
    }
}

const isOneOfPropertiesPresence = (value) => {
    // Check if it's an object
    if (typeof value !== 'object' || value === null) {
        const error = new Error();
        error.status = 400;
        error.message = 'The user is not valid';
        error.error = 'The user is null or undefined';
        throw error;
    }

    // Check for at least one of the specific properties presence
    if (
        ('name' in value && typeof value.name === 'string') ||
        ('email' in value && typeof value.userSerial === 'string') ||
        ('mobile' in value && (typeof value.mobile === 'string' || value.mobile === undefined)) ||
        ('username' in value && (typeof value.username === 'string' || value.username === undefined)) ||
        ('roleSerial' in value && (typeof value.roleSerial === 'number' || value.roleSerial === undefined))

    ) {
        return;
    }

    const error = new Error();
    error.status = 400;
    error.message = 'The user is invalid';
    error.error = 'The user is not containing at least one of the required properties';
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


// Public methods
userSchema.statics.generateBulkUpdateOperations = (updatableUsers) => {

    isOneOfPropertiesPresenceWithIdOfListObjects(updatableUsers);

    return updatableUsers.map(({ _id, name, email, mobile, password, username, roleSerial, address }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    name,
                    email,
                    mobile,
                    password,
                    username,
                    roleSerial,
                    address
                }
            },
        },
    }));
};

userSchema.statics.generateBulkDeleteOperations = (deletableUsers) => {

    return deletableUsers.map(({ _id, name, email, mobile, password, username, roleSerial, address }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { _id },
                    { name },
                    { email },
                    { mobile },
                    { password },
                    { username },
                    { roleSerial },
                    { address },
                ]
            },
        },
    }));
};

userSchema.statics.generateSearchOperations = (authRoleSerial, searchTermsOfUser) => {
    // Check for at least one of the specific properties presence
    isOneOfPropertiesPresence(searchTermsOfUser);

    const { name, email, mobile, username, roleSerial } = searchTermsOfUser;
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
            name ? { name: { $regex: new RegExp(name, 'i') } } : { role: 999 },
            email ? { email: { $regex: new RegExp(email, 'i') } } : { role: 999 },
            mobile ? { mobile: { $regex: new RegExp(mobile, 'i') } } : { role: 999 },
            username ? { username: { $regex: new RegExp(username, 'i') } } : { role: 999 },
            roleSerial ? { roleSerial: { $eq: roleSerial } } : { role: 999 },
        ],
        $and: [
            { roleSerial: { $in: accessibilityRoleSerials } },
        ],
    };
};



const userModel = mongoose.model('user', userSchema);

//export
module.exports = userModel;
