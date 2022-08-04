var botao = document.querySelector('#adicionar-nome');

botao.addEventListener('click', function(event){
    event.preventDefault();
    var form = document.querySelector('#form-adiciona')
    var paciente = obterFormularioPaciente(form);

    
    var nomeH2 = document.querySelector('.nome');
    nomeH2.textContent = paciente.nome;
    var treinoDoDia = document.querySelector('.treinoDoDia');
    treinoDoDia.textContent = paciente.treino;
    
});

function obterFormularioPaciente(form){
    var pacientes = {
        nome:form.nome.value,
        treino:form.treino.value
    }
    return pacientes
}
