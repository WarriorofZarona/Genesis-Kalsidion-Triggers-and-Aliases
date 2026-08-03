// This alias stops the patrol movement trigger from firing again after the next kill. Use <resume patrol> to restart the patrol in the same room, found in
// resume_patrol.js
//
// However, you will want to include every single attack and movement trigger here that you create

// Pattern: stop patrol

// Execute the following javascript:
gwc.trigger.disable('Util: Patrol - Movement')

// Disable misc. triggers
// You can disable other triggers here as well. In this case, I have triggers for the strength spell and summoning dragons
// Feel free to disable any other triggers if you wish, otherwise you can ignore this portion
  gwc.connection.send('strength off', true)
  gwc.conection.send('dragon off', true)
