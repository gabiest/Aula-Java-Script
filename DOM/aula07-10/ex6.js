
//Atualizando um elemento com JS 

//Criamos novo elemento 
const novoTitulo = document.createElement('h2');

//Colocamos as caracteristicas que desejamos 
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));


const  tituloAtual = document.getElementById('task-title');
let divMaedoTitulo = document.getElementsByClassName('card-action');



divMaedoTitulo[0].replaceChild(novoTitulo,tituloAtual);


