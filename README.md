# Test Node.js client for route planner

One way to test a router is to write a main method for it in Python. For example, at the end of `orienteering_router.py`, there is a short `main()` method that tests the router.

Once that's working, this is another way to test the router that integrates the whole Python route planner.

## About

Setup
- `reqdata` is the request to send to the route planner.
- The script will print out the response object.

Usage
- Run the route planner's `start_server.py`.
- `node client.js`

Notes
- Through the magic of gRPC, a call to `stub.PlanRoute` in the client is equivalent to a call to `RoutePlanner.PlanRoute` in `start_server.py`. `PlanRoute` chooses which router is called.
- Thus, for a router X to be called in the backend, first the logic to dispatch to X must be added to `RoutePlanner.PlanRoute` in `start_server.py`. Then, the request data must meet the requirements to dispatch to X.