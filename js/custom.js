var current_map;
var current_map_cols;
var current_map_data;
var current_map_data_length;

var view_types = [null, 'Open', 'Wall', 'Door', 'Stairs'];

$(document).ready(function() {
	current_map = 1;
	$( "#button-get-map" ).on("click", getMap);
});

function getMap() {
	console.log('getMap called');
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
			current_map_data_length = current_map_data.length;
			console.info("last map_row:", current_map_data[(current_map_data_length - 1)]['map_row']);
			console.info("last map_col:", current_map_data[(current_map_data_length - 1)]['map_col']);
			var total_rows = parseInt(current_map_data[(current_map_data_length - 1)]['map_row']) + 1;
			var total_cols = parseInt(current_map_data[(current_map_data_length - 1)]['map_col']) + 1;

			console.log("total_rows:", total_rows);
			console.log("total_cols:", total_cols);

			current_map = [];
			for(r = 0; r < total_rows; r++) {
				current_map_cols = [];
				for(c = 0; c < total_cols; c++) {
					current_map_cols.push(null);
				}

				current_map.push(current_map_cols);
			}

			for(x = 0; x < current_map_data_length; x++) {
				var temp_obj = {
					nView: view_types[parseInt(current_map_data[x]['n_view_types_id_fk'])],
					eView: view_types[parseInt(current_map_data[x]['e_view_types_id_fk'])],
					sView: view_types[parseInt(current_map_data[x]['s_view_types_id_fk'])],
					wView: view_types[parseInt(current_map_data[x]['w_view_types_id_fk'])]
				};

				current_map[(parseInt(current_map_data[x]['map_row']) - 1)][(parseInt(current_map_data[x]['map_col']) - 1)] = temp_obj;
			}

			console.info(current_map);
		},

		error: function(xhr, desc, err) {
			console.log(xhr)
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}