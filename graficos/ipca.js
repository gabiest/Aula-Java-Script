document.querySelector('.btnC').addEventListener('click',Conteudo);
let grafico = document.querySelector("#ipca");




function Conteudo (evento){

    grafico.style.display = "block";
	evento.preventDefault();
fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101`).then(function(ret){

	 
	
		return ret.text();

	
	}).then(function (cont){       
        

		let conteudo = JSON.parse(cont);


        JsonParaMorris= {
            element: 'graficoL',
        
                data: [
                { year: '2008', value: 20 },
                { year: '2009', value: 10 },
                { year: '2010', value: 5 },
                { year: '2011', value: 5 },
                { year: '2012', value: 20 },
                { year: '2013', value: 25 },
                { year: '2014', value: 30 }
            
            ],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']


        }

        new Morris.Line(JsonParaMorris);
        

	});


 }
    

