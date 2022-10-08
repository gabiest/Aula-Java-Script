//Criando elementos

//cria o elemento
let novoLi = document.createElement('li');

//Define o Id
novoLi.id = 'novo-item';

//Define a classe CSS do novo elemento
novoLi.className = 'collection-item';

//Adiciona um atributo
novoLi.setAttribute('tittle','Novo ite na lista')

//Adiciona um node filho
novoLi.appendChild(
    document.createTextNode('Ir ao Banco'));


//Criar sub elemento 
let elementoA = document.createElement('a');

elementoA.className = 'delete-item secondary-content';

elementoA.setAttribute('href','#');


//Criar sub elemento icone
let elementoI = document.createElement('i');

elementoI.className = 'fa fa-remove';

//Adicona o i dentro do a

elementoA.appendChild(elementoI);

//adiciona o a no li 
novoLi.appendChild(elementoA);

//adiciona no UL 

let Ulelement = document.querySelector('ul.collection');

Ulelement.appendChild(novoLi);


console.log(novoLi);

