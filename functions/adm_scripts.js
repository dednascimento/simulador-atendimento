// Importar as respostas automáticas de saudação
import { respostasClientes } from './clientes_scripts.js';

function mensagemMinuscula(texto) {
    return texto.toLowerCase().trim();
}

// Função para gerar respostas com base nas categorias
export function gerarResposta(mensagem) {
    // Converte a mensagem para minúsculas e remove espaços em volta
    const mensagemTratada = mensagemMinuscula(mensagem);

    // Inicializa a resposta como nula
    let resposta = null;

    // Verifica em qual categoria a mensagem se encaixa e seleciona as respostas correspondentes
    for (const palavraChave in respostasClientes) {
        // Converte a palavra-chave para minúsculas
        const palavraChaveMinuscula = palavraChave.toLowerCase();

        // Verifica se pelo menos uma palavra-chave completa está presente na mensagem do cliente

        if (mensagemTratada.includes(palavraChaveMinuscula)) {
            resposta = respostasClientes[palavraChave];
            return resposta;

            // Não retorna imediatamente para continuar a verificar outras palavras-chave
        } 
    }


    // COLOCAR 'INDICEALEATÓRIO'(ARRAY)


}
