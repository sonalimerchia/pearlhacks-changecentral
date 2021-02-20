const Org = require("../../schema/org").Org;
const argon2 = require("argon2");
const cookieName = require("../../constants").cookieName;

module.exports = async function (req, res) {
    console.log("in the login! yay!");
    var user;
    if (req.body.username) {
        user = await Org.findOne({username: req.body.username});   
    } else if (req.body.email) {
        user = await Org.findOne({email: req.body.username});
    }

    if (user) {

        const pass = await argon2.verify(user.password, req.body.password);
        if (pass) {
            console.log("setting cookie:", user._id)
            try {
                res.cookie(cookieName, user._id);
            } catch (error) {
                console.log(error);
            }
            res.send(user);
            return null;
        } else {
            res.send("incorrect password");
            return null;
        }
    } else {
        res.send("incorrect email/username");
        return null;
    }
}