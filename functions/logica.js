// Importações
import { gerarResposta } from './adm_scripts.js';
import { respostasClientes, aguardandoCalmo, aguardandoIrritado } from './clientes_scripts.js';

// Elementos do DOM
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const botaoEnviar = document.getElementById('enviar');

// Variáveis Globais
let contagemMensagens = 0;
let ULTIMOS_TME = [];
let divCliente = document.getElementById('div-box-cliente');
let dadosStatus;
let INTERACAO_LIMITE = 2;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;
let contadorHumor = 0;
const tipoStatus = ['CALMO', 'IRRITADO'];
export let statusAtual = tipoStatus[indiceAleatorio(tipoStatus)]; // Gerar indice aleatório

// Definição de Status do Cliente
const statusCliente = {
    CALMO: { nome: 'Calmo', tempoMaximo: 1 }, // 
    IRRITADO: { nome: 'Irritado', tempoMaximo: 2 }, // 
};

// Função para gerar indice aleatório 
export function indiceAleatorio(array) {
    var randomArray = Math.floor(Math.random() * array.length);
    return randomArray
}

for (let variacao in statusCliente) {
    if (variacao === statusAtual) {
        dadosStatus = statusCliente[variacao]
        console.log(dadosStatus)
    }
}

console.log('Humor:', statusAtual)

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
export function obterHora() {
    let horaAtual = new Date();
    const hora = `${horaAtual.getHours().toString().padStart(2, '0')}:${horaAtual.getMinutes().toString().padStart(2, '0')}:${horaAtual.getSeconds().toString().padStart(2, '0')}`;
    return hora;
}

// Função para resposta automática
setTimeout(respostaAutomatica, 3000);
export function respostaAutomatica() {
    
    let mensagemAutomatica = null
    
    function msg_aguardando (status_select) {
        switch (status_select) {
            case 'CALMO':
                console.log('Mensagem baseada no humor enviada')
                mensagemAutomatica = aguardandoCalmo[indiceAleatorio(aguardandoCalmo)];
                break
                
            case 'IRRITADO':
                console.log('Mensagem baseada no humor enviada')
                mensagemAutomatica = aguardandoIrritado[indiceAleatorio(aguardandoIrritado)];
                break
                    
            default:
                return []
        }
    }
    
    msg_aguardando(statusAtual)
    exibirMensagem(`Cliente (${dadosStatus.nome})`, mensagemAutomatica, 'cliente');
}

// Adicionar ouvinte de eventos para o botão de envio de mensagem
botaoEnviar.addEventListener('click', enviarMensagem);

//Verifica a soma dos dois últimos TMEs e atualiza o Status do cliente
function upgradeStatus() {
    let totalTempos = 0;

    if (ULTIMOS_TME.length > 4) {
                    
        // Iterar sobre os valores em ULTIMOS_TME
        for (let tempo of Object.values(ULTIMOS_TME)) {
            totalTempos = totalTempos + tempo;
        }
                    
        if ((totalTempos <= 20) & (statusAtual === tipoStatus[1])) {
            statusAtual = tipoStatus[0];
            console.log(`Humor alterado para ${statusAtual}`);
            dadosStatus = statusCliente.CALMO;
            contadorHumor++;
            ULTIMOS_TME = [];
            totalTempos = 0;
        } else if ((totalTempos <= 20) & (statusAtual === tipoStatus[0])) {
            ULTIMOS_TME = [];
            totalTempos = 0;
        } else {
            ULTIMOS_TME = [];
            totalTempos = 0;
        }
    }
}

setInterval(informacoesTime, 2500)
function informacoesTime () {
    console.log(`
        Mensagens enviadas: ${contagemMensagens}
        ULTIMOS TME: ${ULTIMOS_TME}
        Contador de alteração de humor: ${contadorHumor}
    `)
}

start()
function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}
    
function pause() {
    clearInterval(cron);
}
    
function reset() {
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}
    
function timer() {
    if ((millisecond += 10) == 650) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
    }
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

setInterval(calcularTME, 1)
function calcularTME() {
    if (minute >= INTERACAO_LIMITE) {
        divCliente.classList.add('limite-atingido')
        divCliente.classList.remove('bg-white');
    } else {
        divCliente.classList.remove('limite-atingido');
        divCliente.classList.add('bg-white');
    }
}

setInterval(repetirMensagem, 1)
function repetirMensagem() {
    if (contagemMensagens >= 0 & second == 35 & millisecond == 0){
        console.log('Tempo de espera atingido');
        respostaAutomatica()
    }
}

// Função para verificar o tempo de resposta
setInterval(verificarTempoResposta, 800);
export function verificarTempoResposta() {
    if (minute == dadosStatus.tempoMaximo) {
        if (statusAtual == tipoStatus[0]) {
            dadosStatus = statusCliente.IRRITADO;
            statusAtual = tipoStatus[1];
            console.log('Status atual do cliente:', statusAtual);
            contadorHumor++;
        }
    }
}

// Função para enviar mensagem
export function enviarMensagem() {
    const mensagemUsuario = userInput.value.trim();

    if (mensagemUsuario) {
        exibirMensagem('Você', mensagemUsuario, 'atendente');
        userInput.value = '';


        // Verificar e atualizar o status do cliente
        contagemMensagens += 1
        
        // Se o intervalo já estiver sendo executado, limpe-o
        ULTIMOS_TME.push(minute, second);
        upgradeStatus()
        reset()

        // Simular resposta automática após o tempo de espera ajustado
        setTimeout(() => {
            exibirMensagem(`Cliente (${dadosStatus.nome})`, gerarResposta(mensagemUsuario), 'cliente');
        }, 3000);
    }
}