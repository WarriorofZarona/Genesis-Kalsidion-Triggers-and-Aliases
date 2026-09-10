/*

This is an auto assist code I built to solve a few problems:

- Assists members in your team only
- Removing spam from constant <assist> commands without using a timer
- Add the ability to whitelist pvp <assist!> for certain players
- Assist any player in your party who either attacks first or is attacked first
- Tracks who you are assisting and who they are targeting
- When the player you are assisting changes targets, assist again to change targets with that player

I wanted an auto assist code that felt more reactionary to what was actually happening in the game vs letting a timer dictate when I can assist again.
It should have very minimal spam with assisting, only doing so when necessary.

It's still a work in progress and I'd love for others to test it out for me!

*/

/* Name: Util: Auto assist
Type: regexp
Pattern: ^(?!.*\bassists\b)(?:(.+?)\s+(?:attacks|turns to attack)\s+(.+?)\.|(.+?), with the assistance of .+?, and (.+?)\s+are fighting each other\.|(.+?)\s+and\s+(.+?)\s+are fighting each other\.|(.+?)\s+(?:is|are)\s+fighting\s+(.+?)|.+?\s+killed\b.*)$|^(.*) died|panics and flees|None of your team members are in combat|You are now hunted by
*/

// Execute the following javascript:
 const pattern = args[0].toLowerCase();
 const { members, leader } = mud.gmcp["char.team"];
 const { assisting = false, assistTarget = "", assistPerson = "" } = gwc.userdata;
 const attacker = args[1] || args[3] || args[7];
 const target = args[2] || args[4] || args[8];
 const team = [...members, leader];
 const delayAssist =args[7] && args[8]
  
  const statements = [
    'you are now hunted by',
    "died",
    "panics and flees",
    "none of your team members are in combat"
  ];

  if (!leader || statements.some(statement => pattern.includes(statement))) {
  gwc.userdata.assisting = false
  return;
  }

// Add players who would you like to use the <assist!> command instead.
  const aggressiveAssist = [];

/* I recommend formatting it like so for readability. Add as many as you want:

  const aggressiveAssist = [
    "PlayerA",
    "PlayerB",
    "PlayerC",
    "PlayerD",
  ];

  */
  
  const teamAttacker = team.includes(attacker);
  const teamTarget = team.includes(target);
  
  // Already assisting, and checking to see the person I'm assisting changes targets
  if (assisting && (attacker !== assistPerson || target === assistTarget)) return;
  
  // New assist
  if (teamAttacker || teamTarget) {
    
    const useAggressiveAssist = aggressiveAssist.includes(attacker);
  
    setTimeout(() => {
      gwc.connection.send(
        useAggressiveAssist ? "assist!" : "assist"
      );
      // You may add any other additional commands here, like your specials. I use the <sp> alias to trigger all my specials after the assist.
      gwc.connection.send("sp", true);
      // Delay assist for certain scenarios for 2 seconds, otherwise 100ms timer after the trigger, to avoid accidentally taking aggro when assisting
   }, delayAssist ? 2000 : 100);
    
    gwc.userdata.assisting = true;
    gwc.userdata.assistPerson = teamAttacker ? attacker : target;
    gwc.userdata.assistTarget = teamAttacker ? target : attacker;
  }
