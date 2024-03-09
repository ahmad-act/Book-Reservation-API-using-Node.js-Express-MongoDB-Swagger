require('dotenv').config();
const packageJson = require('../package.json');
const messageLog = require('./lib/messageLog');
const express = require('express')
const cors = require('cors');
const connectDB = require('./lib/dbConnection');
const swagger = require('./lib/swagger');
const cookieParser = require('cookie-parser');
const userModel = require('./models/userModel');
const userRoleModel = require('./models/userRoleModel');
const bookCategoryModel = require('./models/bookCategoryModel');
const { checkUser } = require('./middlewares/authMiddleware');



connectDB();

const app = express()

// Enable CORS for all routes
app.use(cors());

// app.use(cors({
//     origin: 'http://example.com' // Allow requests only from http://example.com
// }));


app.use(express.json());
app.use(cookieParser());

// Serve static files from the 'uploads' directory
app.use('/v1/uploads', express.static('uploads'));

app.get('*', checkUser);

// Serve Swagger UI
app.use('/v1/api-docs',
    swagger.swaggerUi.serve,
    swagger.swaggerUi.setup(swagger.swaggerSpec)
);

app.use('/v1/user', require('./routes/userRoutes'));
app.use('/v1/user-role', require('./routes/userRoleRoutes'));
app.use('/v1/enum-table', require('./routes/enumTableRoutes'));
app.use('/v1/book-info', require('./routes/bookInfoRoutes'));
app.use('/v1/book-reservation', require('./routes/bookReservationRoutes'));
app.use('/v1/book-category', require('./routes/bookCategoryRoutes'));

app.get('/', (req, res) => {
    //res.send('nodejs-express-mongodb-CURD-basic-1')
    res.redirect('/v1/api-docs');
})

//PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {

    // call the function to create the default user roles
    await userRoleModel.createDefaultUserRoles();
    // call the function to create the default admin user
    await userModel.createDefaultAdminUser();
    // call the function to create the default book category
    await bookCategoryModel.createDefaultBookCategory();

    messageLog(`${packageJson.name} app, version ${packageJson.version}, is listening on port ${PORT}`)
})