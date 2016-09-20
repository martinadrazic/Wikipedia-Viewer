
function search () {
	var inputText = document.getElementById('searchTextField').value;
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+inputText+"&namespace=0&format=json", function(json){
		console.log(json);

		var content = "";
			
		for (var i = 1; i < json.length - 2; i++) {
			for (var a = 0; a < json[i].length; a++) {
				content += creatLink();
			}
		}
		
		$('#links').html(content);

		function creatLink(){
			var newDiv =
							'<div class="col-md-12">' +
								'<div class="col-md-8">' +
									'<a href="'+json[3][a]+'" target="_blanck"><h3 class="title">'+ json[i][a] +'</h3>' +
									'<p class="description">'+ json[i + 1][a] +'</p></a>' +
								'</div>' +
							'</div>' ;
			return newDiv;
		}
	});
}

search();





