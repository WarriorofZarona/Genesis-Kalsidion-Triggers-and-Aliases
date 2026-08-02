// This file essentially stops all movement and attack scripts used for patrolling.
// For the sake of the sample, it only includes the throtyl pass triggers
// However, you will want to include every single attack and movement trigger here that you create

// Pattern: stop patrol

// Execute the following javascript:
// Disable attack triggers
  gwc.trigger.disable('Util: Attack - Dwarf')

// Disable movement triggers
  gwc.trigger.disable('Util: Patrol - Throtyl Pass Movement')

// Disable misc. triggers
// You can disable other triggers here as well. In this case, I have triggers for the strength spell and summoning dragons
// Feel free to disable any other triggers if you wish, otherwise you can ignore this portion
  gwc.connection.send('strength off', true)
  gwc.conection.send('dragon off', true)
