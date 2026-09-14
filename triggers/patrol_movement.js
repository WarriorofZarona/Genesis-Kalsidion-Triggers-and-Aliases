/* This file is the movement trigger for patrols, which should be paired with a patrol script. Please go to alises/patrol_template.js to see the pairing script.
It takes the paths and index that was initialized from the patrol script and controls movement for the rest of the patrol until it gets to the end of the path.

Reminder: A kill trigger is also needed for the full patrol script to work. Please use the kill_target.js trigger for us with this.

Note:
  My <stop patrol> alias is used here to end the patrol when finished. Go to alias/stop_patrol.js to use it.
*/

// Name: Util: Patrol - Movement
// Type: regexp
// Pattern: (it appears to be currently owned by the Blue Dragon Army|A sudden flurry of motion erupts as|With a burst of energy fueled by adrenaline, (he|she) swiftly dodges the incoming attack|You find no such living creature|You sense a divine force|You feel a divine force protecting|are fighting each other|That requires an exclamation mark|You cannot attack (.*) as (.*) is in your team)
// Execute the following javascript:
   // Get the data
const pattern = args[0]
let { index, path: paths, target, war } = gwc.userdata.patrol
const step = paths[index]
const room = gwc.gmcp.data.room.id

// During war plain, if BDA has already conquered the area, stop the patrol.
// Note: Fow now, this is hard-coded only for BDA only.
  if (war && pattern.includes("Blue Dragon Army")) {
      gwc.connection.send('stop patrol', true)
      gwc.output.append("BDA already conquered this plain!")
      return
      }
    
    // Disables the trigger when the patrol is finished
    if (index > paths.length - 1) {
    if (war) gwc.connection.send("conquer area")
    gwc.output.append("Patrol Done!")
    gwc.connection.send('stop patrol', true)
    return;
    } else if (!target) {
      gwc.output.append("No target set!")
    return;
    }
    
    // Move to next room
    gwc.connection.send(step)
    index++
    
    // Increase index and follow through with next action in room.
    if (war) gwc.connection.send("exa area") // In war plains, check the area in every step
    gwc.userdata.patrol.index = index;
    gwc.connection.send("dfb", true)
    gwc.connection.send(`k ${target}`, true)
