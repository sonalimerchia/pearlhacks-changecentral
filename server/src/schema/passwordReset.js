let mongoose = require('mongoose');

const passwordSchema = {
    token: String, 
    orgID: String
}

const password = new mongoose.Schema(passwordSchema);
module.exports = {
    PasswordResetSchema: passwordSchema, 
    PasswordReset: mongoose.model("PasswordReset", password)
};
