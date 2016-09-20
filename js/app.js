
function search () {
	var inputText = document.getElementById('searchTextField').value;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+inputText+"&namespace=0&format=json", function(json){
		console.log(json);

		var content = "";
			
		for (var i = 1; i < json.length; i++) {
			for (var a = 0; a < 10; a++) {
				content += creatLink(json.list[i][a]);
			}
		}
		
		$('#links').html(content);
	});
}

search();

function creatLink(x){
	var newDiv =
					'<div class="col-md-12">' +
						'<div class="col-md-8">' +
							'<div class="title"><h3>'+ x +'</h3></div>' +
							'<div class="description"><p>'+ x +'</p></div>' +
						'</div>' +
					'</div>' ;
	return newDiv;
}



