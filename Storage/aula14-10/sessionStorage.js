//Como trabalhar com LOCAL STORAGE 

let btn = document.getElementById('botao');

btn.addEventListener('click' , mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';

//Guardar o dado do local Storage
sessionStorage.setItem('dadosUsuario',valor);
}

//Recuperar o dado do local Dtorager e mostrar 
 document.querySelector('#mostrar').innerText = 
 sessionStorage.getItem('dadosUsuario');


//Apagar Local storage

// localStorage.removeItem('dadosUsuario');


let vetor = ["pera", "banana", "manga"];

// JSON.steingify converte vetores e objetos em String para que possamos salvar em Session Storage
sessionStorage.setItem("frutas", JSON.stringify(vetor));

//Para recuperar uma string Json do sessionstorage 
//ou session storage e transformar em objeto 
let recuperaDado = JSON.parse(sessionStorage.getItem("frutas"));

console.log(recuperaDado);

recuperaDado[3]='morango';
recuperaDado[1]='Banana';

let strecup = JSON.stringify(recuperaDado);
sessionStorage.setItem('frutas',strecup);





// console.log(recupDado);


