const Org = require("../../schema/org").Org;
const cookieName = require("../../constants").COOKIE_NAME;

module.exports = async function (req, res) {
    console.log("finding out identity! yay!");
    const cookies = req.cookies;
    var id;
    for (key in cookies) {
        if (key == cookieName) {
            id = cookies[key];
        }
    }
    const user = await Org.findOne({_id: id});
    res.send(user);
}

