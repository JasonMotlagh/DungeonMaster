<!doctype html>

<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Angular will break without this line. It is not needed for Chrome -->
	<meta http-equiv="X-UA-Compatible" content="IE=11" />

	<title>Dungeon Master.v1</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Custom CSS -->
	<link rel="stylesheet" href="/css/custom.css">
</head>

<body>
	<div class="col-md-2 col-md-offset-2">
		<button id="button-get-map" class="btn btn-xs btn-default">Get Map</button>
	</div>

	<div id="main-container" class="container">
		<div id="champion-container" class="col-sm-12 padding-none">
			<div id="champion-1" class="col-sm-3 padding-none champion">
				<div id="champion-1-info" class="col-sm-8">
					<div id="champion-1-hand-1" class="col-sm-6 champion-info-hand ">
					</div>
					<div id="champion-1-hand-2" class="col-sm-6 champion-info-hand ">
					</div>

					<div id="champion-1-health" class="col-sm-12 champion-1-background champion-info-bars">
						HEALTH
					</div>
					<div id="champion-1-mana" class="col-sm-12 champion-1-background champion-info-bars middle-info-bar">
						MANA
					</div>
					<div id="champion-1-stamina" class="col-sm-12 champion-1-background champion-info-bars">
						STAMINA
					</div>
				</div>
				<div id="champion-1-photo" class="col-sm-4">
					<img src="/images/champion1.png" class="img-responsive center-block">
				</div>
				<div id="champion-1-name" class="col-sm-12 champion-name">
					Hissssa Lizar Of Makan
				</div>
			</div>
		</div>
	</div>

	<!-- JQuery CDN -->
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

	<!-- JQuery UI CDN -->
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!-- Custom JavaScript -->
	<script src="/js/custom.js"></script>
	<script src="/js/movement.js"></script>
</body>
</html>