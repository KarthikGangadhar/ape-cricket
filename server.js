var httpRequest = require("request");
apiKey = ""

exports.schedule = function (api_key, callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/matchCalendar",
        form:{ apikey: apikey }
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricket = function (api_key, callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/cricket",
         form:{ apikey: apikey }
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.upcomingMatches = function (api_key, callback) {
    httpRequest.get({
        url: "http://apecricket.herokuapp.com:80/api/matches",
        form:{ apikey: apikey }        
    }, function (err, resp, body) {
        callback(body);
    });
};

exports.cricketScore = function (api_key, unique_id, callback) {
    httpRequest.post({
        url: "http://apecricket.herokuapp.com:80/api/cricketScore",
        form: { unique_id: unique_id, apikey: apikey }
    }, function (err, resp, body) {
        callback(body);
    });
}

exports.playerStats = function (api_key, pid, callback) {
    httpRequest.post({
        url: "http://apecricket.herokuapp.com:80/api/playerStats",
        form: { pid: pid, apikey: apikey }
    }, function (err, resp, body) {
        callback(body);
    });
}