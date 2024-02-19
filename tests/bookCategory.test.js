const connectDB = require('../src/lib/dbConnection');
const { describe, it, beforeEach, afterEach } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const bookCategoryModel = require('../src/models/bookCategoryModel');
const bookCategoryBL = require('../src/businessLayer/bookCategoryBL');
// const sinon = require('sinon');
// const { mockReq, mockRes } = require('sinon-express-mock'); // For mocking Express request and response objects


chai.use(chaiAsPromised);
const { expect } = chai;

// Establish database connection before tests
before(async () => {
    const conn = await connectDB(process.env.MONGODB_TEST_URL);
    //conn.connection.db.dropDatabase(); // Drop the database before testing
    bookCategoryModel.collection.drop();
});


describe('Book Category Business Layer', () => {
    describe('Not found - When DB is cleaned', () => {
        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategoryId = '65b242c1d5eb7d24f88e34f9'
        const bookCategoryIds = ['65b242c1d5eb7d24f88e34f9', '65b242c1d5eb7d24f88e34fa']

        const bookCategory = {
            bookCategoryName: "bookCategoryName1 updated",
            bookCategoryAccessLevel: 1
        }

        const bookCategories = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookCategoryName: "bookCategoryName2 updated",
                bookCategoryAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookCategoryName: "bookCategoryName3 updated",
                bookCategoryAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookCategoryName: "bookCategoryName",
            bookCategoryAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookCategoryName',
            sortOrder: 1
        }

        it('getBookCategories', async () => {
            await expect(bookCategoryBL.getBookCategories(authUser, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('getBookCategoriesByIds', async () => {
            await expect(bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBookCategoryById', async () => {
            await expect(bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBulkBookCategories', async () => {
            await expect(bookCategoryBL.updateBulkBookCategories(authUser, bookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookCategoryById', async () => {
            await expect(bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBulkBookCategories', async () => {
            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('searchBookCategory', async () => {
            await expect(bookCategoryBL.searchBookCategory(authUser, searchTerms, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });

    describe('Happy Path - Create, Get, Update and Delete', () => {
        let newBookCategoryId = null;
        let newBookCategoryIds = [];

        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategory = {
            bookCategoryName: 'bookCategoryName1',
            bookCategoryAccessLevel: 1,
        }

        const bookCategoryUpdate = {
            bookCategoryName: "bookCategoryName1 updated",
            bookCategoryAccessLevel: 1
        }

        const newBookCategories = [
            {
                bookCategoryName: "bookCategoryName2",
                bookCategoryAccessLevel: 2
            },
            {
                bookCategoryName: "bookCategoryName3",
                bookCategoryAccessLevel: 3
            }
        ]

        it('createBookCategory', async () => {

            await expect(bookCategoryBL.createBookCategory(authUser, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookCategoryId = result._id;
                    expect(result).to.have.property('bookCategoryName').that.equals('bookCategoryName1');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, newBookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('bookCategoryName').that.equals('bookCategoryName1');
                })
                .catch((error) => {
                    throw error;
                });
        });
        //search


        it('updateBookCategoryById', async () => {
            await expect(bookCategoryBL.updateBookCategoryById(authUser, newBookCategoryId, bookCategoryUpdate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookCategoryName').that.equals('bookCategoryName1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, newBookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('bookCategoryName').that.equals('bookCategoryName1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('deleteBookCategoryById', async () => {
            await expect(bookCategoryBL.deleteBookCategoryById(authUser, newBookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookCategoryName').that.equals('bookCategoryName1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, newBookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        // Bulk Operations
        it('createBulkBookCategory', async () => {
            await expect(bookCategoryBL.createBulkBookCategory(authUser, newBookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookCategoryIds = result.map(bookCategory => bookCategory._id.toString());
                    expect(result).to.be.an('array').with.lengthOf(2);
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('updateBulkBookCategories', async () => {

            const updateBookCategories = [
                {
                    _id: newBookCategoryIds[0],
                    bookCategoryName: "bookCategoryName2",
                    bookCategoryAccessLevel: 2
                },
                {
                    _id: newBookCategoryIds[1],
                    bookCategoryName: "bookCategoryName3",
                    bookCategoryAccessLevel: 3
                }
            ]

            await expect(bookCategoryBL.updateBulkBookCategories(authUser, updateBookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookCategory).to.have.property('modifiedCount').that.equals(2);
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('deleteBulkBookCategories', async () => {
            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, newBookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookCategory).to.have.property('deletedCount').that.equals(2);
                })
                .catch((error) => {
                    throw error;
                });
        });
    });

    describe('Null ID', () => {
        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategoryId = null
        const bookCategoryIds = null

        const bookCategory = {
            bookCategoryName: "bookCategoryName1 updated",
            bookCategoryAccessLevel: 1
        }

        const bookCategories = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookCategoryName: "bookCategoryName2 updated",
                bookCategoryAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookCategoryName: "bookCategoryName3 updated",
                bookCategoryAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookCategoryName: "bookCategoryName",
            bookCategoryAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookCategoryName',
            sortOrder: 1
        }

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('getBookCategoriesByIds', async () => {
            await expect(bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookCategoryById', async () => {
            await expect(bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBulkBookCategories', async () => {
            await expect(bookCategoryBL.updateBulkBookCategories(authUser, bookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookCategoryById', async () => {
            await expect(bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('deleteBulkBookCategories', async () => {
            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

    });

    describe('Invalid ID', () => {
        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategoryId = '123'
        const bookCategoryIds = '123,456'

        const bookCategory = {
            bookCategoryName: "bookCategoryName1 updated",
            bookCategoryAccessLevel: 1
        }

        const bookCategories = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookCategoryName: "bookCategoryName2 updated",
                bookCategoryAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookCategoryName: "bookCategoryName3 updated",
                bookCategoryAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookCategoryName: "bookCategoryName",
            bookCategoryAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookCategoryName',
            sortOrder: 1
        }

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('getBookCategoriesByIds', async () => {
            await expect(bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookCategoryById', async () => {
            await expect(bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBulkBookCategories', async () => {
            await expect(bookCategoryBL.updateBulkBookCategories(authUser, bookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookCategoryById', async () => {
            await expect(bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('deleteBulkBookCategories', async () => {
            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

    });

    describe('Absent ID', () => {
        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategoryId = '65b242c1d5eb7d24f88e34f9'
        const bookCategoryIds = '65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa'

        const bookCategory = {
            bookCategoryName: "bookCategoryName1 updated",
            bookCategoryAccessLevel: 1
        }

        const bookCategories = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookCategoryName: "bookCategoryName2 updated",
                bookCategoryAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookCategoryName: "bookCategoryName3 updated",
                bookCategoryAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookCategoryName: "bookCategoryName",
            bookCategoryAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookCategoryName',
            sortOrder: 1
        }

        it('getBookCategoryById', async () => {
            await expect(bookCategoryBL.getBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('getBookCategoriesByIds', async () => {
            await expect(bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookCategoryById', async () => {
            await expect(bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBulkBookCategories', async () => {
            await expect(bookCategoryBL.updateBulkBookCategories(authUser, bookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookCategoryById', async () => {
            await expect(bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBulkBookCategories', async () => {
            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

    });

    describe('Duplicate Value', () => {
        let newBookCategoryId = null;
        let newBookCategoryIds = [];

        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookCategory = {
            bookCategoryName: 'bookCategoryName1',
            bookCategoryAccessLevel: 1,
        }

        const newBookCategories = [
            {
                bookCategoryName: "bookCategoryName2",
                bookCategoryAccessLevel: 2
            },
            {
                bookCategoryName: "bookCategoryName3",

                bookCategoryAccessLevel: 3
            }
        ]
        it('createBookCategory', async () => {

            await expect(bookCategoryBL.createBookCategory(authUser, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookCategoryId = result._id;
                    expect(result).to.have.property('bookCategoryName').that.equals('bookCategoryName1');
                })
                .catch((error) => {
                    throw error;
                });

            await expect(bookCategoryBL.createBookCategory(authUser, bookCategory)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('already exists');
                });

            await expect(bookCategoryBL.deleteBookCategoryById(authUser, newBookCategoryId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookCategoryName').that.includes('bookCategoryName1');
                })
                .catch((error) => {
                    throw error;
                });
        });

        // Bulk Operations
        it('createBulkBookCategory', async () => {
            await expect(bookCategoryBL.createBulkBookCategory(authUser, newBookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookCategoryIds = result.map(bookCategory => bookCategory._id.toString());
                    expect(result).to.be.an('array').with.lengthOf(2);
                })
                .catch((error) => {
                    throw error;
                });


            await expect(bookCategoryBL.createBulkBookCategory(authUser, newBookCategories)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.an('array').with.lengthOf(0);
                })
                .catch((error) => {
                    throw error;
                });

            await expect(bookCategoryBL.deleteBulkBookCategories(authUser, newBookCategoryIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookCategory).to.have.property('deletedCount').that.equals(2);
                })
                .catch((error) => {
                    throw error;
                });
        });

    });





    describe('User role 2 scope', () => {
        // Access level 2 test
        it('To do', async () => {
        });
    });

    describe('User role 3 scope', () => {
        // Access level 3 test
        it('To do', async () => {
        });
    });
});
