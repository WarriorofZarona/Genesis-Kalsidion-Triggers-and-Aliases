// This alias allows me to check the current variable values and output them into the terminal

// Pattern: check values

Execute the following javascript:
  gwc.output.append(`Sap: ${gwc.userdata.sap}`)
  gwc.output.append(`Broadsword: ${gwc.userdata.broadsword}`)
  gwc.output.append(`Sap with: ${gwc.userdata.sapItem || 'nothing'}`)
  gwc.output.append(`Left hand weapon is: ${gwc.userdata.leftHandWeapon || 'nothing'}`)
  gwc.output.append(`Dragon is present: ${gwc.userdata.dragonPresent}`)
  gwc.output.append(`Dragon attack is: ${gwc.userdata.dragonAttack}`)
  gwc.output.append(`Tank mode: ${gwc.userdata.tank}`)
