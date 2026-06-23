// This alias initializes variables into the userdata object for use with other alises and triggers.
// It can be called manually, but it should be triggered on entrance into Genesis. (Check triggers)

// Pattern: initialize

// Execute the following javascript:
  gwc.userdata.sap = true
  gwc.userdata.broadsword = false
  gwc.userdata.tank = false
  gwc.userdata.whetstone = false
  gwc.userdata.dragonPresent = false
  
  gwc.output.append("Script initialized!")
  gwc.output.color("lime")
