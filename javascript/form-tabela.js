var botaoUm = criarSeletor('#adicionar-nome');
var form = criarSeletor('#form-adiciona')
var botaoAdicionaTreino = criarSeletor('#adicionar-treino')
var tabela = criarSeletor("#treino-aluno")


botaoUm.addEventListener('click', function(event){
    event.preventDefault();
    var aluno = obterFormularioPaciente(form);
    
    var nomeH2 = criarSeletor('.nome');
    nomeH2.textContent = aluno.nome;
    var treinoDoDia = criarSeletor('.treinoDoDia');
    treinoDoDia.textContent = aluno.treino;
    form.reset()
    
});

botaoAdicionaTreino.addEventListener('click', function(event){
    event.preventDefault();
    var aluno = obterFormularioPaciente(form);
    tabela.appendChild(montaTr(aluno))
    form.reset()
});

function montaTr(aluno) {
    var alunoTr= document.createElement('tr');
    alunoTr.classList.add('aluno')
    
    alunoTr.appendChild(montaTd(aluno.exercicio,"exercicios"))
    alunoTr.appendChild(montaTd(aluno.series,"series"))
    alunoTr.appendChild(montaTd(aluno.repeticoes,"repeticoes"))
    alunoTr.appendChild(montaTd(aluno.intervalo,"intervalo"))
    alunoTr.appendChild(montaTd(aluno.cadencia,"cadencia"))
    alunoTr.appendChild(montaTd(aluno.observacoes,"observacoes"))

    return alunoTr
}
function montaTd(dado,classe){
    var td = document.createElement('td')
    td.classList.add(classe)
    if (dado.length == 0){
        dado.textContent = ""
    }
    td.textContent= dado;
    return td
}

function obterFormularioPaciente(form){
    var pacientes = {
        nome:form.nome.value,
        treino:form.treino.value,
        exercicio:form.exercicio.value,
        series:form.series.value,
        repeticoes:form.repeticoes.value,
        intervalo:form.intervalo.value,
        cadencia:form.cadencia.value,
        observacoes:form.observacoes.value
    }
    return pacientes
}

function criarSeletor(seletor){
    return document.querySelector(seletor)
}