const defaults = require("./constants.json");
const querystring = require("querystring");

var GetEndpoint = (api_key, calltype) => {
    let url = defaults.endpoints.BASE_URL
    return url + defaults.endpoints[calltype] + querystring.stringify({
        "api_key": api_key
    });
}

module.exports = {
    getEndpoint: GetEndpoint,
};