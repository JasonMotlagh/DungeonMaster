$(document).ready(function() {
	$( "#button-get-map" ).on("click", getMap);
});

function getMap() {
	console.log('getMap called');
	var map_obj = {
			'map_id':	1
		};

	$.ajax({
		url: 'scripts/getMap.php',
		type: 'POST',
		dataType: 'json',
		data: {'map_obj': map_obj},
		complete: function(xhr, textStatus) {
			//called when complete
		},

		success: function(data) {
			//Do something
			//console.log(data);
			console.info(data.length);
			console.info("last map_row:", data[(data.length - 1)]['map_row']);
			console.info("last map_col:", data[(data.length - 1)]['map_col']);
			var total_rows = parseInt(data[(data.length - 1)]['map_row']) + 1;
			var total_cols = parseInt(data[(data.length - 1)]['map_col']) + 1;
			var array_rows = new array();
			var array_cols = new array();

			for(r = 0; r < total_rows; r++) {
				for(c = 0; c < total_cols; c++) {
					
				}
			}
		},

		error: function(xhr, desc, err) {
			console.log(xhr)
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}