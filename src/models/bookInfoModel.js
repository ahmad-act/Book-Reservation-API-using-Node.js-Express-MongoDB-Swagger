const mongoose = require("mongoose");

//schema/Model
const bookInfoSchema = new mongoose.Schema(
    {
        bookTitle: {
            type: String,
            required: [true, "Book title is required"],
            unique: true,
            validate: {
                validator: async function (value) {
                    const existingBook = await this.constructor.findOne({ bookTitle: { $regex: new RegExp(`^${value}$`, 'i') } });
                    return !existingBook;
                },
                message: props => `Book title '${props.value}' already exists.`,
            },
        },
        stock: {
            type: Number,
            required: [true, "Stock is required"],
            default: 1,
        },
        bookCategoryId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        author: {
            type: String,
            required: [true, "Author name is required"],
        },
        ISBN: {
            type: String,
        },
        publisher: {
            type: String,
        },
        publishDate: {
            type: Date,
        },
        language: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        note: {
            type: String,
        },
        bookInfoAccessLevel: {
            type: Number,
            //required: [true, "Enum table role access level is required"],
            default: 10,
        },
    },
    { timestamps: true }
);

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
        ('bookTitle' in value && typeof value.bookTitle === 'string') ||
        ('stock' in value && typeof value.stock === 'number') ||
        ('bookCategoryId' in value && (typeof value.bookCategoryId === 'string' || value.bookCategoryId === undefined)) ||
        ('author' in value && (typeof value.author === 'string' || value.author === undefined)) ||
        ('ISBN' in value && (typeof value.ISBN === 'number' || value.ISBN === undefined)) ||
        ('Publisher' in value && typeof value.Publisher === 'string' || value.Publisher === undefined) ||
        ('publishDate' in value && typeof value.publishDate === 'date' || value.publishDate === undefined) ||
        ('language' in value && (typeof value.language === 'string' || value.language === undefined)) ||
        ('coverImage' in value && (typeof value.coverImage === 'string' || value.coverImage === undefined)) ||
        ('note' in value && (typeof value.note === 'string' || value.note === undefined)) ||
        ('bookInfoAccessLevel' in value && (typeof value.bookInfoAccessLevel === 'number'))
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
bookInfoSchema.statics.generateBulkUpdateOperations = (updatableUsers) => {

    isOneOfPropertiesPresenceWithIdOfListObjects(updatableUsers);

    return updatableUsers.map(({ _id, bookTitle, stock, bookCategoryId, author, ISBN, Publisher, publishDate, language, coverImage, note, bookInfoAccessLevel }) => ({
        updateOne: {
            filter: { _id },
            update: {
                $set:
                {
                    bookTitle,
                    stock,
                    bookCategoryId,
                    author,
                    ISBN,
                    Publisher,
                    publishDate,
                    language,
                    coverImage,
                    note,
                    bookInfoAccessLevel,
                }
            },
        },
    }));
};

bookInfoSchema.statics.generateBulkDeleteOperations = (deletableUsers) => {

    return deletableUsers.map(({ _id, bookTitle, stock, bookCategoryId, author, ISBN, Publisher, publishDate, language, coverImage, note, bookInfoAccessLevel }) => ({
        deleteOne: {
            filter: {
                $or: [
                    { bookTitle },
                    { stock },
                    { bookCategoryId },
                    { author },
                    { ISBN },
                    { Publisher },
                    { publishDate },
                    { language },
                    { coverImage },
                    { note },
                    { bookInfoAccessLevel },
                ]
            },
        },
    }));
};

bookInfoSchema.statics.generateSearchOperations = (authRoleSerial, searchTermsOfUser) => {
    // Check for at least one of the specific properties presence
    isOneOfPropertiesPresence(searchTermsOfUser);

    const { bookTitle, stock, author, ISBN, Publisher, publishDate, language, coverImage, note, bookInfoAccessLevel } = searchTermsOfUser;
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
            bookTitle ? { bookTitle: { $regex: new RegExp(bookTitle, 'i') } } : { role: 999 },
            stock ? { stock: { $eq: stock } } : { role: 999 },
            author ? { author: { $regex: new RegExp(author, 'i') } } : { role: 999 },
            ISBN ? { ISBN: { $regex: new RegExp(ISBN, 'i') } } : { role: 999 },
            Publisher ? { Publisher: { $regex: new RegExp(Publisher, 'i') } } : { role: 999 },
            publishDate ? {
                publishDate: {
                    $gte: moment(publishDate).startOf('day').toISOString(),
                    $lt: moment(publishDate).endOf('day').toISOString(),
                },
            } : { role: 999 },
            language ? { language: { $regex: new RegExp(language, 'i') } } : { role: 999 },
            coverImage ? { coverImage: { $regex: new RegExp(coverImage, 'i') } } : { role: 999 },
            note ? { note: { $regex: new RegExp(note, 'i') } } : { role: 999 },
            bookInfoAccessLevel ? { bookInfoAccessLevel: { $eq: bookInfoAccessLevel } } : { role: 999 },
        ],
        $and: [
            { roleSerial: { $in: accessibilityRoleSerials } },
        ],
    };
};

// Mapping the mongoose model to the MongoDB collection
const bookInfoModel = mongoose.model('bookInfo', bookInfoSchema);

//export the model
module.exports = bookInfoModel;
