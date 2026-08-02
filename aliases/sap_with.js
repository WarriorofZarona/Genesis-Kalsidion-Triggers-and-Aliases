// This pattern helps set an item for sapping with, if not using the broadsword
// The value 'nothing' is by default

// Pattern: sap with

// Execute the following javascript:
  const item = args[1];
  
  gwc.userdata.sapItem = item !== 'nothing' ? item : "";
