const connectDB = require('../src/lib/dbConnection');
const { describe, it, beforeEach, afterEach } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const bookReservationModel = require('../src/models/bookReservationModel');
const bookReservationBL = require('../src/businessLayer/bookReservationBL');
// const sinon = require('sinon');
// const { mockReq, mockRes } = require('sinon-express-mock'); // For mocking Express request and response objects


chai.use(chaiAsPromised);
const { expect } = chai;

// Establish database connection before tests
before(async () => {
    const conn = await connectDB(process.env.MONGODB_TEST_URL);
    //conn.connection.db.dropDatabase(); // Drop the database before testing
    bookReservationModel.collection.drop();
});

describe('Book Reservation Business Layer', () => {

    let newBookReservationId = null;

    const authUser = {
        roleSerial: 1, // Admin role
    };

    // const bookReservation = {
    //     reservationRef: 'reservationRef1',
    //     userId: '65b01c2b146a1f6c0d00789e',
    //     reservationStatusNum: 1,
    //     reservationDate: new Date(),
    //     reservationAccessLevel: 1,
    //     reservationComment: 'reservationRef 1 comment',

    // }

    const bookReservation = {
        user: {
            customerName: 'John Doe',
            customerEmail: 'john.doe@example.com',
            customerPhone: '+1234567890',
            address: {
                street: '123 Main Street',
                postalCode: '12345',
                city: 'Cityville',
                state: 'Stateville',
                country: 'Countryville'
            }
        },
        reservationRef: 'reservationRef1',
        reservationStatusNum: 1,
        reservationDate: '',
        reservationAccessLevel: 1,
        reservationComment: 'This is a sample reservation comment.',
        reservationDetails: [
            { bookInfoId: '65b23453937af637d0cb130d', quantity: 2 },
            { bookInfoId: '65b23453937af637d0cb130e', quantity: 1 }
        ]
    }



    const bookReservationUpdate = {
        reservationRef: 'reservationRef1 updated',
        userId: '65b23453937af637d0cb130d',
        reservationStatusNum: 1,
        reservationDate: '2024-01-28T12:00:00.000Z',
        reservationAccessLevel: 2,
        reservationComment: 'Updated reservation comment',
        reservationDetails: [
            {
                _id: '65b23453937af637d0cb130e',
                reservationDetailsName: 'updatedDetailTable1',
                reservationDetailsAccessLevel: 7,
                reservationDetailsDescription: 'Updated Detail Table 1'
            },
            {
                _id: '65b23453937af637d0cb130f',
                reservationDetailsName: 'updatedDetailTable2',
                reservationDetailsAccessLevel: 12,
                reservationDetailsDescription: 'Updated Detail Table 2'
            }
        ]
    }

    const bookReservationDuplicate = {
        user: {
            customerName: 'John Doe',
            customerEmail: 'john.doe@example.com',
            customerPhone: '+1234567890',
            address: {
                street: '123 Main Street',
                postalCode: '12345',
                city: 'Cityville',
                state: 'Stateville',
                country: 'Countryville'
            }
        },
        reservationRef: 'reservationRefDuplicate',
        reservationStatusNum: 1,
        reservationDate: '',
        reservationAccessLevel: 1,
        reservationComment: 'This is a sample reservation comment.',
        reservationDetails: [
            { bookInfoId: '65b23453937af637d0cb130d', quantity: 2 },
            { bookInfoId: '65b23453937af637d0cb130e', quantity: 1 }
        ]
    }

    const searchTerms = {
        reservationRef: "reservationRef",
        reservationComment: "reservationRef 5",
        reservationAccessLevel: 10
    }

    const pagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'reservationRef',
        sortOrder: 1
    }

    const bookReservationIdNull = null
    const bookReservationIdInvalid = '123'
    const bookReservationIdValidFormat = '65b242c1d5eb7d24f88e34f9'

    describe('Not found - When DB is cleaned', () => {
        // const authUser = {
        //     roleSerial: 1, // Admin role
        // };

        // const bookReservationId = '65b242c1d5eb7d24f88e34f9'

        // const bookReservation = {
        //     reservationRef: "reservationRef1 updated",
        //     reservationComment: "reservationRef 1 updated",
        //     reservationAccessLevel: 1
        // }

        // const searchTerms = {
        //     reservationRef: "reservationRef",
        //     reservationComment: "reservationRef 5",
        //     reservationAccessLevel: 10
        // }

        // const pagingQuery = {
        //     page: 1,
        //     pageSize: 100,
        //     sortBy: 'reservationRef',
        //     sortOrder: 1
        // }

        it('getBookReservations', async () => {
            await expect(bookReservationBL.getBookReservations(authUser, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, bookReservationIdValidFormat)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBookReservationById', async () => {
            await expect(bookReservationBL.updateBookReservationById(authUser, bookReservationIdValidFormat, bookReservationUpdate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('deleteBookReservationById', async () => {
            await expect(bookReservationBL.deleteBookReservationById(authUser, bookReservationIdValidFormat)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('searchBookReservation', async () => {
            await expect(bookReservationBL.searchBookReservation(authUser, searchTerms, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });

    describe('Happy Path - Create, Get, Update and Delete', () => {


        it('createBookReservation', async () => {

            await expect(bookReservationBL.createBookReservation(authUser, bookReservation)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookReservationId = result._id;
                    expect(result).to.have.property('reservationRef').that.equals('reservationRef1');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, newBookReservationId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('reservationRef').that.equals('reservationRef1');
                })
                .catch((error) => {
                    throw error;
                });
        });
        //search


        it('updateBookReservationById', async () => {
            await expect(bookReservationBL.updateBookReservationById(authUser, newBookReservationId, bookReservationUpdate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('reservationRef').that.equals('reservationRef1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, newBookReservationId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('reservationRef').that.equals('reservationRef1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('deleteBookReservationById', async () => {
            await expect(bookReservationBL.deleteBookReservationById(authUser, newBookReservationId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('reservationRef').that.equals('reservationRef1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, newBookReservationId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });

    describe('Null ID', () => {
        // const authUser = {
        //     roleSerial: 1, // Admin role
        // };

        // const bookReservationId = null
        // const bookReservationIds = null

        // const bookReservation = {
        //     reservationRef: "reservationRef1 updated",
        //     reservationComment: "reservationRef 1 updated",
        //     reservationAccessLevel: 1
        // }


        // const searchTerms = {
        //     reservationRef: "reservationRef",
        //     reservationComment: "reservationRef 5",
        //     reservationAccessLevel: 10
        // }

        // const pagingQuery = {
        //     page: 1,
        //     pageSize: 100,
        //     sortBy: 'reservationRef',
        //     sortOrder: 1
        // }

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, bookReservationIdNull)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('updateBookReservationById', async () => {
            await expect(bookReservationBL.updateBookReservationById(authUser, bookReservationIdNull, bookReservation)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('deleteBookReservationById', async () => {
            await expect(bookReservationBL.deleteBookReservationById(authUser, bookReservationIdNull)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });

    describe('Invalid ID', () => {
        // const authUser = {
        //     roleSerial: 1, // Admin role
        // };

        // const bookReservationId = '123'

        // const bookReservation = {
        //     reservationRef: "reservationRef1 updated",
        //     reservationComment: "reservationRef 1 updated",
        //     reservationAccessLevel: 1
        // }

        // const searchTerms = {
        //     reservationRef: "reservationRef",
        //     reservationComment: "reservationRef 5",
        //     reservationAccessLevel: 10
        // }

        // const pagingQuery = {
        //     page: 1,
        //     pageSize: 100,
        //     sortBy: 'reservationRef',
        //     sortOrder: 1
        // }

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, bookReservationIdInvalid)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('Invalid');
                });
        });

        // it('updateBookReservationById', async () => {
        //     await expect(bookReservationBL.updateBookReservationById(authUser, bookReservationIdInvalid, bookReservationUpdate)).to.eventually.be.fulfilled
        //         .then((result) => {
        //             expect(result).to.be.null;
        //         })
        //         .catch((error) => {
        //             expect(error).to.have.property('message').that.includes('CastError');
        //         });

        // });

        // it('deleteBookReservationById', async () => {
        //     await expect(bookReservationBL.deleteBookReservationById(authUser, bookReservationIdInvalid)).to.eventually.be.fulfilled
        //         .then((result) => {
        //             expect(result).to.be.null;
        //         })
        //         .catch((error) => {
        //             expect(error).to.have.property('message').that.includes('CastError');
        //         });
        // });
    });

    describe('Absent ID', () => {
        // const authUser = {
        //     roleSerial: 1, // Admin role
        // };

        // const bookReservationId = '65b242c1d5eb7d24f88e34f9'

        // const bookReservation = {
        //     reservationRef: "reservationRef1 updated",
        //     reservationComment: "reservationRef 1 updated",
        //     reservationAccessLevel: 1
        // }

        // const bookReservations = [
        //     {
        //         _id: "65b242c1d5eb7d24f88e34f9",
        //         reservationRef: "reservationRef2 updated",
        //         reservationComment: "reservationRef 2 updated",
        //         reservationAccessLevel: 2
        //     },
        //     {
        //         _id: "65b242c1d5eb7d24f88e34fa",
        //         reservationRef: "reservationRef3 updated",
        //         reservationComment: "reservationRef 3 updated",
        //         reservationAccessLevel: 3
        //     }
        // ]

        // const searchTerms = {
        //     reservationRef: "reservationRef",
        //     reservationComment: "reservationRef 5",
        //     reservationAccessLevel: 10
        // }

        // const pagingQuery = {
        //     page: 1,
        //     pageSize: 100,
        //     sortBy: 'reservationRef',
        //     sortOrder: 1
        // }

        it('getBookReservationById', async () => {
            await expect(bookReservationBL.getBookReservationById(authUser, bookReservationIdValidFormat)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('updateBookReservationById', async () => {
            await expect(bookReservationBL.updateBookReservationById(authUser, bookReservationIdValidFormat, bookReservationUpdate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('deleteBookReservationById', async () => {
            await expect(bookReservationBL.deleteBookReservationById(authUser, bookReservationIdValidFormat)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });







    describe('Duplicate Value', () => {
        // let newBookReservationId = null;

        // const authUser = {
        //     roleSerial: 1, // Admin role
        // };

        // const bookReservation = {
        //     reservationRef: 'reservationRef1',
        //     reservationComment: 'reservationRef 1',
        //     reservationAccessLevel: 1,
        // }

        it('createBookReservation', async () => {

            await expect(bookReservationBL.createBookReservation(authUser, bookReservationDuplicate)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookReservationId = result._id;
                    expect(result).to.have.property('reservationRef').that.equals('reservationRefDuplicate');
                })
                .catch((error) => {
                    throw error;
                });

            await expect(bookReservationBL.createBookReservation(authUser, bookReservationDuplicate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('Invalid');
                });

            await expect(bookReservationBL.deleteBookReservationById(authUser, newBookReservationId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('reservationRef').that.includes('reservationRefDuplicate');
                })
                .catch((error) => {
                    throw error;
                });
        });

    });
});
