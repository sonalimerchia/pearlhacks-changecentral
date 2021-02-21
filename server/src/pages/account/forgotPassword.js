const Org = require("../../schema/org").Org;
const PasswordReset = require("../../schema/org").Org;
const emailGenerator = require("../../utils/generateEmailContent");
const sendEmail = require("../../utils/sendEmail");
const v4 = require("uuid").v4;
const argon2 = require("argon2");
const FRONTEND_URL = require("../../constants").FRONTEND_URL;

module.exports = {
    forgotPassword: async function(req, res) {
        var org;
        if(!req.body.username && !req.body.email) {
            res.send("Error: please enter email or username");
            return;
        } else if (!req.body.username) {
            org = await Org.findOne({email: req.body.email});
        } else {
            org = await Org.findOne({username: req.body.username});
        }

        if (!org) {
            res.send("Error: no user found");
        } else {
            const token = v4();

            const link = FRONTEND_URL + '/change-password/' + token;
            const success = await sendEmail(org.email, emailGenerator.forgotPassword(org, link));
            if (!success) {
                res.send("There was an internal server error. Please try again later.");
            } else {
                const reset = new PasswordReset({
                    token: token, 
                    orgID: org._id
                }, );
            
                reset.save(function(err, results) {
                    console.log("results:", results);
                    console.log("error: ", err);
                });

                res.send("You have been sent an email with your password reset link");
            }
        }
    },
    resetPassword: async function(req, res) {
        const user = await PasswordReset.findOne({token: req.params.token});
        if (!user) {
            res.send("Invalid URL. If you were attempting to reset your url, your link may have expired. Please request a new link");
        } else if (!req.body.password) {
            res.send("Please enter a password");
        } else {
            user.password = await argon2.hash(req.body.password);
            user.save(function(err, results) {
                console.log("results:", results);
                console.log("error: ", err);
            });
            res.send(user);
        }
    }
}