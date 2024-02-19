const mongoose = require("mongoose");

//schema/Model
const reservationDetailSchema = new mongoose.Schema(
    {
        bookReservationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookReservation',
            required: [true, "Book reservation ID is required"],
        },
        bookInfoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookInfo',
            required: [true, "Book info ID is required"],
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required"],
            default: 1,
        },
        note: {
            type: String,
        },
    },
    { timestamps: false }
);

// Define the combined unique index
reservationDetailSchema.index({ bookReservationId: 1, bookInfoId: 1 }, { unique: true });

// Mapping the mongoose model to the MongoDB collection
const reservationDetailModel = mongoose.model('reservationDetail', reservationDetailSchema);

//export the model
module.exports = reservationDetailModel;
