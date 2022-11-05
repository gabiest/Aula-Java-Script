document.querySelector('button').addEventListener('click',Conteudo);


 function Conteudo (evento){
	evento.preventDefault();

	//Fazendo a chamada                
											// então depois
	fetch('http://127.0.0.1:5500/Ajax/ex1.txt').then(function(ret){

	//pegamos apenas o conteúdo do retorno 
	console.log(ret + 'retorno');

		return ret.text();

		//então
	}).then(function (cont){

		//trabalhamos com o conteúdo retornado


		let conteudo = JSON.parse(cont);
		console.log(conteudo);
		let saida = ''

		conteudo.forEach(function (valor) {

			saida += valor.idade >= 18 ?
						   `${valor.nome} é maior de idade <br>`
						   :
						   `${valor.nome} é menor de idade <br>`



		});

		document.querySelector("#dadorecuperado").innerHTML = saida;




	});


 }
    
   
