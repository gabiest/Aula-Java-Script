let btnadd = document.querySelector('.btn');
let btnlimp = document.querySelector('.limpar-aeronaves');
let lista = document.querySelector('.collection');
let aero = document.querySelector('#aeronaves');


function CarregaEventos(){
    document.addEventListener("DOMContentLoaded", recuperaAeronaves);

    btnadd.addEventListener('click',adicionaAeronaves);
    lista.addEventListener('click', apagarAeronaves);
    lista.addEventListener('click', editaAeronaves);

    
    
   
    
}

CarregaEventos();

function adicionaAeronaves(evento){
            
    evento.preventDefault();

if(aero.value === ''){

    alert('Campo Vazio');
   }
  else{
const li = document.createElement('li');
li.className = 'collection-item';  
li.appendChild(document.createTextNode(aero.value));

const e = document.createElement('a');
const a = document.createElement('a');

e.className = 'edita-aero secondary-content'; 
a.className = 'apaga-aero secondary-content'; 

const ie = document.createElement('i');
const i = document.createElement('i');

ie.className = 'bi-pen-fill';
i.className = 'fa fa-remove';  

a.appendChild(i);
e.appendChild(ie);


li.appendChild(a);
li.appendChild(e);

lista.appendChild(li);

gravarAero(aero.value);

aero.value = '';

}
}


function gravarAero(aeroN){
            
    let aeronaves = [];
    let aero = localStorage.getItem('aeronaves');

   if( aero != null){

       aeronaves = JSON.parse(aero);
   };

   aeronaves.push(aeroN);
   localStorage.setItem('aeronaves',JSON.stringify(aeronaves));
  

   }


function apagarAeronaves(evento){

    if( evento.target.parentElement.classList.contains('apaga-aero') ){

        evento.target.parentElement.parentElement.remove();

        apagarDoLocalStorage(evento.target.parentElement.parentElement);
    }
}

function editaAeronaves(evento){

    if( evento.target.parentElement.classList.contains('edita-aero') ){  

        // let li = document.querySelector('.collection-item');
        // console.log(li.value);
        // aero.value = li;

    }
}


function apagarDoLocalStorage(aeroN){

    let aeroParaSerApagada = aeroN.innerText;

    let aeronaves = [];


    if( localStorage.getItem('aeronaves') !== null ){

        aeronaves = JSON.parse(localStorage.getItem('aeronaves'));
    }
    aeronaves.forEach(function(aeroN, indice){

        if(aeroParaSerApagada == aeroN){

            aeronaves.splice(indice, 1);
        }
    });
   
    localStorage.setItem('aeronaves',JSON.stringify(aeronaves));


}


function recuperaAeronaves(evento) {
            
    let aeronaves = localStorage.getItem("aeronaves");


    if(aeronaves == null ) {
        aeronaves=[];

    }
        
        
        aeronaves = JSON.parse(aeronaves);
    
        aeronaves.forEach(function (aero){

            const li = document.createElement('li');
            li.className = 'collection-item';  
            li.appendChild(document.createTextNode(aero));

            
                const e = document.createElement('a');
                const a = document.createElement('a');

                e.className = 'edita-aero secondary-content'; 
                a.className = 'apaga-aero secondary-content'; 

                const ie = document.createElement('i');
                const i = document.createElement('i');

                ie.className = 'bi-pen-fill';
                i.className = 'fa fa-remove';  

                a.appendChild(i);
                e.appendChild(ie);


                li.appendChild(a);
                li.appendChild(e);
                lista.appendChild(li);


            

        });
    }



