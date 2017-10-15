# ape-cricket v1.1.0

[Site](http://apecricket.herokuapp.com/documentation#)

The [ape-cricket](http://apecricket.herokuapp.com/documentation#) is a rest-api exported as Node.js module.

## Description

ape-cricket internally uses [cricapi](http://www.cricapi.com/), Free to use, super-high bandwidth, high performance Cricket API. Targeted at Developers and Cricket lovers.<br>
 The endpoints exposed are as follows::

 * apecricket.schedule() provides international fixtures
 * apecricket.cricket() provides live scrores  of ongoing match 
 * apecricket.upcomingMatches() provides upcoming match fixtures 
 * apecricket.cricketScore() provides detailed score card of the match
 * apecricket.playerStats() provides players carrer info and stats

## Installation

#### In Node.js:
```js
// Load the full build. 
var apecricket = require("ape-cricket");
// calling a endpoint to get response.
apecricket.schedule( function(response){ 
    // response will be json data of upcoming cricket matches
});
```

The endpoints cricketScore() and playerStats() require a string input field "unique_id" and "pid"(player_id). "unique_id" for each match is available from the cricket() endpoint response. and for "pid"(player_id) need to visit [cricapi players page](http://www.cricapi.com/players/). usage is as follows:


#### cricketScore
 ```js
// Load the full build. 
var apecricket = require("ape-cricket");
// calling a endpoint to get response.
apecricket.cricketScore( unique_id , function(response){ 
    // response will be json data of mentioned unique_id
});
``` 

#### playerStats
 ```js
// Load the full build. 
var apecricket = require("ape-cricket");
var pid = 35320;
// calling a endpoint to get response.
apecricket.playerStats( pid , function(response){ 
    // response will be json data of mentioned player
});
```  
