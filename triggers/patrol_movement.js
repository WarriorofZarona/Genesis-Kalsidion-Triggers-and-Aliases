/* This file is the movement trigger for patrols, which should be paired with a patrol script. Please go to alises/patrol_template.js to see the pairing script.
It takes the paths and index that was initialized from the patrol script and controls movement for the rest of the patrol until it gets to the end of the path.

Reminder: A kill trigger is also needed for the full patrol script to work. Please use the kill_target.js trigger for us with this.

Note:
  My <stop patrol> alias is used here to end the patrol when finished. Go to alias/stop_patrol.js to use it.
*/

// Name: Util: Patrol - Movement
// Type: regexp
// Pattern: (You sense a divine force preventing your attack|Who would do the winching then|You find no such living creature.|are fighting each other|That requires an exclamation mark|You cannot attack (.*) as (.*) is in your team)

// Execute the following javascript:
   // Get the userdata
    let index = gwc.userdata.patrol.index
    const paths = gwc.userdata.patrol.path 
    const step = paths[index]
    const target = gwc.userdata.patrol.target
    
    // Disables the trigger when the patrol is finished
    if (index > paths.length - 1) {
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
    gwc.userdata.patrol.index = index;
    gwc.connection.send("dfb", true)
    gwc.connection.send(`k ${target}`, true)
