document.querySelector('button').addEventListener('click',recuperaConteudoAjax);


function recuperaConteudoAjax() {
	const XHR = new XMLHttpRequest();
	XHR.open("GET", "http://127.0.0.1:5500/Ajax/ex1.txt", true);

	XHR.onload = function () {
		if (this.status == 200) {
			// document.querySelector("#dadorecuperado").innerHTML =

			let dados = JSON.parse(this.responseText);
            let saida = '';

			dados.forEach(function (valor) {

                saida += valor.idade >= 18 ?
                               `${valor.nome} é maior de idade <br>`
                               :
                               `${valor.nome} é menor de idade <br>`



				// if (valor.idade > 18) {
					
				    

				// 	document.querySelector("#dadorecuperado").innerHTML = valor;
				// }
			});
			document.querySelector("#dadorecuperado").innerHTML = saida;


	
		}
	};

	XHR.send();
}

    
    
   
