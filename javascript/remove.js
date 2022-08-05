var removeItem = document.querySelector('#treino-aluno')


removeItem.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add();

    setInterval(function(){
        event.target.parentNode.remove()
    });
});