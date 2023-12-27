require('dotenv').config();

module.exports = {
    node_env: process.env.NODE_ENV,        
    port : process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    development: {
        db_username: process.env.DB_USER,
        db_password: process.env.DB_PASSWORD,
        db_name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',                
    },

    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        db_name: process.env.DB_NAME,
        host: '',
        dialect: 'mysql',
    },
    production: {        
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        db_name: process.env.DB_NAME,
        host: '',
        dialect: 'mysql',
    },
};