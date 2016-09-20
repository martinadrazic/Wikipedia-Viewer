var inputText 

function search () {
	inputText = document.getElementById('searchTextField').value;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+inputText+"&namespace=0&format=json", function(json){
		console.log(json);

		var content = "";
			
		for (var i = 0; i < json.length + 5; i++) {
			content += creatLink(i);
		}
		
		$('#links').html(content);
	});
}

function creatLink (x) {
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+inputText+"&namespace=0&format=json", function(json){
		var newDiv =
					'<div class="col-md-12">' +
						'<div class="col-md-8 search-list">' +
							'<a href="'+json[3][x]+'" target="_blanck"><h3 class="title">'+ json[1][x] +'</h3>' +
								'<p class="description">'+ json[2][x] +'</p></a>' +
						'</div>' +
					'</div>' ;
		return newDiv;
	});
}

search();






