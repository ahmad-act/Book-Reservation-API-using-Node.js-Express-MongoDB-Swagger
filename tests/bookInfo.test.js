const connectDB = require('../src/lib/dbConnection');
const { describe, it, beforeEach, afterEach } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const bookInfoModel = require('../src/models/bookInfoModel');
const bookInfoBL = require('../src/businessLayer/bookInfoBL');
// const sinon = require('sinon');
// const { mockReq, mockRes } = require('sinon-express-mock'); // For mocking Express request and response objects


chai.use(chaiAsPromised);
const { expect } = chai;

// Establish database connection before tests
before(async () => {
    const conn = await connectDB(process.env.MONGODB_TEST_URL);
    //conn.connection.db.dropDatabase(); // Drop the database before testing
    bookInfoModel.collection.drop();
});


describe('Book Info Business Layer', () => {
    describe('Not found - When DB is cleaned', () => {
        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookInfoId = '65b242c1d5eb7d24f88e34f9'
        const bookInfoIds = ['65b242c1d5eb7d24f88e34f9', '65b242c1d5eb7d24f88e34fa']

        const bookInfo = {
            bookTitle: "bookTitle1 updated",
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1
        }

        const bookInfos = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookTitle: "bookTitle2 updated",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookTitle: "bookTitle3 updated",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookTitle: "bookTitle",
            author: "author",
            stock: 1,
            bookInfoAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookTitle',
            sortOrder: 1
        }

        it('getBookInfos', async () => {
            await expect(bookInfoBL.getBookInfos(authUser, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('getBookInfosByIds', async () => {
            await expect(bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBookInfoById', async () => {
            await expect(bookInfoBL.updateBookInfoById(authUser, bookInfoId, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBulkBookInfos', async () => {
            await expect(bookInfoBL.updateBulkBookInfos(authUser, bookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookInfoById', async () => {
            await expect(bookInfoBL.deleteBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBulkBookInfos', async () => {
            await expect(bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('searchBookInfo', async () => {
            await expect(bookInfoBL.searchBookInfo(authUser, searchTerms, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });
    });

    describe('Happy Path - Create, Get, Update and Delete', () => {
        let newBookInfoId = null;
        let newBookInfoIds = [];

        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookInfo = {
            bookTitle: 'bookTitle1',
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1,
        }

        const bookInfoUpdate = {
            bookTitle: "bookTitle1 updated",
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1
        }

        const newBookInfos = [
            {
                bookTitle: "bookTitle2",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                bookTitle: "bookTitle3",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]

        it('createBookInfo', async () => {

            await expect(bookInfoBL.createBookInfo(authUser, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookInfoId = result._id;
                    expect(result).to.have.property('bookTitle').that.equals('bookTitle1');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, newBookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('bookTitle').that.equals('bookTitle1');
                })
                .catch((error) => {
                    throw error;
                });
        });
        //search


        it('updateBookInfoById', async () => {
            await expect(bookInfoBL.updateBookInfoById(authUser, newBookInfoId, bookInfoUpdate)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookTitle').that.equals('bookTitle1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, newBookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result[0]).to.have.property('bookTitle').that.equals('bookTitle1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('deleteBookInfoById', async () => {
            await expect(bookInfoBL.deleteBookInfoById(authUser, newBookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookTitle').that.equals('bookTitle1 updated');
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, newBookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        // Bulk Operations
        it('createBulkBookInfo', async () => {
            await expect(bookInfoBL.createBulkBookInfo(authUser, newBookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookInfoIds = result.map(bookInfo => bookInfo._id.toString());
                    expect(result).to.be.an('array').with.lengthOf(2);
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('updateBulkBookInfos', async () => {

            const updateBookInfos = [
                {
                    _id: newBookInfoIds[0],
                    bookTitle: "bookTitle2",
                    author: "author2",
                    stock: 1,
                    bookInfoAccessLevel: 2
                },
                {
                    _id: newBookInfoIds[1],
                    bookTitle: "bookTitle3",
                    author: "author3",
                    stock: 1,
                    bookInfoAccessLevel: 3
                }
            ]

            await expect(bookInfoBL.updateBulkBookInfos(authUser, updateBookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookInfo).to.have.property('modifiedCount').that.equals(2);
                })
                .catch((error) => {
                    throw error;
                });
        });

        it('deleteBulkBookInfos', async () => {
            await expect(bookInfoBL.deleteBulkBookInfos(authUser, newBookInfoIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookInfo).to.have.property('deletedCount').that.equals(2);
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

        const bookInfoId = null
        const bookInfoIds = null

        const bookInfo = {
            bookTitle: "bookTitle1 updated",
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1
        }

        const bookInfos = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookTitle: "bookTitle2 updated",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookTitle: "bookTitle3 updated",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookTitle: "bookTitle",
            bookInfoAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookTitle',
            sortOrder: 1
        }

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('getBookInfosByIds', async () => {
            await expect(bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookInfoById', async () => {
            await expect(bookInfoBL.updateBookInfoById(authUser, bookInfoId, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBulkBookInfos', async () => {
            await expect(bookInfoBL.updateBulkBookInfos(authUser, bookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookInfoById', async () => {
            await expect(bookInfoBL.deleteBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('deleteBulkBookInfos', async () => {
            await expect(bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds)).to.eventually.be.fulfilled
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

        const bookInfoId = '123'
        const bookInfoIds = '123,456'

        const bookInfo = {
            bookTitle: "bookTitle1 updated",
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1
        }

        const bookInfos = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookTitle: "bookTitle2 updated",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookTitle: "bookTitle3 updated",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookTitle: "bookTitle",
            bookInfoAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookTitle',
            sortOrder: 1
        }

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('getBookInfosByIds', async () => {
            await expect(bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookInfoById', async () => {
            await expect(bookInfoBL.updateBookInfoById(authUser, bookInfoId, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBulkBookInfos', async () => {
            await expect(bookInfoBL.updateBulkBookInfos(authUser, bookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookInfoById', async () => {
            await expect(bookInfoBL.deleteBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

        it('deleteBulkBookInfos', async () => {
            await expect(bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds)).to.eventually.be.fulfilled
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

        const bookInfoId = '65b242c1d5eb7d24f88e34f9'
        const bookInfoIds = '65b242c1d5eb7d24f88e34f9,65b242c1d5eb7d24f88e34fa'

        const bookInfo = {
            bookTitle: "bookTitle1 updated",
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1
        }

        const bookInfos = [
            {
                _id: "65b242c1d5eb7d24f88e34f9",
                bookTitle: "bookTitle2 updated",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                _id: "65b242c1d5eb7d24f88e34fa",
                bookTitle: "bookTitle3 updated",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]

        const searchTerms = {
            bookTitle: "bookTitle",
            bookInfoAccessLevel: 10
        }

        const pagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookTitle',
            sortOrder: 1
        }

        it('getBookInfoById', async () => {
            await expect(bookInfoBL.getBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('getBookInfosByIds', async () => {
            await expect(bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });

        });

        it('updateBookInfoById', async () => {
            await expect(bookInfoBL.updateBookInfoById(authUser, bookInfoId, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });

        });

        it('updateBulkBookInfos', async () => {
            await expect(bookInfoBL.updateBulkBookInfos(authUser, bookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBookInfoById', async () => {
            await expect(bookInfoBL.deleteBookInfoById(authUser, bookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('not found');
                });
        });

        it('deleteBulkBookInfos', async () => {
            await expect(bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('valid');
                });
        });

    });

    describe('Duplicate Value', () => {
        let newBookInfoId = null;
        let newBookInfoIds = [];

        const authUser = {
            roleSerial: 1, // Admin role
        };

        const bookInfo = {
            bookTitle: 'bookTitle1',
            author: "author1",
            stock: 1,
            bookInfoAccessLevel: 1,
        }

        const newBookInfos = [
            {
                bookTitle: "bookTitle2",
                author: "author2",
                stock: 1,
                bookInfoAccessLevel: 2
            },
            {
                bookTitle: "bookTitle3",
                author: "author3",
                stock: 1,
                bookInfoAccessLevel: 3
            }
        ]
        it('createBookInfo', async () => {

            await expect(bookInfoBL.createBookInfo(authUser, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookInfoId = result._id;
                    expect(result).to.have.property('bookTitle').that.equals('bookTitle1');
                })
                .catch((error) => {
                    throw error;
                });

            await expect(bookInfoBL.createBookInfo(authUser, bookInfo)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.null;
                })
                .catch((error) => {
                    expect(error).to.have.property('message').that.includes('already exists');
                });

            await expect(bookInfoBL.deleteBookInfoById(authUser, newBookInfoId)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.have.property('bookTitle').that.includes('bookTitle1');
                })
                .catch((error) => {
                    throw error;
                });
        });

        // Bulk Operations
        it('createBulkBookInfo', async () => {
            await expect(bookInfoBL.createBulkBookInfo(authUser, newBookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    newBookInfoIds = result.map(bookInfo => bookInfo._id.toString());
                    expect(result).to.be.an('array').with.lengthOf(2);
                })
                .catch((error) => {
                    throw error;
                });


            await expect(bookInfoBL.createBulkBookInfo(authUser, newBookInfos)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result).to.be.an('array').with.lengthOf(0);
                })
                .catch((error) => {
                    throw error;
                });

            await expect(bookInfoBL.deleteBulkBookInfos(authUser, newBookInfoIds)).to.eventually.be.fulfilled
                .then((result) => {
                    expect(result.bookInfo).to.have.property('deletedCount').that.equals(2);
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
