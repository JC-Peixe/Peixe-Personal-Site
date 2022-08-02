
var botaoImc = buscarSelector(".enviar");

function calculaImc(event){
    event.preventDefault();

    var form = buscarSelector("#calculo-imc");
    var cliente = obterFormulario(form);
   
    var resultadoIMC = buscarSelector(".imc");
    resultadoIMC.textContent = cliente.imc;
    
    var classificacao = buscarSelector('.classificacao');
    classificacao.textContent = classificadorImc(cliente.imc);

    var riscos = buscarSelector('.risco');
    riscos.textContent = identificadorRiscos(cliente.imc);
    
    resultadoIMC.style.color = corImc(cliente.imc);
    classificacao.style.color = corImc(cliente.imc);
    resultadoIMC.style.backgroundColor = corBgImc(cliente.imc);
    classificacao.style.backgroundColor = corBgImc(cliente.imc);
    riscos.style.backgroundColor = corBgImc(cliente.imc);
    
    form.reset();
}

function buscarSelector(selector){
    return document.querySelector(selector)
}

function obterFormulario(form){
    var cliente = {
        nome:form.nome.value,
        idade:form.idade.value,
        peso:form.peso.value,
        altura:form.altura.value.replace(',','.'),
        imc:calculaImc(form.peso.value,form.altura.value)
    }
    return cliente
}

botaoImc.addEventListener('click', calculaImc)
