/*
 *  index.js
 *  --------
 *  Main entry point for the node drone server
 *
 *  Using this Parrot AR Drone library: https://github.com/felixge/node-ar-drone
 */

var arDrone = require('ar-drone');
var client = arDrone.createClient();

//client.takeoff();
client.createRepl();

/*
client
  .after(3000, function() {
    this.animate('yawDance', 2000);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });*/