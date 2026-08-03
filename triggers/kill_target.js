/* 
This trigger activates if a target has been set in the userdata. This target is usually set by the patrol script, but can also be set manually as an alias. 

If no target has been set, this trigger won't fire. Because of this, you can keep it enabled.
*/

// Name: Util: Attack - Target
// Type: regexp
// Pattern: ^The (.*) died|panics and flees

// Execute the following javascript:
  const target = gwc.userdata.patrol.target;
  
  if (!target) return;
  
  gwc.connection.send(`k ${target}`, true)
