/* This file is a sample template for how I create my movement triggers, which should be paired with a patrol script. Please go to alises/patrol_template.js to see the pairing script.
It takes the paths and index that was initialized from the patrol script and controls movement for the rest of the patrol until it gets to the end of the path.

Reminder: A kill trigger is also needed for the full patrol script to work.

 Your kill trigger will need a pattern of:
 ^The (.*) died|panics and flees
 which triggers the <kill> command on the target
 In this sample, the command is just <kill dwarf>
 Reach out if you need help making your separate kill trigger.

 Below is a sample of movement script for patroling throtyl pass against the Neidar dwarves for the warplains. Feel free to customize as you see fit for your own patrols
 Notes: 
  The movement trigger will first move to the next room set in the script.
  It will then attempt to use any actions set at the end of the trigger, and the final action should be trying to kill a target in the room.
  Should there not be a target, or if you target another player, it will trigger this movement script again and move to the next room to repeat the code. */

// Name: Util: Patrol - Throtyl Pass Movement
// Type: regexp
// Pattern: (You find no such living creature.|are fighting each other|That requires an exclamation mark|You cannot attack (.*) as (.*) is in your team)

// Execute the following javascript:

// Get the userdata
let index = gwc.userdata.patrol.index
const paths = gwc.userdata.patrol.path 
const step = paths[index]

// Disables the trigger when the patrol is finished
// Note: You typically want to turn the movement trigger itself off along with the attack triggers you enabled. 
// If you already have the stop patrol alias like below, use that instead.
// As a bonus, I added a conquer area command in case the end of the patrol clears out all enemies in the region.
// This is not necessary for non-warfare regions.
if (index > paths.length - 1) {
gwc.connection.send('stop patrol', true)
gwc.output.append('Patrol done!')
gwc.connection.send('conquer area')
return;
}

// Move to next room
// This will follow the path set in the initial patrol script
gwc.connection.send(step)

// Increase index
// Essentially, it sets the next step
gwc.userdata.patrol.index = ++index;

// Your next actions here
// In my case, I also drink alcohol as I move to keep my intoxication high and is a bonus
// Use whatever actions you want to use as long as you try to attack the target in the next room.
// Reminder that <k> is my personal kill alias, replace it with your own kill alias or the default <kill> command
gwc.connection.send("drink from bottle")
gwc.connection.send("k dwarf", true)
