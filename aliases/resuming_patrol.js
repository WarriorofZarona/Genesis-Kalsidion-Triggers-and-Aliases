// This file allows you to resume a patrol that has been stopped. Useful for patroling where you left of.

// Notes:
// This alias accepts an argument depending on the name of the patrol. If it receives an acceptable arguement, it will resume the correct patrol.
// You also need to be in the same room when the script was paused in the first place in order for this to work properly.
// For this example, it will only accept an argumment for throtyl pass, but you can accept more using a switch statement and by adding more cases.
// Feel free to reach out if you need help coding this out to add more patrols.

// Pattern: resuming 
// An argument needs to be passed here. For this example, use <resume throtyl pass>

// Execute the following javascript:

const patrol = args["*"].trim().toLowerCase();

// Enables the kill and movement triggers based on the patrol, followed by the kill action to resume the script.
  switch (patrol) {
    case "throtyl pass":
     gwc.trigger.enable('Util: Attack - Dwarf')
     gwc.trigger.enable('Util: Patrol - Throtyl Pass Movement')

     gwc.connection.send('k dwarf', true)
     break; 
    default:
    // This will output an error message if you do not pass an acceptable patrol.
    gwc.output.append("Invalid patrol. Try again.")
  }
