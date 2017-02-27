$(document).ready(function() {
//Set up Sections navigation
	//testRouting();
	window.addEventListener("resize", sizeMainContent);
	buildTopNavigation();
	sizeMainContent();

//Set up carousel
	$('.carousel').carousel();
});

function testRouting() {
	console.log("Document is ready!");
	console.log("$(location).attr('href'): " + $(location).attr('href'));
	console.log("Protocol: " + window.location.protocol);
	console.log("Host: " + window.location.host);
	console.log("Path: " + window.location.pathname);
	console.log("---------------------------------------------------------");
	var temp_path = window.location.pathname;
	var lastIndex = parseInt(temp_path.lastIndexOf("/"));
	console.log("lastIndex: " + lastIndex);
	console.log("Last Directory: " + temp_path.substr((lastIndex + 1)));
}

function getQueryVariable(param_variable) {
	/****
		Example URL:
		http://www.example.com/index.php?id=1&image=awesome.jpg

		Calling getQueryVariable("id") - would return "1"
		Calling getQueryVariable("image") - would return "awesome.jpg"
	****/

	var query = window.location.search.substring(1);
	var vars = query.split("&");
	
	for (var i=0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		
		if(pair[0] == param_variable) {
			return pair[1];
		}
	}
	return(false);
}

function buildTopNavigation() {
	console.log('buildTopNavigation called');
	
	$.ajax({
		url: 'scripts/topNavigation.php',
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			var navigation_count = data.length;
			var main_navigation = "";
			for(i = 0; i < navigation_count; i++) {
				main_navigation += "<li><a href='#'>" + data[i].display_name + "</li>";
			}
			main_navigation += "<li><a href='#login' data-toggle='modal'>Log In</a></li>";
			$("#main-navigation").html(main_navigation);

			buildCarousel(data);
		},

		error: function(xhr, desc, err) {
			console.log(xhr);
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}

function buildCarousel(param_sections) {
	console.log('buildCarousel called');
	$.ajax({
		url: 'scripts/carousel.php',
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			if(data['success'] == false) {
				temp_html = "";
				for(i = 0; i < param_sections.length; i++) {
					if(i == 0) {
						temp_html += "<div id='img" + param_sections[i]['pkid'] + "' class='item active'>";
					} else { 
						temp_html += "<div id='img" + param_sections[i]['pkid'] + "' class='item'>";
					}
						temp_html += "<a href='" + param_sections[i]['name'] + "'><img src='images/carousel/home/" + param_sections[i]['name'] + ".jpg' /></a>";
						temp_html += "<div class='carousel-caption'>";
							/*temp_html += "<h3></h3>";
							temp_html += "<p></p>";*/
						temp_html += "</div>";
					temp_html += "</div>";
				}
				$("#carousel-images").html(temp_html);
			} else {
				temp_html = "";
				for(i = 0; i < data.length; i++) {
					if(i == 0) {
						temp_html += "<div id='img" + data[i]['pkid'] + "' class='item active'>";
					} else { 
						temp_html += "<div id='img" + data[i]['pkid'] + "' class='item'>";
					}
						if(data[i]['banner_link'] == "null") {
							temp_html += "<a href='" + data[i]['banner_link'] + "'><img src='images/banners/" + data[i]['file_name'] + "' /></a>";
						} else {
							temp_html += "<img src='images/banners/" + data[i]['file_name'] + "' />";
						}
						
						temp_html += "<div class='carousel-caption'>";
							/*temp_html += "<h3></h3>";
							temp_html += "<p></p>";*/
						temp_html += "</div>";
					temp_html += "</div>";
				}
				$("#carousel-images").html(temp_html);
			}
			/*var navigation_count = data.length;
			var main_navigation = "";
			for(i = 0; i < navigation_count; i++) {
				main_navigation += "<li><a href='#'>" + data[i].display_name + "</li>";
			}
			main_navigation += "<li><a href='#login' data-toggle='modal'>Log In</a></li>";
			$("#main-navigation").html(main_navigation);*/

			buildContent();
		},

		error: function(xhr, desc, err) {
			console.log(xhr);
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}

function buildContent() {
	console.log('buildContent called');

	$.ajax({
		url: 'scripts/mainContent.php',
		type: 'POST',
		dataType: 'json',
		data: {'page': 'home'},
		complete: function(xhr, textStatus) {
			//called when complete
		},

		success: function(data) {
			//Do something
			console.log(data);
			var temp_html = "";
			for(i = 0; i < data.length; i++) {
				$("#" + data[i]['name'] + "-title").html(data[i]['display_name']);
				$(".temp").html(data[i]['copy']);

				if($(".temp").html().length > 250) {
					$("#" + data[i]['name'] + "-body").html($(".temp").text().substr(0, 240));
					$("#" + data[i]['name'] + "-body").append("&#8230;");
				} else {
					$("#" + data[i]['name'] + "-body").html($(".temp").text());
				}
				// $("#" + data[i]['name'] + "-body").html(data[i]['copy']);
				

				temp_html += "<a href='#' class='btn btn-default btn-sm'>Read More</a>";
				$("#" + data[i]['name'] + "-content").append(temp_html);
				temp_html = "";
			}
		},

		error: function(xhr, desc, err) {
			console.log(xhr)
			console.log("Details: " + desc + "\nError:" + err);
			console.log("Something broke");
		}
	});
}

function sizeMainContent() {
	var navbarTotalHeight = parseInt($('#navbar-complete').height()) + parseInt($('#navbar-complete').css('margin-bottom'));
	$('#main-content').css('margin-top', navbarTotalHeight + "px");
}