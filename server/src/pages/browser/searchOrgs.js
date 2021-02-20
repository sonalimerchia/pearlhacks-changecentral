const Org = require("../../schema/org").Org;

module.exports = async function (req, res) {
    const orgs = await Org.find({}); 
    if (orgs) {
        res.send(orgs);
    } else {
        res.send("No org found");
    }
}