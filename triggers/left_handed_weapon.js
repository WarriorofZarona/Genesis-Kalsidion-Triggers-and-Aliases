// This trigger sets what the left handed weapon is as a variable, necessary for sheathing it when drawing the broadsword

/*
Name: Util: Set left handed weapon
Type: regexp
Pattern: You wield the (.*) in your left hand
*/

// Execute the following javascript:
  if (gwc.userdata.broadsword) return;
  
  const weapon = args[1]
  
  gwc.userdata.leftHandWeapon = weapon
