// Importações
import { gerarResposta } from './adm_scripts.js';
import { respostasClientes, aguardandoCalmo, aguardandoIrritado } from './clientes_scripts.js';

// Elementos do DOM
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const botaoEnviar = document.getElementById('enviar');

// Variáveis Globais
let tempoUltimaInteracao = Date.now();
let contagemMensagens = 0;
let tempoAjustado;

// TME
let TME_TOTAL = []
let ULTIMOS_TME = []
let ULTIMA_INTERACAO = 0;
let contagemTME = 0;
let intervaloID;
let tempoEspera;
let subirSatisfação;
setInterval(calcularTME, 1)
setInterval(upgradeStatus, 250);



// Função para gerar indice aleatório 
export function indiceAleatorio(array) {
    var randomArray = Math.floor(Math.random() * array.length);
    return randomArray
}


// Definição de Status do Cliente
const statusCliente = {
    CALMO: { nome: 'Calmo', tempoMaximo: 160 }, // 
    IRRITADO: { nome: 'Irritado', tempoMaximo: 320 }, // 
};

const tipoStatus = ['CALMO', 'IRRITADO']

// Gerar statusAtual do cliente
let dadosStatus
export let statusAtual = tipoStatus[indiceAleatorio(tipoStatus)] // Gerar indice aleatório

for (let variacao in statusCliente) {
    if (variacao === statusAtual) {
        dadosStatus = statusCliente[variacao]
        console.log(dadosStatus)
    }
}

console.log(statusAtual)

// Função para enviar mensagem
export function enviarMensagem() {
    const mensagemUsuario = userInput.value.trim();

    if (mensagemUsuario) {
        exibirMensagem('Você', mensagemUsuario, 'atendente');
        userInput.value = '';


        // Verificar e atualizar o status do cliente
        verificarTempoResposta();
        contagemMensagens += 1

        // Se o intervalo já estiver sendo executado, limpe-o
        TME_TOTAL.push(intervaloID);
        upgradeStatus
        ultimaInteracao
        ULTIMOS_TME.push(intervaloID);
        clearInterval(intervaloID);
        contagemTME = 0;

        // Simular resposta automática após o tempo de espera ajustado
        setTimeout(() => {
            const respostaAutomatica = gerarResposta(mensagemUsuario, statusAtual);
            exibirMensagem(`Cliente (${dadosStatus.nome})`, respostaAutomatica, 'cliente');
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
export function obterHora() {
    let horaAtual = new Date();
    const hora = `${horaAtual.getHours().toString().padStart(2, '0')}:${horaAtual.getMinutes().toString().padStart(2, '0')}:${horaAtual.getSeconds().toString().padStart(2, '0')}`;
    return hora;
}


// Função para verificar o tempo de resposta
export function verificarTempoResposta() {

    if (intervaloID > dadosStatus.tempoMaximo) {
        if (statusAtual === tipoStatus[0]) {
            dadosStatus = statusCliente.IRRITADO;
            statusAtual = tipoStatus[1];
            console.log('Status atual do cliente após verificação:', statusAtual);
        }
    }
}

// Função para resposta automática
export function respostaAutomatica() {

    let mensagemAutomatica = null

    function msg_aguardando (status_select) {
        switch (status_select) {
            case 'CALMO':
                console.log('Função normalizada')
                mensagemAutomatica = aguardandoCalmo[indiceAleatorio(aguardandoCalmo)];

                break

            case 'IRRITADO':      
                console.log('Função normalizada')
                mensagemAutomatica = aguardandoIrritado[indiceAleatorio(aguardandoIrritado)];
                break

            default:
                return []
        }
    }

    msg_aguardando(statusAtual)
    upgradeStatus()
    exibirMensagem(`Cliente (${dadosStatus.nome})`, mensagemAutomatica, 'cliente');
    tempoUltimaInteracao = Date.now(); // Atualize o tempo da última interação
    verificarTempoResposta(); // Verifique e atualize o status do cliente
    
}


function ultimaInteracao() {
    if (TME_TOTAL.length = 0) {
        ULTIMA_INTERACAO = 0
    } else {
        ULTIMA_INTERACAO = ((TME_TOTAL.length) - 1)
    }
}

// Adicionar ouvinte de eventos para o botão de envio de mensagem
botaoEnviar.addEventListener('click', enviarMensagem);

// Simular resposta automática após um certo tempo
setTimeout(() => {
    respostaAutomatica();
}, 250);


function upgradeStatus() {
    let totalTempos = 0;

    if (ULTIMOS_TME.length > 2) {

        // Iterar sobre os valores em ULTIMOS_TME
        for (let tempo of Object.values(ULTIMOS_TME)) {
            totalTempos = totalTempos + tempo;
        }

        if (((totalTempos >= 20) & (totalTempos < 100)) & (statusAtual === tipoStatus[1])) {
            statusAtual = tipoStatus[0];
            console.log(`O nível de satisfação acabou de subir para ${statusAtual}`);
            dadosStatus = statusCliente.CALMO;
            zerarRecentes()
        } else if (totalTempos > 120) {
            zerarRecentes()
        }

    }
}

function zerarRecentes() {
    if (ULTIMOS_TME.length > 2) {
        ULTIMOS_TME = []
    }
}


function informacoesTime () {
    console.log(`
    Tempo ajustado ${tempoAjustado}
    Tempo de espera ${tempoEspera}
    Mensagens enviadas: ${contagemMensagens}
    contagem: ${intervaloID}
    TME's TOTAL: ${TME_TOTAL}
    ULTIMA INTERAÇÃO: ${ULTIMA_INTERACAO}
    TME's RECENTE: ${ULTIMOS_TME}
    `)
}


// Inicie o intervalo novamente
setInterval(infoTME, 2500)
setInterval(verificarTempoResposta, 800);
setInterval(limiteInteracao, 250);

let INTERACAO_LIMITE
// Encontre o elemento input range pelo ID
const meuRange = document.getElementById('meuRange');

function limiteInteracao () {
    INTERACAO_LIMITE = ULTIMA_INTERACAO + 50;
    meuRange.max = INTERACAO_LIMITE;
}

function calcularTME() {
    let segundosTME

    // Adiciona 0.0008 à contagem
    contagemTME += 0.005;
    
    // Arredonda a contagem para o número mais próximo de segundos
    segundosTME = (Math.round(contagemTME * 1000) / 1000)
    intervaloID = Math.floor(segundosTME)
    meuRange.value = intervaloID;

    if (meuRange.value >= ((INTERACAO_LIMITE/2) + 10)) {
        meuRange.classList.add('limite-atingido');
    } else {
        meuRange.classList.remove('limite-atingido');
    }

}

// Função para calcular o TME
function infoTME() {
    informacoesTime()
    // Coloque aqui o código para calcular o TME
    intervaloID = setInterval(calcularTME, 20);

}

