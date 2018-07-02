'use strict';

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

exports.news = (api_key, callback) => {
    let endpoint = helper.getEndpoint(api_key, "NEWS");
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
    let url = helper.getEndpoint(api_key, "CRICKETSCORE");
    let body = { 'unique_id': unique_id };
    helper.postResponse(url, body).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
}

exports.playerStats = (api_key, pid, callback) => {
    let url = helper.getEndpoint(api_key, "PLAYERSTATS");
    let body = { 'pid': pid };
    helper.postResponse(url, body).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
}

exports.fantasySummary = (api_key, unique_id, callback) => {
    let url = helper.getEndpoint(api_key, "FANTASYSUMMARY");
    let body = { 'unique_id': unique_id };
    helper.postResponse(url, body).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
}

exports.fantasySquad = (api_key, unique_id, callback) => {
    let url = helper.getEndpoint(api_key, "FANTASYSQUARD");
    let body = { 'unique_id': unique_id };
    helper.postResponse(url, body).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
}

exports.playerFinder = (api_key, name, callback) => {
    let url = helper.getEndpoint(api_key, "PLAYERFINDER");
    let body = { 'name': name };
    helper.postResponse(url, body).then((response) => {
        callback(response)
    }).catch((err) => {
        callback(err);
    });
}