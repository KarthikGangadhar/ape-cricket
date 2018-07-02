var apecricket = require("./server");
let api_key = ""
// calling a endpoint to get response.
var unique_id = "1123492";

apecricket.cricket(api_key, function (response) {
    console.log(response);
});

apecricket.news(api_key, function (response) {
    console.log(response);
});

// apecricket.playerFinder(api_key, "sach", function (response) {
//     console.log(response);
// });

// apecricket.schedule(api_key, function (response) {
//     console.log(response);
// });

// apecricket.upcomingMatches(api_key, (Response) =>{
//     console.log(Response);
// })

// apecricket.fantasySummary(api_key, unique_id, function (response) {
//     console.log(response);
//     // response will be json data of mentioned unique_id
// });

// apecricket.playerStats(api_key,'41224',Response => console.log(Response));

// apecricket.cricketScore(api_key, unique_id, Response => console.log(Response));