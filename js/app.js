
function getRandomArticle () {
	$.getJSON("https://en.wikipedia.org/wiki/Special:Random", function(json){
	});
}

document.addEventListener("click", function(){
    document.getElementById("searchTextField").innerHTML = "Hello World";
});
