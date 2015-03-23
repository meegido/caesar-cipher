
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

function cesarCaracter (texto) {
	var posicion = alfabeto.indexOf(texto);
	posicion = posicion + 2;

	if (posicion >= alfabeto.length){
		posicion = posicion - alfabeto.length;
	}

	return alfabeto.charAt(posicion)
}

function cesar(texto) {
	var resultado = "";
	for(i = 0; i < texto.length; i++){
		resultado = resultado + cesarCaracter(texto.charAt(i));
	}
	return resultado
}

console.log(cesar("A") == "C");
console.log(cesar("B") == "D");
console.log(cesar("C") == "E");
console.log(cesar("Z") == "B", cesar("Z"));
console.log(cesar("MERCEDES") == ("OGTEGFGU"), cesar("MERCEDES"));
