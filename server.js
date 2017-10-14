var httpRequest = require("request");

exports.schedule = function (callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/matchCalendar",
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricket = function (callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/cricket",
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.upcomingMatches = function (callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/matches",
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricketScore = function (unique_id, callback) {
    httpRequest.post({
        url: "http://apecricket.herokuapp.com:80/api/cricketScore",
        form: { unique_id: unique_id }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.playerStats = function (pid, callback) {
    httpRequest.post({
        url: "http://apecricket.herokuapp.com:80/api/playerStats",
        form: { pid: pid }
    }, function (err, resp, body) {
        callback(body);
    });
}