const Org = require("../../schema/org").Org;

module.exports = async function (req, res) {
    const org = await Org.findOne({name: req.params.orgName}); 
    if (org) {
        res.send(org);
    } else {
        res.send("No org found");
    }
}