require('dotenv').config();

const config = {
    port: process.env.PORT || 4000,
    dbUrl: process.env.MONGODB_CNN,
    user_email: process.env.USER_EMAIL,
    pass_email: process.env.PASS_EMAIL
}

module.exports = config