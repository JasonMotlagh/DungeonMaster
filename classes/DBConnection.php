<?php
	class DBConnection {

		// The database connection
		protected static $connection;

		/**
		* Connect to the database
		* 
		* @return bool false on failure / mysqli MySQLi object instance on success
		*/
		public function openConnection() {    
			// Try and connect to the database
			if(!isset(self::$connection)) {
				// Load configuration as an array. Use the actual location of your configuration file
				$config = parse_ini_file("../scripts/config.ini");
				self::$connection = new mysqli($config['host'], $config['user'], $config['pass'], $config['db']);

				// If connection was not successful, handle the error
				if(self::$connection === false) {
					// Handle error
					return false;
				}
				return self::$connection;
			}
		}

		/**
		* Query the database
		*
		* @param $param_query The query string
		* @return mixed The result of the mysqli::query() function
		*/
		public function query($param_query) {
			// Connect to the database
			$connection = $this->openConnection();

			// Query the database
			$result = $connection->query($param_query);

			return $result;
		}

		/**
		* Fetch rows from the database (SELECT query)
		*
		* @param $param_query The query string
		* @return bool False on failure / array Database rows on success
		*/
		public function selectQuery($param_query) {
			// Connect to the database
			$connection = $this->openConnection();

			$rows = array();
			$result = $connection->query($param_query);
			if($result === false) {
				return false;
			}
			while ($row = $result->fetch_object()) {
				$rows[] = $row;
			}
			return $rows;
		}

		/**
		* Fetch the last error from the database
		* 
		* @return string Database error message
		*/
		public function lastDBError() {
			// Connect to the database
			$connection = $this->openConnection();
			return $connection->error;
		}

		/**
		* Quote and escape value for use in a database query
		*
		* @param string $param_value The value to be quoted and escaped
		* @return string The quoted and escaped string
		*/
		public function quote($param_value) {
			// Connect to the database
			$connection = $this->openConnection();
			return "'".$connection->real_escape_string($param_value)."'";
		}

		 private function __destruct() {
			//try to close the MySql connection
			$closeResults = $this->mysqli->close();

			//make sure it closed
			if($closeResults === false) {
				echo "Could not close MySQL connection.";
			}
		}

	}
?>