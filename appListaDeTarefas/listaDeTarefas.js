let lista = document.querySelector('.collection');
let Btnlimp = document.querySelector('.limpar-tarefas');
let btnadd = document.querySelector('.btn')
let filtro = document.querySelector('#filtro');
let taref = document.querySelector('#tarefa');

        function CarregaMoniEventos(){

            btnadd.addEventListener('click',adicionaTarefa);
            lista.addEventListener('click', apagarTarefa);
            Btnlimp.addEventListener('click', removetudo);
            filtro.addEventListener('keyup', filtrarTarefa);
            
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
            else{
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

         gravarTarefa(taref.value);

         
 

         taref.value = '';

        }



        }

        function removetudo(evento){

            evento.preventDefault();
            lista.remove();

        }


        function filtrarTarefa(evento) {
            const procurado = evento.target.value.toLowerCase();
            const liItem = document.querySelectorAll(".collection-item");
        
            liItem.forEach(function (tarefa) {
                let textoTarefa = tarefa.innerText;
        
                if (textoTarefa.toLowerCase().indexOf(procurado) != -1) {
                    tarefa.style.display = "block";
                } else {
                    tarefa.style.display = "none";
                }
            });

        }

        function gravarTarefa(tarefa){
            
         let tarefas = [];
         let trfs = localStorage.getItem('tarefas');

        if( trfs != null){

            tarefas = JSON.parse(trfs);
        };

        tarefas.push(tarefa);
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
        // localStorage.getItem('tarefas',JSON.parse(tarefas));

        

        }






