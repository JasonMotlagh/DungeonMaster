<?php

	include_once('../includes/config_include.php');

	$query;
	$result_array = array();
	$connection;
	$map_obj = $_POST['map_obj'];
	$map_id = (int)$map_obj['map_id'];

	$connection = new mysqli("pandorasdigitalboxco.ipagemysql.com", "chaos", "Str!k3sB@ck", "dm");

	/*$query = "SELECT * FROM map_tiles WHERE maps_id_fk = ".$map_id;
	$query .= " ORDER BY map_row ASC, map_col ASC";*/

	/*$query = "SELECT mt.map_row, mt.map_col";
	$query .= " FROM map_tiles AS mt";
	$query .= " WHERE mt.maps_id_fk = ".$map_id;
	$query .= " ORDER BY mt.map_row ASC, mt.map_col ASC";*/

	$query = "SELECT mt.map_row, mt.map_col, vtn.description AS n_description, vte.description AS e_description, vts.description AS s_description, vtw.description AS w_description";
	$query .= " FROM map_tiles AS mt";
	$query .= " LEFT JOIN view_types AS vtn ON vtn.id_pk = mt.n_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vte ON vte.id_pk = mt.e_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vts ON vts.id_pk = mt.s_view_types_id_fk";
	$query .= " LEFT JOIN view_types AS vtw ON vtw.id_pk = mt.w_view_types_id_fk";
	$query .= " WHERE mt.maps_id_fk = ".$map_id;
	$query .= " ORDER BY mt.map_row ASC, mt.map_col ASC";

	/*array_push($result_array, $map_id);
	array_push($result_array, $query);*/

/* This works and provides proper results in phpAdmin */
	//SELECT mt.map_row, mt.map_col, vtn.description AS n_description, vte.description AS e_description, vts.description AS s_description, vtw.description AS w_description FROM map_tiles AS mt LEFT JOIN view_types AS vtn ON vtn.id_pk = mt.n_view_types_id_fk LEFT JOIN view_types AS vte ON vte.id_pk = mt.e_view_types_id_fk LEFT JOIN view_types AS vts ON vts.id_pk = mt.s_view_types_id_fk LEFT JOIN view_types AS vtw ON vtw.id_pk = mt.w_view_types_id_fk WHERE mt.maps_id_fk = 1 ORDER BY mt.map_row ASC, mt.map_col ASC

	/*$result_array = $connection->selectQuery($query);
	$connection->openConnection();*/
	

	/*$rows = array();
	$result = $connection->query($query);
	if($result === false) {
		return false;
	}*/

	$result = $connection->query($query);
	/*array_push($result_array, $result);
	array_push($result_array, mysqli_error($connection));*/

	while($obj = $result->fetch_object()) {
		array_push($result_array, $obj);
	}

	if(count($result_array) < 1) {
		$result_array = ['success'=>false, 'reason'=>'No results returned from query'];
	}

	echo json_encode($result_array);

?>