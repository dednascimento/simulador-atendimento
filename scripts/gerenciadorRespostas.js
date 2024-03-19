// gerenciadorRespostas.js

// Importar as respostas automáticas de saudação
import { scriptAtual } from './respostasClientes.js';

function mensagemMinuscula(texto) {
    return texto.toLowerCase().trim();
}

export function gerarResposta(palavraChave) {

    let mensagemTratada = mensagemMinuscula(palavraChave).replace(/,/g, '');

    // Separando a mensagem em palavras individuais
    mensagemTratada = mensagemTratada.split(/\s+/);
        
    let seletor = null;
    let melhorPontuacao = 0;

    for (let chave in scriptAtual) {

        let palavrasChave = chave.replace(/,/g, '').split(/\s+/);

        // Verificando se a primeira palavra da mensagem está presente na frase
        if (palavrasChave.includes(mensagemTratada[0])) {
            // Calculando a pontuação da frase
            let pontuacao = palavrasChave.filter(palavra => mensagemTratada.includes(palavra)).length;

            // Atualizando a melhor frase se a pontuação for maior
            if (pontuacao > melhorPontuacao) {
                seletor = chave;
                melhorPontuacao = pontuacao; 
                console.log('Concluído')
                break
            }
        }
        
    }
    
    console.log(scriptAtual.seletor)
    let voc_atual = scriptAtual.seletor

     
    let indiceAleatorio = Math.floor(Math.random() * scriptAtual.seletor.length);
    return voc_atual[indiceAleatorio];

}
