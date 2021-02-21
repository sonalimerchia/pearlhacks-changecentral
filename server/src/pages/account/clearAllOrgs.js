const Org = require("../../schema/org").Org;
const argon2 = require("argon2");
const cookieName = require("../../constants").cookieName;

module.exports = async function (req, res) {
    await Org.deleteMany({}, (err) => console.log(err));
    res.send("done");
}