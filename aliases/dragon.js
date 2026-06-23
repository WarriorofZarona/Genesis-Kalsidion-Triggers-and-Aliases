// This alias controls the settings for the dragon
// It can control whether I should continually summon a dragon
// It can also set which dragon attack to use

// Pattern: dragon

// Execute the following javascript:
  const command = args[1]
  
  if (command === "off") {
     gwc.userdata.summonDragon = false
     gwc.trigger.disable("Util: Dragon - Dfear")
     gwc.output.append("Stopped Dragon Summoning")
  } else if (command === "on") {
     gwc.userdata.summonDragon = true
     gwc.trigger.enable("Util: Dragon - Dfear")
     gwc.connection.send("dfear")
  } else if (command === '1' | command === '2') {
    gwc.userdata.dragonAttack = command === '1' ? 'dswoop' : 'dbreath'
    gwc.output.append(`Dragon attack switched to ${gwc.userdata.dragonAttack}!`)
  }
