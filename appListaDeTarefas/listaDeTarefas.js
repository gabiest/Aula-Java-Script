let lista = document.querySelector('.collection');
let Btnlimp = document.querySelector('.limpar-tarefas');
let btnadd = document.querySelector('.btn')
let filtro = document.querySelector('#filtro');
let taref = document.querySelector('#tarefa');

        function CarregaMoniEventos(){

            btnadd.addEventListener('click',adicionaTarefa);
            lista.addEventListener('click', apagarTarefa);
            
        }

     CarregaMoniEventos();

        function apagarTarefa(evento){
            console.log(evento.target);

            //se o elemento pai tiver a classe apaga-tarefa
            //ou seja, for o elemento a , apague li
            if(evento.target.parentElement.classList.contains('apaga-tarefa')){
                evento.target.parentElement.parentElement.remove();
            }
        }

        function adicionaTarefa(evento){
            
              evento.preventDefault();

          if(taref.value === ''){

              alert('vazioooo gatx');
             }
            
         const li = document.createElement('li');
         li.className = 'collection-item';  
         li.appendChild(document.createTextNode(taref.value));

         const a = document.createElement('a');
         a.className = 'apaga-tarefa secondary-content';  

         const i = document.createElement('i');
         i.className = 'fa fa-remove';  

         a.appendChild(i);
         li.appendChild(a);
         lista.appendChild(li);

         taref.value = '';






            

        }





