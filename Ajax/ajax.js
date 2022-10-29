document.querySelector('button').addEventListener('click',recuperaConteudoAjax);



function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest();
    XHR.open('GET','http://127.0.0.1:5500/Ajax/conteudo.txt',true);


    XHR.onload = function(){
        if(this.status == 200){

            document.querySelector('#dadorecuperado').innerHTML = this.responseText;
        }
    }
    
    XHR.send();
}