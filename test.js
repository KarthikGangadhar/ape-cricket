var apecricket = require("./server");
//user api_key
var api_key = "yiPB2mqlqdNnPa57Vs8P8S74DXk1 "
// calling a endpoint to get response.

var unique_id = "1123492";

// apecricket.cricket(api_key, function (response) {
//     console.log(response);
// });

apecricket.schedule(api_key, function (response) {
    console.log(response);
});
// apecricket.fantasySummary(api_key, unique_id, function (response) {
//     console.log(response);
//     // response will be json data of mentioned unique_id
// });

// apecricket.fantasySquad(api_key, unique_id, function (response) {
//     console.log(response);
//     // response will be json data of mentioned unique_id
// });