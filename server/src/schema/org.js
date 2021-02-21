let mongoose = require('mongoose');

const orgSchema = {
    email: String, 
    username: String, 
    password: String, 
    name: String,
    description: {
        text: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
    },
    location: {
        country: String, 
        state: String, 
        region: String
    },
    links: {
        donation: String,
        website: String
    },
    contact: {
        email: String,
        phone: Number
    }, 
    volunteer: {
        roles: [{
            title: String, 
            description: String
        }]
    },
    events: [{
        name: String,
        date: Date, 
        description: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
    }], 
    activities: [{
        name: String,
        day: String, 
        description: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
    }], 
    
}

const org = new mongoose.Schema(orgSchema);
module.exports = {
    OrgSchema: orgSchema, 
    Org: mongoose.model("Org", org)
};