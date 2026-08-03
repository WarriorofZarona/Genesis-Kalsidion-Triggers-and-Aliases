/* This alias allows you to set a target that you can try to kill after killing a mob

By passing an argument in, the target is saved in userdata and your character will always attempt to try to kill that target after each kill.

When no argument is passed, it removes the target and will no longer attempt to kill anything after each kill
*/

// Pattern: target

// Execute the following javascript:
  const target = args['*']
  
  gwc.userdata.patrol.target = target || '';
  
  gwc.output.append(target ? `Setting target: ${target}` : "No target set");
