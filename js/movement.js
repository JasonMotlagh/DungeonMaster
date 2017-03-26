function keysPressed(e) {
	keys[e.keyCode] = true;

/*
	if (keys[17] && keys[37]) {
		// Ctrl + Left
		// Turn to the Left
		console.info("Turning Left");
	} else if (keys[17] && keys[39]) {
		// Ctrl + Right
		// Turn to the Right
		console.info("Turning Right");
	} else if (keys[37]) {
		// Left
		// Step to the Left
		console.info("Stepping Left");
	} else if (keys[39]) {
		// Right
		// Step to the Right
		console.info("Stepping Right");
	} else if (keys[38]) {
		// Forward
		// Step Forward
		console.info("Stepping Forward");
	} else if (keys[40]) {
		// Backward
		// Step Backward
		console.info("Stepping Backward");
	}
*/

	if (keys[18] && keys[37]) {
		// Alt/Option + Left
		// Turn to the Left
		console.info("Turning Left");
	} else if (keys[18] && keys[39]) {
		// Alt/Option + Right
		// Turn to the Right
		console.info("Turning Right");
	} else if (keys[37]) {
		// Left
		// Step to the Left
		console.info("Stepping Left");
	} else if (keys[39]) {
		// Right
		// Step to the Right
		console.info("Stepping Right");
	} else if (keys[38]) {
		// Forward
		// Step Forward
		console.info("Stepping Forward");
	} else if (keys[40]) {
		// Backward
		// Step Backward
		console.info("Stepping Backward");
	}
}

function keysReleased(e) {
	// mark keys that were released
	keys[e.keyCode] = false;
}