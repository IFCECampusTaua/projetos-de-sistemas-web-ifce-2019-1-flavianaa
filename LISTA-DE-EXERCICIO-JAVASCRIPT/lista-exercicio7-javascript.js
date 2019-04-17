function mensagem() {
	var num = document.getElementById("Ctexto").value;
	if (num > 0 && num < 10) {
		document.getElementById("exibirmsg").innerHTML="Insuficiente";
	}else if (num > 10 && num < 14) {
		document.getElementById("exibirmsg").innerHTML="Bom";
	}else if (num > 14) {
		document.getElementById("exibirmsg").innerHTML="Muito Bom";
	}
}
document.getElementById("botao").addEventListener("click", mensagem);


 