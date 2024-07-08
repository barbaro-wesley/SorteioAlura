let listaDeNumerosSorteados=[];
let qtdNumeros = 100;
let numeroAleatorio = geraNumeroAleatorio()
let tentativas = 1;
function menssageminicial (){
    exibeNaTela('h1','Adivinhe o numero')
    exibeNaTela('p', `Escolha um numero entre 1 e ${qtdNumeros}`);
}

function exibeNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value =''

}

function reiniciarJogo(){
    numeroAleatorio = geraNumeroAleatorio();
    limparCampo();
    tentativas =1;
    menssageminicial() 
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function geraNumeroAleatorio(){
    let numeroSecreto= parseInt(Math.random()*qtdNumeros +1)
    let qtdNumerosNaLista= listaDeNumerosSorteados.length;
    if (qtdNumerosNaLista == qtdNumeros){
        listaDeNumerosSorteados=[]
    }
    if (listaDeNumerosSorteados.includes(numeroSecreto)){
        return geraNumeroAleatorio()
    }else {
        listaDeNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
    
}
menssageminicial()
function verificaChute(){
    let chute= document.querySelector('input').value
    if(chute==numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : ' tentativa';
        exibeNaTela('h1','Parabens');
        exibeNaTela ('p', `voce acertou o numero secreto:${numeroAleatorio} com  ${tentativas}  ${palavraTentativa}` )
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else  {
        if(chute>numeroAleatorio){
            exibeNaTela('p','o numero secreto é menor que:'+chute)

        }else{
            exibeNaTela('p','o numero secreto é maior que:'+chute)
        }
        tentativas++
        limparCampo()
    }
}




