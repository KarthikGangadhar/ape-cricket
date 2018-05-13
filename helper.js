'use strict';

const defaults = require("./constants.json");
const querystring = require("querystring");
const httpRequest = require('./request');
const crypto = require('crypto');

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

const EncryptKey = (key) => {
    if (typeof (key) == 'string' && key.length > 0) {
        let hash = crypto.createHmac('sha256', 'ape-cricekt').update(key).digest('hex');
        return hash;
    } else {
        return false;
    }
};

const DecryptKey = (key) => {
    console.log('ha')
};

module.exports = {
    getEndpoint: GetEndpoint,
    getResponse: GetResponse,
    postResponse: PostResponse,
    encryptKey: EncryptKey,
    decryptKey: DecryptKey
};