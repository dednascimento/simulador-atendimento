import { enviarMensagem, exibirMensagem, obterHora } from './scripts/chat.js';
import { gerarResposta } from './scripts/gerenciadorRespostas.js';

export function finalizarAtendimento() {
    window.location.reload()
}

// Adicione um ouvinte de eventos para o botão de envio de mensagem
const botaoEnviar = document.getElementById('enviar');
botaoEnviar.addEventListener('click', enviarMensagem);

// Botão para finalizar o atendimento
const botaoFinalizar = document.getElementById('finalizar');
botaoFinalizar.addEventListener('click', finalizarAtendimento)

console.log('Inicio de Atendimento!')