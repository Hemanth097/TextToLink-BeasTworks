function GenerateURL() {

	var texturl = encodeURIComponent(document.getElementById("matter").value);
	var comurl = "file:///C:/Users/sys2/Desktop/hemanth/Replies/reply.html?name=" + texturl + "";

	document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";
    //window.open("https://wa.me/91" + document.getElementById("wno").value + "?text=" + texturl + "", "_blank");

}

function openLink() {
	
	var texturl = encodeURIComponent(document.getElementById("matter").value);
	var comurl = "file:///C:/Users/sys2/Desktop/hemanth/Replies/reply.html?name=" + texturl + "";

	//document.getElementById("urcode").innerHTML = "Generated url : <a href = " + comurl + " > "+ comurl + "</a>";
    window.open("file:///C:/Users/sys2/Desktop/hemanth/Replies/reply.html?name=" + texturl + "", "_blank");

}
