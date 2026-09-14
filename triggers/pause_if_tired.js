// This file is used when your character runs out of stamina during a patrol. It calls the stop patrol script and also adjusts the index properly when you need to resume.
// This is also useful if you are on patrol with someone else leading, and they leave you behind
// Name it however you like

// Name: Util: Patrol - Pause when tired
// Type: regexp
// Pattern: You are too tired to move in that direction|is too tired to go there

// Execute the following javascript:
   const leader = mud.gmcp["char.team"].leader

// When someone else is leading a hunt and you run out of stamina, shout.
    if (leader && leader !== "You") {
    gwc.connection.send("shout HOLD ON! I'm tired! Come back when you can!!")   
      return
    }
  
  gwc.connection.send("wt Hold on... need to catch my breath.") 
  gwc.connection.send('stop patrol', true)
  const index = gwc.userdata.patrol.index - 1
  gwc.userdata.patrol.index = index
