document.querySelector('.btnC').addEventListener('click',Conteudo);
let grafico = document.querySelector("#ipca");





function Conteudo (evento){

    grafico.style.display = "block";
	evento.preventDefault();
    document.querySelector('#graficoL').innerHTML = '';

fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101`).then(function(ret){

	 
	
		return ret.text();

	
	}).then(function (cont){ 

		let conteudo = JSON.parse(cont);
        let texto = document.querySelector(".inputT").value;
        let indice;
        let ipca = [];


        conteudo.forEach(function (mes) {   
        
            anoString = mes.data.substring(6,10);
            mesString = mes.data.substring(3,5);
            anoMesString = anoString + '-' + mesString;


            if(parseInt(anoString) != texto && texto != ""){
                return;
            }
            
            indice = parseFloat(mes.valor);

            ipca.push({month:anoMesString, value: indice});
            
            
        });

        if(ipca.length == 0){
        
                   alert(`Não há dados para o ano ${texto}`);
                  }



                    JsonParaMorris= {
                        
                            element: 'graficoL',
                        
                            data: ipca,           
                        
                            xkey: 'month',
                            ykeys: ['value'],
                            labels: ['IPCA']
                                           
                        };
                    new Morris.Line(JsonParaMorris);




                    

	});



}


 