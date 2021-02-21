const Org = require("../../schema/org").Org;
const cookieName = require("../../constants").COOKIE_NAME;

module.exports = async function (req, res) {
    console.log("editing org");
    const cookies = req.cookies;
    var id;
    for (key in cookies) {
        if (String(key) == String(cookieName)) {
            id = cookies[key];
        }
    }
    const org = await Org.findByIdAndUpdate(id, {useFindAndModify: false});
    console.log(id);

    if (!org) {
        res.send({
            error: "Not logged in"
        });
        return null;
    }

    if (org.name != req.params.orgName) {
        res.send({
            error: "Do not have access to this organization"
        });
        return null;
    }

    for(key in org) {
        if(req.body[key] && key != "_id") {
            org[key] = req.body[key];
        }
    }
    
    
    const updatedOrg = await Org.updateOne({_id: id}, org, (error) => {
        console.log(error);
    });
    res.send(updatedOrg);
}
