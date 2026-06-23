// This alias is used using <k enemy> to instead of the default <kill> command.
// It allows a <tsap> of a chosen weapon, followed by the <sp> alias which includes my list of special attacks

// Pattern: k

// Execute the following javascript:
  const target = args[1]
  
  const weapon = args[2] || gwc.userdata.sapItem
  
  gwc.connection.send(`tsap ${target} ${weapon || ""}`, true)
  gwc.connection.send(`!kill ${target}`)
  gwc.connection.send("sp", true)
