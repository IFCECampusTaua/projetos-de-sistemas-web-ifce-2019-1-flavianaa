function teste() {
	var txt ="";
	var t = document.getElementById("Ctex").value;
	var i;
	for (i = 1; i <= t; i++) {
		txt +="IFCE" + i + "<br>"
	}
	document.getElementById("msg").innerHTML = txt;
}








