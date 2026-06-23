// This alias houses my current specials.
// If a dragon is present, it will attack with the set command or <dswoop> by default

// Pattern: sp

// Execute the following javascript:
  gwc.connection.send('slash')
  gwc.connection.send('tattack')
  
  if (gwc.userdata.dragonPresent) {
    
    gwc.connection.send(`${gwc.userdata.dragonAttack || 'dswoop'}`)
    
  }
