'use strict';

const defaults = require("./constants.json");
const querystring = require("querystring");
const httpRequest = require('./request');

const GetEndpoint = (api_key, calltype) => {
    return `${defaults.endpoints.BASE_URL}${defaults.endpoints[calltype]}${querystring.stringify({ "api_key": api_key })}`
}

const GetResponse = url => {
    return new Promise((resolve, reject) => {
        httpRequest.get(url, {}, (err, res, body) => {
            resolve(body.toString());
        });
    });
};

const PostResponse = (url, body) => {
    return new Promise((resolve, reject) => {
        httpRequest.post(url, body, (err, res, body) => {
            resolve(body.toString());
        });
    });
};

module.exports = {
    getEndpoint: GetEndpoint,
    getResponse: GetResponse,
    postResponse: PostResponse
};