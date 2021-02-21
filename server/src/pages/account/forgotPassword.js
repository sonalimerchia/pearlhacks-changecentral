const Org = require("../../schema/org").Org;
const PasswordReset = require("../../schema/passwordReset").PasswordReset;
const emailGenerator = require("../../utils/generateEmailContent");
const sendEmail = require("../../utils/sendEmail");
const v4 = require("uuid").v4;
const argon2 = require("argon2");
const FRONTEND_URL = require("../../constants").FRONTEND_URL;

module.exports = {
    forgotPassword: async function(req, res) {
        if(!req.body.email) {
            res.send("Error: please enter email");
            return;
        } 
        const org = await Org.findOne({email: req.body.email});

        if (!org) {
            res.send("Error: no user found");
        } else {
            const token = v4();
            const link = FRONTEND_URL + '/change-password/' + token;
            const content = emailGenerator.forgotPassword(org, link);
            const success = await sendEmail(org.email, content);

            if (!success) {
                res.send("There was an internal server error. Please try again later.");
            } else {
                const reset = new PasswordReset({
                    token: token, 
                    orgID: org._id
                });
                
                PasswordReset.findOneAndUpdate();

                reset.save(function(err, results) {
                    console.log("results:", results);
                    console.log("error: ", err);
                });

                res.send(link);
            }
        }
    },

    resetPassword: async function(req, res) {
        console.log(req.params.token);
        const reset = await PasswordReset.findOne({token: req.params.token});
        console.log(reset);

        if (!reset) {
            res.send("Invalid URL. If you were attempting to reset your url, your link may have expired. Please request a new link");
        } else if (!req.body.password) {
            res.send("Please enter a password");
        } else {
            const user = await Org.findById(reset.orgID);
            user.password = await argon2.hash(req.body.password);
            user.save(function(err, results) {
                console.log("results:", results);
                console.log("error: ", err);
            });
            res.send(user);
        }
    }
}
