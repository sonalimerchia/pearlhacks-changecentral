let mongoose = require('mongoose');

const passwordSchema = {
    token: String, 
    url: String, 
    orgID: String
}

const password = new mongoose.Schema(passwordSchema & { createdAt: { type: Date, expires: 60*60*24*3 }});
module.exports = {
    PasswordResetSchema: passwordSchema, 
    PasswordReset: mongoose.model("PasswordReset", password)
};