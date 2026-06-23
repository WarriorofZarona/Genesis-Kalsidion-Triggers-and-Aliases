// A collection of dragon triggers. 
// Make note of which triggers use javascripts and which use direct genesis commands.

/* Name: Util: Dragon - is Present
Type: regexp
Pattern: circling over the battlefield with cruel interest */

// Execute the following javascript:
  gwc.userdata.dragonPresent = true;

// ----------------------------------------------------

/* Name: Util: Dragon - is Gone
Type: regexp
Pattern: soars up into the sky and disappears  */

// Execute the following javascript:
   gwc.userdata.dragonPresent = false;

// ----------------------------------------------------

/* Name: Util: Dragon - Dfear
Type: regexp
Pattern: You feel you are once again able to summon dragons to your aid|soars up into the sky and disappears */

// Execute the following commands:
   dfear

// ----------------------------------------------------

/* Name: Util: Dragon - Attack
Type: regexp
Pattern: hovering high above you, ready to make another attack */

// Execute the following javascript:
  gwc.connection.send(`${gwc.userdata.dragonAttack || 'dswoop'}`)
