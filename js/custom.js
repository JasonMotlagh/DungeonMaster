var current_map;
var current_map_cols;
var current_map_data;
var current_map_data_length;
var current_direction = 0;
var directions_array = ["N", "E", "S", "W"];

$(document).ready(function() {
	current_map = 1;
	$( "#button-get-map" ).on("click", getMap);
});

function getMap() {
	var map_obj = {
			'map_id': current_map
		};

	$.ajax({
		url: '/scripts/getMap.php',
		type: 'POST',
		dataType: 'json',
		data: {'map_obj': map_obj},
		complete: function(xhr, textStatus) {
			//called when complete
		},

		success: function(data) {
			//Do something
			current_map_data = data;
			sorted_map_data = data;
			current_map_data_length = current_map_data.length;
 
			sorted_map_data.sort(sortByProperty('map_row'));
			var total_rows = parseInt(sorted_map_data[0].map_row);
			sorted_map_data.sort(sortByProperty('map_col'));
			var total_cols = parseInt(sorted_map_data[0].map_col);

			current_map = [];
			for(r = 0; r <= total_rows; r++) {
				current_map_cols = [];
				for(c = 0; c <= total_cols; c++) {
					current_map_cols.push(null);
				}
				current_map.push(current_map_cols);
			}

			for(x = 0; x < current_map_data_length; x++) {
				var temp_direction = [];
				temp_direction.push(current_map_data[x]['n_description']);
				temp_direction.push(current_map_data[x]['e_description']);
				temp_direction.push(current_map_data[x]['s_description']);
				temp_direction.push(current_map_data[x]['w_description']);

				current_map[parseInt(current_map_data[x]['map_row'])][parseInt(current_map_data[x]['map_col'])] = temp_direction;
			}

			/*
				current_map is now a 2dim array consisting of rows of columns.
				Each tile has an array that describes what is in the 4 directions at that tile.
				The structure of the array is:
					current_map[<row>][<col>]
			*/
			console.log(current_map[0]);
			console.log(current_map[0][6]);
		},

		error: function(xhr, desc, err) {
			console.log(xhr);
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}

function sortByProperty(property) {
	'use strict';
	return function (a, b) {
		return b[property] - a[property]
	};
}