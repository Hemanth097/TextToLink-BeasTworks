function GenerateURL() {

	var texturl = encodeURIComponent(document.getElementById("matter").value);
	var comurl = "https://hemanth097.github.io/TextToLink-BeasTworks/reply.html?name=" + texturl + "";

	document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";


}

function openLink() {
	
	var texturl = encodeURIComponent(document.getElementById("matter").value);
	var comurl = "https://hemanth097.github.io/TextToLink-BeasTworks/reply.html?name=" + texturl + "";

	//document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";
    window.open("https://hemanth097.github.io/TextToLink-BeasTworks/reply.html?name=" + texturl + "", "_blank");

}
