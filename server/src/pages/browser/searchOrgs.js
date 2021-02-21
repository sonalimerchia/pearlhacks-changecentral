const Org = require("../../schema/org").Org;

module.exports = async function (req, res) {
    console.log("searching orgs, yay!");
    const orgs = await Org.find({}); 
    if (orgs) {
        const copy = {...orgs};
        console.log("copy:", copy);
        for (var key in copy) {
            console.log("key: ", key);
            console.log("object at key: ", copy[key]._id);
            
        }
        res.send(copy);
    } else {
        res.send("No org found");
    }
}