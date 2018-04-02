const httpRequest = require("request");
const helper = require("./helper");
let api_key = "";

exports.schedule = (api_key, callback) => {
    let endpoint = helper.getEndpoint(api_key, "MATCHCALENDER");
    helper.getResponse(endpoint).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
};

exports.cricket = (api_key, callback) => {
    let endpoint = helper.getEndpoint(api_key, "CRICKET");
    helper.getResponse(endpoint).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
};

exports.upcomingMatches = (api_key, callback) => {
    let endpoint = helper.getEndpoint(api_key, "MATCHES");
    helper.getResponse(endpoint).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
};

exports.cricketScore = (api_key, unique_id, callback) => {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "CRICKETSCORE"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.playerStats = (api_key, pid, callback) => {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "PLAYERSTATS"),
        form: {
            pid: pid,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.fantasySummary = (api_key, unique_id, callback) => {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "FANTASYSUMMARY"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.fantasySquad = (api_key, unique_id, callback) => {
    httpRequest.post({
        url: helper.getEndpoint(api_key, "FANTASYSQUARD"),
        form: {
            unique_id: unique_id,
        }
    }, function (err, resp, body) {
        callback(body);
    });
}