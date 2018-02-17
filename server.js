const httpRequest = require("request");
const helper = require("./helper");
let api_key = ""

exports.schedule = function (api_key, callback) {
    httpRequest.get({
        url: helper.getEndpoint(api_key, "MATCHCALENDER")
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricket = function (api_key, callback) {
    httpRequest.get({
        url: helper.getEndpoint(api_key, "CRICKET")
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.upcomingMatches = function (api_key, callback) {
    httpRequest.get({
        url: helper.getEndpoint(api_key, "MATCHES")
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricketScore = function (api_key, unique_id, callback) {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "CRICKETSCORE"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.playerStats = function (api_key, pid, callback) {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "PLAYERSTATS"),
        form: {
            pid: pid,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.fantasySummary = function (api_key, unique_id, callback) {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "FANTASYSUMMARY"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.fantasySquad = function (api_key, unique_id, callback) {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "FANTASYSQUARD"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}