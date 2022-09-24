let e;

e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);






vetor.forEach(function(val){

    val.getElementsByClassName.color = 'green';

    console.log(val.innerText);

});




//com querySelectorAll
vetor.forEach(function(val, id){
    console.log(val.innerText);
    console.log(id);
});

// Somente Ímpares e pares(even/odd)
e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.background = "#dedede";
});




//sem usar função anonima 

e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){
    console.log(val);
}

e = document.querySelector('ul.collection');

//console.log(e.firstChild);
//console.log(e.childElementCount);

console.log(e.children[2]);




