document.querySelector('button').addEventListener('click',Conteudo);


 function Conteudo (evento){
	evento.preventDefault();

	let nome = document.getElementById('nome').value;

	//Fazendo a chamada                
											// então depois
	fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){

	//pegamos apenas o conteúdo do retorno 
	
		return ret.text();

		//então
	}).then(function (cont){

		//trabalhamos com o conteúdo retornado


		let conteudo = JSON.parse(cont);
		let saida = `${conteudo.name} tem ${conteudo.age} anos`;
		
		document.getElementById('nome').value= '';
		

		document.querySelector("#dadorecuperado").innerHTML = saida;


	});


 }
    
   
