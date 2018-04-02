const defaults = require("./constants.json");
const querystring = require("querystring");
const http = require('http');

const GetEndpoint = (api_key, calltype) => {
    return `${defaults.endpoints.BASE_URL}${defaults.endpoints[calltype]}${querystring.stringify({"api_key": api_key})}`
}

const GetResponse = url => {
    return new Promise((resolve, reject) => {
        http.get(url, (resp) => { 
            let data = '';
            resp.on('data', (chunk) => {  
                data += chunk; 
            }); 
            resp.on('end', () => {  
                resolve(data); 
            });
        }).on("error", (err) => { 
            reject(err);
        });
    });
};

module.exports = {
    getEndpoint: GetEndpoint,
    getResponse: GetResponse
};