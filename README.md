# ape-cricket [![npm version](https://badge.fury.io/js/ape-cricket.svg)](http://apecricket.herokuapp.com/documentation#)

[![NPM](https://nodei.co/npm/ape-cricket.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ape-cricket/)

The [ape-cricket](http://apecricket.herokuapp.com/documentation#) is a rest-api exported as Node.js module.

## Description

The ape-cricket uses [cricapi](http://www.cricapi.com/), Free to use, super-high bandwidth, high performance Cricket API. Targeted at Developers and Cricket lovers.<br>
 The endpoints exposed are as follows:

 * apecricket.schedule( ) provides international fixtures
 * apecricket.cricket( ) provides live scrores  of ongoing match 
 * apecricket.upcomingMatches( ) provides upcoming match fixtures 
 * apecricket.cricketScore( ) provides detailed score card of the match
 * apecricket.playerStats( ) provides players carrer info and stats
 * apecricket.playerFinder( ) provides players ids matching given name string
 * apecricket.fantasySummary( ) provides match info and stats
 * apecricket.fantasySquad( ) provides team players info
 
 In order to use the above endpoints, u need to have an api_key which can use generated by signing into [cricpapi](http://www.cricapi.com). For testing purpose can use test_api_key "TESTKEY0273"


## Installation
Installation is done using the npm install command:
```js
$ npm install ape-cricket
```

#### In Node.js:

```js
// Load the full build. 
var apecricket = require("ape-cricket");
```

#### schedule
```js
//user api_key
var api_key = "TESTKEY0273"
// calling a endpoint to get response.
apecricket.schedule( api_key, function(response){ 
    // response will be json data of upcoming cricket matches
});
```

#### cricket
```js
//user api_key
var api_key = "TESTKEY0273"
// calling a endpoint to get response.
apecricket.cricket( api_key, function(response){ 
    // response will be json data of upcoming cricket matches
});
```

#### upcomingMatches
```js
//user api_key
var api_key = "TESTKEY0273"
// calling a endpoint to get response.
apecricket.upcomingMatches( api_key, function(response){ 
    // response will be json data of upcoming cricket matches
});
```

The endpoints cricketScore() and playerStats() require a string input field "unique_id" and "pid"(player_id). "unique_id" for each match is available from the cricket() endpoint response. and for "pid"(player_id) need to visit [cricapi players page](http://www.cricapi.com/players/). usage is as follows:


#### cricketScore
 ```js
//user api_key
var api_key = "TESTKEY0273"
//match id
var unique_id = "1123492"
// calling a endpoint to get response.
apecricket.cricketScore( api_key, unique_id , function(response){ 
    // response will be json data of mentioned unique_id
});
``` 

#### playerStats
 ```js
//user api_key
var api_key = "TESTKEY0273"
// player id
var pid = 35320;
// calling a endpoint to get response.
apecricket.playerStats( api_key, pid , function(response){ 
    // response will be json data of mentioned player
});
``` 

#### playerfinder
 ```js
//user api_key
var api_key = "TESTKEY0273"
// player id
var name = "sach";
// calling a endpoint to get response.
apecricket.playerStats( api_key, name , function(response){ 
    // response will be json data of matching player ids
});
``` 

#### Fantasy API are billable since they're designed to help you generate income by running Fantasy Cricket portals. #### 
Each hit is 1 credit. You get 250 credits free. Deducted from your prepaid account.

#### fantasySummary
 ```js
//match id
var unique_id = "1123492"
// calling a endpoint to get response.
apecricket.fantasySummary(api_key, unique_id, function (response) {
    // response will be json data of mentioned unique_id
    console.log(response);
});
```

#### fantasySquad
 ```js
//match id
var unique_id = "1123492"
// calling a endpoint to get response.
apecricket.fantasySquad(api_key, unique_id, function (response) {
    // response will be json data of mentioned unique_id
    console.log(response);
});
```
