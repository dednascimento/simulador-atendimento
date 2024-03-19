// chat.js

// Importar a função gerarResposta do arquivo gerenciadorRespostas.js
import { gerarResposta } from './gerenciadorRespostas.js';
import { mensagemAutomatica, mensagem_automática} from './respostasClientes.js';

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

let tempoUltimaInteracao = Date.now();

// Definir os intervalos de tempo para cada status do cliente
const statusCliente = {
    CALMO: { nome: 'Calmo', tempoMaximo: 80 }, // 5 minutos em segundos
    IMPACIENTE: { nome: 'Impaciente', tempoMaximo: 100 }, // 3 minutos em segundos
    IRRITADO: { nome: 'Irritado', tempoMaximo: 80 } // 1 minuto em segundos
};

export let statusAtual = statusCliente.CALMO;

export function enviarMensagem() {
    const mensagemUsuario = userInput.value.trim();

    if (mensagemUsuario) {
        exibirMensagem('Você', mensagemUsuario, 'atendente');
        userInput.value = '';

        // Atualizar o tempo da última interação
        tempoUltimaInteracao = Date.now();

        // Verificar e atualizar o status do cliente
        verificarTempoResposta();

        // Definir o tempo de espera com base no status do cliente
        const tempoEspera = calcularTempoEspera();

        // Reduzir o tempo de espera em uma certa margem
        const tempoAjustado = tempoEspera * 0.05; // Por exemplo, 5% de redução

        console.log('Tempo de espera ajustado:', tempoAjustado, 'milissegundos');

        // Simular resposta automática após o tempo de espera ajustado
        setTimeout(() => {
            const respostaAutomatica = gerarResposta(mensagemUsuario, statusAtual.nome);
            exibirMensagem(`Cliente (${statusAtual.nome})`, respostaAutomatica, 'cliente');
        }, tempoAjustado);
    }
}

// Função para exibir mensagem
export function exibirMensagem(nome, mensagem, tipo) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add('mensagem');
    novaMensagem.classList.add(tipo === 'atendente' ? 'atendente' : 'cliente');

    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = nome;

    const texto = document.createElement('div');
    texto.classList.add('texto');
    texto.textContent = mensagem;

    const hora = document.createElement('div');
    hora.classList.add('hora');
    hora.textContent = obterHora();

    novaMensagem.appendChild(info);
    novaMensagem.appendChild(texto);
    novaMensagem.appendChild(hora);

    chatContainer.appendChild(novaMensagem);

    // Rolagem automática para exibir a última mensagem
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Função para obter a hora atual da mensagem enviada
// HORARIO CORRIGIDO
export function obterHora() {
    let horaAtual = new Date();
    const hora = `${horaAtual.getHours().toString().padStart(2, '0')}:${horaAtual.getMinutes().toString().padStart(2, '0')}:${horaAtual.getSeconds().toString().padStart(2, '0')}`;
    return hora;
}


export function verificarTempoResposta() {
    const tempoAtual = Date.now();
    const tempoPassado = tempoAtual - tempoUltimaInteracao;

    if (tempoPassado > statusAtual.tempoMaximo * 300) {
        if (statusAtual.nome === statusCliente.CALMO.nome) {
            statusAtual = statusCliente.IMPACIENTE;
        } else if (statusAtual.nome === statusCliente.IMPACIENTE.nome) {
            statusAtual = statusCliente.IRRITADO;
        }
        console.log('Status atual do cliente após verificação:', statusAtual);
        if (statusAtual.nome == statusCliente.IRRITADO.nome) {
            respostaAutomatica();
        }
    }
}

// Função para calcular o tempo de espera
export function calcularTempoEspera() {
    // Retorna o tempo máximo do estado atual do cliente em milissegundos
    return statusAtual.tempoMaximo * 1000;
}

// Adicione um ouvinte de eventos para o botão de envio de mensagem
const botaoEnviar = document.getElementById('enviar');
botaoEnviar.addEventListener('click', enviarMensagem);

// Adicione essa linha no final do arquivo para iniciar a verificação do tempo de resposta
setInterval(verificarTempoResposta, 500); // Verificação a cada meio segundo

// No final da função enviarMensagem, adicione este trecho para simular uma resposta automática do cliente
setTimeout(() => {
    respostaAutomatica();
}, 1000); // Tempo em milissegundos (3 segundos)


export let indiceAleatorio

// IF E ELSE IF DO ARRAY CORRIGIDO
export function respostaAutomatica() {
    if (statusAtual == statusCliente.CALMO) {
    mensagem_automática(statusAtual.nome)

    
    exibirMensagem(`Cliente (${statusAtual.nome})`, mensagemAutomatica, 'cliente');
    tempoUltimaInteracao = Date.now(); // Atualize o tempo da última interação
    verificarTempoResposta(); // Verifique e atualize o status do cliente

    } else if (statusAtual == statusCliente.IRRITADO) { //Se o status do cliente estiver irritado, usara array de irritado

        exibirMensagem(`Cliente (${statusAtual.nome})`, mensagemAutomatica, 'cliente');
        tempoUltimaInteracao = Date.now(); // Atualize o tempo da última interação
        verificarTempoResposta(); // Verifique e atualize o status do cliente
    }
}



