function keysPressed(e) {
	keys[e.keyCode] = true;

	if (keys[17] && keys[37]) {
		// Ctrl + Left
		// Turn to the Left
	} else if (keys[17] && keys[39]) {
		// Ctrl + Right
		// Turn to the Right
	} else if (keys[37]) {
		// Left
		// Step to the Left
	} else if (keys[39]) {
		// Right
		// Step to the Right
	} else if (keys[38]) {
		// Forward
		// Step Forward
	} else if (keys[40]) {
		// Backward
		// Step Backward
	}
}