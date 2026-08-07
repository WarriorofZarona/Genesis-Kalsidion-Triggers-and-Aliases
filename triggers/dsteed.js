/* This file slightly modifides the <dsteed> command to include a destination right away when added, for example <dsteed sanction> will fly you to sanction immediately after mounting.

You will need triggers to mount the dragon right away, which will also trigger your <fly> command to the destination added.

If no destination is used for <dsteed>, it will just summon the dragon like normal. 

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
