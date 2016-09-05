
function getRandomArticle () {
	$.getJSON("https://en.wikipedia.org/wiki/Special:Random", function(json){
	});
}

document.getElementById("searchTextField").onclick = getRandomArticle;