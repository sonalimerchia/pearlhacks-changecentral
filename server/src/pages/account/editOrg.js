const Org = require("../../schema/org").Org;
const cookieName = require("../../constants").cookieName;

module.exports = async function (req, res) {
    console.log("editing org");
    const cookies = req.cookies;
    var id;
    for (key in cookies) {
        if (key == cookieName) {
            id = cookies[key];
        }
    }
    const loggedIn = await Org.findByIdAndUpdate(id, {useFindAndModify: false});

    if (!loggedIn) {
        res.send({
            error: "Not logged in"
        });
        return null;
    }

    if (loggedIn.name != req.params.orgName) {
        res.send({
            error: "Do not have access to this organization"
        });
        return null;
    }
    delete req.body._id;

    const updatedOrg = await Org.updateOne({_id: id}, req.body, (error) => {
        console.log(error);
    });
    res.send(updatedOrg);
}
