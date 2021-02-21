const Org = require("../../schema/org").Org;
const argon2 = require("argon2");
const cookieName = require("../../constants").cookieName;

module.exports = async function (req, res) {
    console.log("in the register! yay!");

    if (!req.body.username) {
        res.send({
            field: "username", 
            message: "must add username"
        });
        return null;
    } else if (!req.body.email) {
        res.send({
            field: "email", 
            message: "must add email"
        });
        return null;
    } else if (!req.body.password) {
        res.send({
            field: "password", 
            message: "must add password"
        });
        return null;
    } else if (req.body.password != req.body.confirmPassword) {
        res.send({
            field: "confirmPassword", 
            message: "passwords must match"
        });
        return null;
    } else if (!req.body.name) {
        res.send({
            field: "name", 
            message: "must add name"
        });
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