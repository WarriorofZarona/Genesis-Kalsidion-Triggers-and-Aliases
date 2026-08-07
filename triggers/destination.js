/*
This file is a trigger that takes in a destination from the <dsteed> trigger and auto flies you once you mount your dragon.

If no destination exists, you mount your dragon like normal.

Required alias and triggers:
aliases/dsteed.js
triggers/mount_dragon.js

Note: This pattern uses the name and description of my dragon. Replace it with your dragon's name and description.
*/

// Name: Util: Dragon - Destination
// Type: plain
// Pattern: You mount the young blue dragon, Krythos

// Execute the following javascript:
  const destination = gwc.userdata.destination
  const passenger = gwc.userdata.passenger
  
  if (!destination) return;

  if (passenger) {
    gwc.connection.send)`pull ${passenger}`)
    gwc.userdata.passenger = ""
  }


  gwc.connection.send(`fly to ${destination}`)
  
  gwc.userdata.destination = ""
