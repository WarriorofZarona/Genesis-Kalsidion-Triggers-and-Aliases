/* This file is a sample template for how I create my patrol scripts. It defines a target and a path which is saved to the user data along with a starting 0 index, 
  then starts with the initial kill action.

 
 For anyone who wishes to use this template, it's a matter of just changing the target path you want to use for your patrol. You do not have to change anything else.

 Notes: 
 
   The script will typically require two triggers to accompany it: a kill trigger and a movement trigger. 
  The target is enabled here for use with the kill target trigger, please go to triggers/kill_target.js to see how it works.
  The target depends on the region. Most regions have a common descriptor like human, dwarf, etc.. Use this template if you know all mobs can be targeted with one descriptor.
  I have a variant script if mobs are different which I'll post in the future 
  
  The movement trigger however needs to be enabled here, please go to triggers/patrol_movement.js to see how it works.
  <k> is my alias for killing, feel free to replace this with your own alias or the default <kill> command, remove "true" if it is not an alias.
 */


// Execute the following javascript:

const target = ''
const path = [];

/* Below is an example of how to use these variables:

I typically use the name of the region as the command to initialize the script.

Pattern: throtyl pass

const target = 'dwarf'

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
   ]
*/
  
// Saving the target, path and index to userdata
// This code is *essential* to ensuring your movement and kill trigger works.
  gwc.userdata.patrol = {
  target,
  path,
  index: 0
  }
  
 // The following controls movement and is enabled here
  gwc.trigger.enable('Util: Patrol - Movement')

 // Pauses the script if out of stamina
 // This is something I use personally to ensure the script doesn't keep firing if your stamina is gone.
 // I'll post the script in the triggers folders, but it essentially just
 // disables all kill and movement triggers.
  gwc.trigger.enable('Util: Patrol - Pause when tired')
  
// Initial kill action on the target
gwc.connection.send(`k ${target}`, true)

