let lista = document.querySelector('.collection');
let Btnlimp = document.querySelector('.limpar-tarefas');
let btnadd = document.querySelector('.btn')
let filtro = document.querySelector('#filtro');
let taref = document.querySelector('#tarefa');

        function CarregaMoniEventos(){
            document.addEventListener("DOMContentLoaded", recuperaTarefas);

            btnadd.addEventListener('click',adicionaTarefa);
            lista.addEventListener('click', apagarTarefa);
            Btnlimp.addEventListener('click', removetudo);
            filtro.addEventListener('keyup', filtrarTarefa);

            
        }

     CarregaMoniEventos();

     function apagarTarefa(evento){

        //se o elemento pai tiver a classe apaga-tarefa,
        //ou seja, for o elemento "a", apague li, ou seja, 
        //a tarefa
        if( evento.target.parentElement.classList.contains('apaga-tarefa') ){
    
            //apaga o elemento pai do "a", ou seja, o li, pois
            //o elemento alvo do evento foi o i 
            evento.target.parentElement.parentElement.remove();
    
            apagarDoLocalStorage(evento.target.parentElement.parentElement);
        }
    }
    

        function apagarDoLocalStorage(tarefa){

            let tarefaParaSerApagada = tarefa.innerText;
        
            let tarefas = [];
        
            //recuperar o que já existe no localStorage
            if( localStorage.getItem('tarefas') !== null ){
        
                //transformar em um objeto JSON, não uma string
                tarefas = JSON.parse(localStorage.getItem('tarefas'));
            }
        
            //fazer um looping para buscar tarefa
            tarefas.forEach(function(tarefa, indice){
        
                //se encontrarmos o que queremos apagar,
                //apagamos
                if(tarefaParaSerApagada == tarefa){
        
                    //apagamos a tarefa igual a tarefa que o 
                    //usuário clicou para apagar
                    tarefas.splice(indice, 1);
                }
            });
            //gravar o objeto JSON no localStorage novamente 
            localStorage.setItem('tarefas',JSON.stringify(tarefas));
        
        
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
            localStorage.removeItem('tarefas');


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


        function recuperaTarefas(evento) {
            
            let tarefas = localStorage.getItem("tarefas");

            console.log("opuqdwpoeuqopwu");
        
            if(tarefas == null ) {
                tarefas=[];

            }
                
                
                tarefas = JSON.parse(tarefas);
            
                tarefas.forEach(function (tarefa){

                    const li = document.createElement('li');
                    li.className = 'collection-item';  
                    li.appendChild(document.createTextNode(tarefa));
           
                    const a = document.createElement('a');
                    a.className = 'apaga-tarefa secondary-content';  
           
                    const i = document.createElement('i');
                    i.className = 'fa fa-remove';  
           
                    a.appendChild(i);
                    li.appendChild(a);
                    lista.appendChild(li);

                });
            }






        



