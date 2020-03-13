const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// ======================================
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// ======================================

require('dotenv').config();

// Bring routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const formRoutes = require('./routes/form');

// App
const app = express();


// ======================================
// Construct a schema, using GraphQL schema language
const db = {
    persons: [
        { id: '1', email: 'alex@gmail.com', name: 'alex'},
        { id: '2', email: 'alexa@gmail.com', name: 'alexa'}
    ]
};

const schema = buildSchema(`
    type Query {
        persons: [TPerson!]!
    }

    type Mutation {
        addTPerson(email: String!, name: String):TPerson
    }

    type TPerson {
        id: ID!
        email: String!
        name: String
        avatarUrl: String
    }
`);

// The root provides a resolver function for each API endpoint
const root = {
    persons: () => db.persons,
    addTPerson: ({ email, name }) => {
        const person = {
            id: Date.now(),
            email,
            name
        }

        db.persons.push(person)

        return person
    }
}
// ======================================


// Database
mongoose
    .connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB is connected'));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// ======================================
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
// ======================================

// CORS
if(process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

// Routes Middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);
app.use('/api', formRoutes);

// Port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`GRAPHQL and Server is running on port ${port}`);
});