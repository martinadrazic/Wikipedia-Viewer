var inputText 

function search () {
	inputText = document.getElementById('searchTextField').value;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+inputText+"&namespace=0&format=json", function(json){
		console.log(json);

		var content = "";
			
		for (var i = 1; i < json.length - 2; i++) {
			for (var a = 0; a < json[i].length; a++) {
			content += creatLink(json, i, a);
			}
		}
		
		$('#links').html(content);
	});
}

function creatLink (json, x, y) {

	if ( json[x + 1][y] === "" ) {
		json[x + 1][y] = "For more text click here.";
	}

	var newDiv =
				'<div class="col-md-12">' +
					'<div class="col-md-8 search-list">' +
						'<a href="'+json[3][y]+'" target="_blanck"><h3 class="title">'+ json[x][y] +'</h3>' +'<p class="description">'+ json[x + 1][y] +'</p></a>' +
					'</div>' +
				'</div>' ;
	return newDiv;
}

search();






