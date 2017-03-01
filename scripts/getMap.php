<?php

	include_once('../includes/config_include.php');

	$query;
	$result_array = array();
	$connection;
	$map_obj = $_POST['map_obj'];

	/*try {
		$connection = new DBConnection();
	} catch (Exception $e) {
		echo $e->getMessage(), "\n";
	}*/
	$connection = new mysqli("pandorasdigitalboxco.ipagemysql.com", "chaos", "Str!k3sB@ck", "dm");

	$query = "SELECT * FROM `map_tiles` WHERE `maps_id_fk` = ".$map_obj['map_id']." ORDER BY `map_row` ASC, `map_col` ASC";
	/*$result_array = $connection->selectQuery($query);
	$connection->openConnection();*/
	$result = $connection->query($query);

	/*$rows = array();
	$result = $connection->query($query);
	if($result === false) {
		return false;
	}*/
	while($obj = $result->fetch_object()) {
		array_push($result_array, $obj);
	}

	if(count($result_array) < 1) {
		$result_array = ['success'=>false, 'reason'=>'No results returned from query'];
	}

	echo json_encode($result_array);

?>