<?php

include_once('../includes/config_include.php');

$query;
$result_array;
$connection;

try {
	$connection = new DBConnection();
} catch (Exception $e) {
	echo $e->getMessage(), "\n";
}

$query = "SELECT * FROM `sections` ORDER BY `order` ASC";
$result_array = $connection->selectQuery($query);

if(count($result_array) < 1) {
	$result_array = ['success'=>false, 'reason'=>'No results returned from query'];
}

echo json_encode($result_array);

?>