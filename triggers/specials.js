// A collection of special attack triggers.
// Make note of which triggers use javascript and which use direct genesis commands.

/* 
Name: Util: Special - Slash
Type: plain
Pattern: You feel ready to go on the offensive again. 
*/

// Execute the following commands:
  slash

// ----------------------------------------------------

/* 
Name: Util: Special - Tattack
Type: plain
Pattern: You feel ready to throw another attack. 
*/

// Execute the following commands:
  tattack

// ----------------------------------------------------

/* 
Name: Util: Special - Tsap - Is ready
Type: plain
Pattern: You feel ready to tsap again 
*/

// Execute the following javascript:
  gwc.userdata.sap = true

// ----------------------------------------------------

/* 
Name: Util: Special - Tsap - Not ready
Type: regexp
Pattern: You do not feel ready to tsap again|through the air (and sap|without hitting anything) 
*/

// Execute the following javascript:
  gwc.userdata.sap = false

// ----------------------------------------------------

/*
Name: Util: Special - Tsap - Switch to non broadsword
Type: regexp
Pattern: through the air (and sap|without hitting anything)|You can't sap anything while in combat
*/

// Execute the following javascript:
  gwc.connection.send("sheathe broadsword", true)
