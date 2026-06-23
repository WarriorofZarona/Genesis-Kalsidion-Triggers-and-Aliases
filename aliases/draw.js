// This alias draws the broadsword when ready to stun
// It requires the left hand weapon variable when not tanking. Check triggers for determining the left handed weapon.

// Pattern: draw broadsword

// Execute the following javascript:
  const weapon = gwc.userdata.leftHandWeapon
  const tankMode = gwc.userdata.tank
  
  gwc.connection.send(
    tankMode ? "remove shield"
      : `unwield ${weapon}`
  )
  
  gwc.connection.send('!draw')
  if (!gwc.userdata.tank) gwc.connection.send(`!sheathe ${weapon}`)
  gwc.userdata.broadsword = true
