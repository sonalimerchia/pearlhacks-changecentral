const Org = require("../../schema/org").Org;

module.exports = async function (req, res) {
    const org = await Org.findOne({name: req.params.orgName}); 
    
    if (org) {
        const copy = {...org};
        delete copy._doc._id;
        res.send(copy._doc);

    } else {
        res.send("No org found");
    }
}