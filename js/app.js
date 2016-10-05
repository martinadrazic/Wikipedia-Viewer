var inputText;

function search() {
	inputText = document.getElementById('searchTextField').value;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + inputText + "&namespace=0&format=json", function(json) {
		console.log(json);

		var content = "";

		for (var i = 0; i < json[1].length; i++) {
			content += createText(json, i);
		}
		if (content === "") {
			content = "There are no results matching this entry.";
		}

		$('#searchedText').html(content);
	});
}

function createText(json, x) {

	if (json[2][x] === "") {
		json[2][x] = "For more info click here.";
	}

	var newDiv =
		'<div class="col-md-12">' +
		'<div class="col-md-8 search-list">' +
		'<a href="' + json[3][x] + '" target="_blanck"><h2 class="title">' + json[1][x] + '</h2>' +
		'<p class="description">' + json[2][x] + '</p></a>' +
		'<div class="delimiter"></div>' +
		'</div>' +
		'</div>';
	return newDiv;
}

document.getElementById("searchTextField")
	.addEventListener("keyup", function(event) {
		if (event.keyCode == 13) {
			document.getElementById("searchButton").click();
		} else if (event.keyCode == 27) {
			document.getElementById("searchTextField").value = '';
		}
	});