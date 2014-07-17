/*
 *  index.js
 *  --------
 *  Main entry point for the node drone server
 *
 *  Using this Parrot AR Drone library: https://github.com/felixge/node-ar-drone
 */

var arDrone = require('ar-drone');
var client = arDrone.createClient();

//client.createRepl();

client.takeoff();

client
  .after(2000, function() {
    this.up(0.5);
  })
  .after(1000, function() {
    this.stop();
  })
  .after(1000, function() {
    this.animate('yawDance', 2000);
  })
  .after(2000, function(){
    this.down(0.5);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });