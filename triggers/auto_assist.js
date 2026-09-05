/*

This is an auto assist code I built to solve a few problems:

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
Pattern: ^(?!.*\bassists\b)(?:(.+?)\s+(?:attacks|turns to attack)\s+(.+?)\.|killed\b.*|is fighting\b.*)$|^(.*) died|panics and flees|None of your team members are in combat
*/

// Execute the following javascript:
  const pattern = args[0].toLowerCase();
  
  const statements = [
    "dies",
    "panics and flees",
    "none of your team members are in combat"
  ];
  
  if (statements.some(statement => pattern.includes(statement))) {
  gwc.userdata.assisting = false
  return;
  }
  
  const leader = mud.gmcp["char.team"].leader;
  const attacker = args[1];
  const target = args[2];
  const assisting = gwc.userdata.assisting;
  const assistTarget = gwc.userdata.assistTarget;
  const assistPerson = gwc.userdata.assistPerson;
  
  const team = [...mud.gmcp["char.team"].members, leader];

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
      // 100ms timer after the trigger, to avoid accidentally taking aggro when assisting
    }, 100);
    
    gwc.userdata.assisting = true;
    gwc.userdata.assistPerson = teamAttacker ? attacker : target;
    gwc.userdata.assistTarget = teamAttacker ? target : attacker;
  }
