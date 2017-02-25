<?php
	require_once("db.php");
	require_once("functions.php");
	require_once("../classes/classes.php");

	$result_array = array();
	$map_obj = $_POST['map_obj'];

	$chapter_sql = "SELECT id,
				manual_id,
				display_order,
				display_name,
				description
			FROM dms_chapters
			WHERE id = ?";
		$prm = array(map_obj['map_id']);
		$chapter_resource = sqlsrv_query($dbconn, $chapter_sql, $prm);

		while ($chapter_result = sqlsrv_fetch_object($chapter_resource)) {
			array_push($chapter_array, $chapter_result);
		}
		for($c = 0; $c < count($chapter_array); $c++) {
			$chapter_array[$c]->topics = array();
		}

		$topic_sql = "SELECT id,
				chapter_id,
				display_name,
				display_order,
				file_name
			FROM dms_topics
			ORDER BY display_order ASC, id ASC";
		$topic_resource = sqlsrv_query($dbconn, $topic_sql);

		while ($topic_result = sqlsrv_fetch_object($topic_resource)) {
			array_push($topic_array, $topic_result);
		}

		for($c = 0; $c < count($chapter_array); $c++) {
			for($t = 0; $t < count($topic_array); $t++) {
				if($topic_array[$t]->chapter_id == $chapter_array[$c]->id) {
					array_push($chapter_array[$c]->topics, $topic_array[$t]);
				}
			}
		}

		echo json_encode($chapter_array);
?>