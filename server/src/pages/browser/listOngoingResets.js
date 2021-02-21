const PasswordReset = require("../../schema/passwordReset").PasswordReset;

module.exports = async function (req, res) {
    console.log("searching orgs, yay!");
    const resets = await PasswordReset.find({}); 
    res.send(resets);
}