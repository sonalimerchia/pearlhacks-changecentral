var axios = require('axios');

export async function getOrgInfo(orgName) {
    var config = {
    method: 'get',
    url: 'http://localhost:4000/org/'+orgName
    };

    const response = await axios(config);
    return response;
}

export async function getAllOrgs() {
    var config = {
        method: 'get', 
        url: 'http://localhost:4000/orgs', 
    }

    const response = await axios(config);
    return response;
}