
var botaoImc = document.querySelector(".enviar");

function calculaImc(event){
    event.preventDefault();
    var form = document.querySelector("#calculo-imc");
    
    var nome = form.nome.value;
    var idade = form.idade.value;
    var peso = form.peso.value;
    var altura = form.altura.value.replace(',','.');
    var imc = (peso/(altura*altura)).toFixed(2);
    
    var resultadoIMC = document.querySelector(".imc");
    resultadoIMC.textContent = imc;
    
    var classificacao = document.querySelector('.classificacao');
    classificacao.textContent = classificadorImc(imc);

    var riscos = document.querySelector('.risco');
    riscos.textContent = identificadorRiscos(imc);
    
    resultadoIMC.style.color = corImc(imc);
    classificacao.style.color = corImc(imc);

    resultadoIMC.style.backgroundColor = corBgImc(imc);
    classificacao.style.backgroundColor = corBgImc(imc);
    riscos.style.backgroundColor = corBgImc(imc);

}
botaoImc.addEventListener('click', calculaImc)
