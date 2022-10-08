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
