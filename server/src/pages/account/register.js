const Org = require("../../schema/user").Org;
const argon2 = require("argon2");
const cookieName = require("../../constants").cookieName;

module.exports = async function (req, res) {
    console.log("in the register! yay!");

    if (!req.body.username) {
        res.send("Error: must enter a username");
        return null;
    } else if (!req.body.email) {
        res.send("Error: must enter an email");
        return null;
    } else if (!req.body.password) {
        res.send("Error: must enter a password")
        return null;
    } else if (req.body.password != req.body.confirmPassword) {
        res.send("Error: password and confirm password do not match");
        return null;
    }

    const withSameEmail = await Org.findOne({email: req.body.email});
    if (withSameEmail) {
        res.send("There is already an account affiliated with this email");
        return null;
    }

    const withSameUsername = await Org.findOne({username: req.body.username});
    if (withSameUsername) {
        res.send("This username is already taken");
        return null;
    }

    console.log("email: ", withSameEmail);
    console.log("username: ", withSameUsername);

    const user = new Org({
        username: req.body.username, 
        email: req.body.email,
        password: await argon2.hash(req.body.password)
    });

    user.save(function(err, results) {
        console.log("results:", results);
        console.log("error: ", err);
    });

    res.send(user);
}