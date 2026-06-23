// This alias controls the sheathing of the broadsword when sapping is done
// If I'm in tank mode, I put on a shield instead of my left handed sword

// Pattern: sheathe broadsword

// Execute the following javascript:
  const tankMode = gwc.userdata.tank
  
  gwc.connection.send('unwield broadsword')
  gwc.connection.send(
    tankMode ? "wear shield" :
    '!draw'
  )
  gwc.connection.send('!sheathe broadsword')
  gwc.userdata.broadsword = false
