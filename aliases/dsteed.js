/* This file slightly modifies the <dsteed> command to include a destination right away when added, for example <dsteed sanction> will fly you to sanction immediately after mounting.

You will need triggers to mount the dragon right away, which will also trigger your <fly> command to the destination added.

If no destination is used for <dsteed>, it will just summon the dragon like normal. 

A second optional argument can be added in if you have a passenger. In which case, it will pull the passenger onto the mount with you.
For example: <dsteed sanction kalsidion>

Note: a destination must be inputted in order to take a passenger with you.

Triggers needed:
triggers/mount_dragon.js
triggers/destination.js

Optional:
triggers/dismount_dragon.js

*/

// Pattern: dsteed

// Execute the following javascript:
  gwc.connection.send('!dsteed')
  gwc.userdata.destination = args[1]
  gwc.userdata.passenger = args[2]
