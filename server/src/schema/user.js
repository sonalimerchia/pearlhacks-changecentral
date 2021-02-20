module.exports = {
    email: String, 
    username: String, 
    password: String, 
    description: {
        text: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
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
        date: Date, 
        description: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
    }], 
    activities: [{
        day: String, 
        description: String, 
        images: [{
            data: Buffer, 
            contentType:String
        }]
    }]
}