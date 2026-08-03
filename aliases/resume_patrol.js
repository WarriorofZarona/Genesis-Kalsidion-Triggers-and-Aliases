// This file allows you to resume a patrol that has been stopped. Useful for patroling where you left of.

// Notes:
// This alias accepts an argument depending on the name of the patrol. If it receives an acceptable arguement, it will resume the correct patrol.
// You also need to be in the same room when the script was paused in the first place in order for this to work properly.
// For this example, it will only accept an argumment for throtyl pass, but you can accept more using a switch statement and by adding more cases.
// Feel free to reach out if you need help coding this out to add more patrols.

// Pattern: resume patrol

// Execute the following javascript:
  const lastTarget = gwc.userdata.patrol.lastTarget
  const target = gwc.userdata.patrol.target
  if (!lastTarget && !target) {
    gwc.output.append("No target to set! Please set a target using <target>!")
    return;
  } else if (lastTarget && !target) {
  gwc.connection.send(`target ${lastTarget}`, true)
  return;
  }

  gwc.trigger.enable('Util: Patrol - Movement')
  
  gwc.connection.send(`k ${target}`, true)
