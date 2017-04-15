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

	if (keys[16] && keys[37]) {
		// Shift + Left
		// Turn to the Left
		console.info("Turning Left");
		changeDirection("left");
		console.log("Facing", directions_array[current_direction]);
	} else if (keys[16] && keys[39]) {
		// Shift + Right
		// Turn to the Right
		console.info("Turning Right");
		changeDirection("right");
		console.log("Facing", directions_array[current_direction]);
	} else if (keys[37]) {
		// Left
		// Step to the Left
		console.info("Stepping Left");
		console.log("Facing", directions_array[current_direction]);
	} else if (keys[39]) {
		// Right
		// Step to the Right
		console.info("Stepping Right");
		console.log("Facing", directions_array[current_direction]);
	} else if (keys[38]) {
		// Forward
		// Step Forward
		console.info("Stepping Forward");
		console.log("Facing", directions_array[current_direction]);
	} else if (keys[40]) {
		// Backward
		// Step Backward
		console.info("Stepping Backward");
		console.log("Facing", directions_array[current_direction]);
	}
}

function keysReleased(e) {
	// mark keys that were released
	keys[e.keyCode] = false;
}

function changeDirection(param_direction_change) {
	switch(param_direction_change) {
		case "left":
			current_direction -= 1;
			if(current_direction < 0) {
				current_direction = (directions_array.length - 1);
			}
			break;

		case "right":
			current_direction += 1;
			if(current_direction == directions_array.length) {
				current_direction = 0;
			}
			break;
	}
}