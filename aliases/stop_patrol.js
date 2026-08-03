/* This alias stops the patrol movement trigger from firing again after the next kill. Use <resume patrol> to restart the patrol in the same room, found in
 resume_patrol.js

Note: This script will disable the movement trigger and remove the currently set target, though it will save that target in another variable should you wish to resume it.
This also uses the target alias, go to target.js to see how it works.
*/

// Pattern: stop patrol

// Execute the following javascript:
gwc.trigger.disable('Util: Patrol - Movement')
gwc.userdata.patrol.lastTarget = gwc.userdata.patrol.target;
gwc.connection.send('target', true)

// Disable misc. triggers
// You can disable other triggers here as well. In this case, I have triggers for the strength spell and summoning dragons
// Feel free to disable any other triggers if you wish, otherwise you can ignore this portion
gwc.connection.send('strength off', true)
gwc.conection.send('dragon off', true)
 
gwc.output.append("Stopping Patrol!");
