<?php

	include_once('../includes/config_include.php');

	$query;
	$result_array;
	$connection;
	$map_obj = $_POST['map_obj'];
	$map_id = (int)$map_obj['map_id'];

	try {
		$connection = new DBConnection();
	} catch (Exception $e) {
		echo $e->getMessage(), "\n";
	}

	/*if(count($result_array) < 1) {
		$result_array = ['success'=>$connection, 'reason'=>'No results returned from query'];
	}*/
	/*$result_array = ['success'=>$connection->openConnection(), 'reason'=>'No results returned from query'];
	echo json_encode($result_array);*/

	//$query = sprintf("SELECT * FROM `map_tiles`");

	//$sql_query = sprintf("SELECT * FROM `sections` WHERE `section_id` = '%d'", $currentSection);

	/*$query = "SELECT mt.map_row, mt.map_col, vtn.description AS n_description, vte.description AS e_description, vts.description AS s_description, vtw.description AS w_description FROM map_tiles AS mt LEFT JOIN view_types AS vtn ON vtn.id_pk = mt.n_view_types_id_fk LEFT JOIN view_types AS vte ON vte.id_pk = mt.e_view_types_id_fk LEFT JOIN view_types AS vts ON vts.id_pk = mt.s_view_types_id_fk LEFT JOIN view_types AS vtw ON vtw.id_pk = mt.w_view_types_id_fk WHERE mt.maps_id_fk = ".$map_id." ORDER BY mt.map_row ASC, mt.map_col ASC";*/

	$query = "SELECT mt.map_row, mt.map_col, vtn.description AS n_description, vte.description AS e_description, vts.description AS s_description, vtw.description AS w_description FROM map_tiles AS mt LEFT JOIN view_types AS vtn ON vtn.id_pk = mt.n_view_types_id_fk LEFT JOIN view_types AS vte ON vte.id_pk = mt.e_view_types_id_fk LEFT JOIN view_types AS vts ON vts.id_pk = mt.s_view_types_id_fk LEFT JOIN view_types AS vtw ON vtw.id_pk = mt.w_view_types_id_fk WHERE mt.maps_id_fk = %d ORDER BY mt.map_row ASC, mt.map_col ASC";

	$sql_query = sprintf($query, $map_id);

	/*$query = "SELECT mt.map_row, mt.map_col, vtn.description AS n_description, vte.description AS e_description, vts.description AS s_description, vtw.description AS w_description";
	$query .= " FROM map_tiles AS mt";
	$query .= " LEFT JOIN view_types AS vtn ON vtn.id_pk = mt.n_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vte ON vte.id_pk = mt.e_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vts ON vts.id_pk = mt.s_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vtw ON vtw.id_pk = mt.w_view_types_id_fk";
	$query .= " WHERE mt.maps_id_fk = ".$map_id;
	$query .= " ORDER BY mt.map_row ASC, mt.map_col ASC";*/
	
	$result_array = $connection->selectQuery($sql_query);

	if(count($result_array) < 1) {
		$result_array = ['success'=>$map_id, 'reason'=>'No results returned from query'];
	}

	echo json_encode($result_array);

?>