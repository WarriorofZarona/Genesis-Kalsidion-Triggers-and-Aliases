/* This file is a sample template for how I create my patrol scripts. It defines a path inside of an array along with an index, saved to the user data, then starts with the initial kill action.
 The script will typically require two triggers to accompany it: a kill trigger and a movement trigger. The specific kill and movement triggers must be enabled in this script.
 
 For anyone who wishes to use this template, it's a matter of just changing the path you want to use for your patrol, followed by the kill/movement trigger, and the kill target action itself.

 Below is a sample of patrol script for patroling throtyl pass against the Neidar dwarves for the warplains. Feel free to customize as you see fit.
 Notes: 
  The kill trigger is posted below and is simple to make but needs to be enabled in this script.
  The movement trigger also needs to be enabled here but is more complex, please go to triggers/movement_template.js to see how it works.
  <k> is my alias for killing, feel free to replace this with your own alias or the default <kill> command, remove "true" if it is not an alias.
  The target depends on the region. Most regions have a common descriptor like human, dwarf, etc.. Use this template if you know all mobs can be targeted with one descriptor.
  I have a varient script if mobs are different which I'll post in the future */

// I typically use the name of the region as the command to initialize the script.
// Pattern: throtyl pass

// Execute the following javascript:
// Starting point is the most southeastern point of the region.
const path = [
    "w","w","w","w","w","w","w","w","w","w","w","w","w",
    "e","e","e",
    "n",
    "e","e","e","e","e","e","e","e","e","e",
    "n",
    "w","w","w","w","w","w","w","w","w","w",
    "n",
    "w",
    "e","e","e","e","e","e","e","e","e","e","e","e",
    "n",
    "e",
    "w","w","w","w","w","w","w","w","w","w","w","w","w",
    "e","e",
    "n",
    "e","e","e","e","e","e","e","e","e","e","e",
    "n",
    "e",
    "w","w","w","w","w","w","w","w","w","w","w",
    "n",
    "e","e","e","e","e","e","e","e","e","e",
    "w",
    "n",
    "w","w","w","w","w","w","w","w","w","w",
    "n",
    "e","e","e","e","e","e","e",
    "w",
    "n",
    "w","w","w","w","w","w",
    "e",
    "n",
    "e","e","e","e","e","e",
    "n",
    "e",
    "w","w","w","w","w","w","w","w","w",
    "e","e","e",
    "n",
    "e","e","e","e",
    "w",
    "n",
    "w"
  ];
  
  // Saving the path and index to userdata
  // This code is *essential* to ensuring your movement trigger works.
  gwc.userdata.patrol = {
  path,
  index: 0
  } 
  
  // The following enables both the kill and movement triggers needed for this particular patrol. This will change if you have a different one.
 // The following controls movement
  gwc.trigger.enable('Util: Patrol - Throtyl Pass Movement')

// The following enables the needed kill action triggers
// Most of these use a pattern of 
// ^The (.*) died|panics and flees
// which triggers the <kill> command on the target
// In this example, the command is just <kill dwarf>.
// Feel free to customize this on your own trigger. 
// Because of its simplicity, I won't be posting a sample template of the kill trigger, but reach out if you need help making it.
 gwc.trigger.enable('Util: Attack - Dwarf')

 // Pauses the script if out of stamina
 // This ensure the script doesn't keep firing if your stamina is gone.
 // I'll post the script in the triggers folders, but it essentially just
 // disables all kill and movement triggers.
  gwc.trigger.enable('Util: Patrol - Pause when tired')
  
// Initial kill action
gwc.connection.send("k dwarf", true)


