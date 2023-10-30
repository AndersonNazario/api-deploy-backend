require('dotenv').config()
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.ELEPHANTSQL_HOST,
        port: process.env.ELEPHANTSQL_PORT,
        user: process.env.ELEPHANTSQL_USER,
        password: process.env.ELEPHANTSQL_PASSWORD,
        database: process.env.ELEPHANTSQL_DATABASE,
        ssl: { rejectUnauthorized: false }

    },
});

module.exports = knex

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         ssl: { rejectUnauthorized: false }

//     },
// });

// module.exports = knex