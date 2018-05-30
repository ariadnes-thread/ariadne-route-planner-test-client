var grpc = require("grpc");
var util = require("util");

var routeplanner = grpc.load("planner.proto");

// Create stub
var stub = new routeplanner.RoutePlanner(
    'localhost:1235', grpc.credentials.createInsecure());

var reqdata = {
    origin: {latitude: 34.140003, longitude: -118.122775},
    dest: {latitude: 34.140771, longitude: -118.132323},
    // desired_dist: 3000,
    poi_prefs: {park: 3, restaurant: 0.5},
    edge_prefs: {green: 1.0, popularity: 2.0}
};

function make_route(req) {
    let planRouteCB = function(err, result) {
        if (err) {
            console.log(err);
        } else {
            let data = JSON.parse(result.jsonData);
            // Print fully
            console.log(util.inspect(data, false, null))
        }
    }

    // The JsonReply object has 'jsonData' as a key and the *string* of the
    // object payload as a value
    stub.PlanRoute({jsonData: JSON.stringify(req)}, planRouteCB);
}

make_route(reqdata);