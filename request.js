/*
 *Request- helper class to perform https calls to stackexchange api 
 */

// Dependencies
const http = require('http');
const url = require('url');

// Container
const request = {};

// Method to perform https operations
request._callRequest = (method, requestUrl, body, callback) => {

    // Parse the hostname and path out of the originalCheckData
    const parsedUrl = url.parse(requestUrl, true);
    const hostName = parsedUrl.hostname;
    const path = parsedUrl.path; // Using path not pathname because we want the query string

    // Construct the request
    const requestDetails = {
        'protocol': 'http:',
        'hostname': hostName,
        'method': method.toUpperCase(),
        'path': path,
    };

    let responseData = [];
    const req = http.request(requestDetails, (res) => {

        // Grab the data buffer of the sent request
        res.on('data', async (d) => {
            responseData.push(d);
        });

        res.on('end', () => {
            callback(null, res, Buffer.concat(responseData));
        })

    });

    // if body exists write it to request
    if (body && Object.keys(body).length > 0) {
        let stringPayload = JSON.stringify(body);
        requestDetails['headers'] = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(stringPayload)
        }
        req.write(stringPayload);
    }

    // Bind to the error event so it doesn't get thrown
    req.on('error', function (e) {
        // Update the checkOutcome and pass the data along
        callback(e);
    });

    // End the request
    req.end();
};


// HTTP - GET endpoint
request.get = (requestUrl, { }, callback) => {
    request._callRequest("GET", requestUrl, options = {}, (err, res, body) => {
        return callback(err, res, body);
    });
};

// HTTP - POST endpoint
request.post = (requestUrl, body, callback) => {
    request._callRequest("POST", requestUrl, body, (err, res, body) => {
        callback(err, res, body);
    });
};

// Export container
module.exports = request;