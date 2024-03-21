
// saudacao.js

export const respostasClientes = {
    // Saucacao
    // OI E OLÁ
    'oi': 'Olá',
    'ola': 'Oi',
    'olá': 'Oi',

    // DIA
    'bom dia': 'Bom dia',
    'boa tarde': 'Boa tarde',
    'boa noite': 'Boa noite',

    //TUDO BEM
    'tudo bem': 'Estou bem', 
    'como vai': 'Oi, estou bem e você?',
    'como voce esta': 'Estou bem e você?',
    'como você está': 'Estou bem e você?',

    // ESTOU BEM
    'estou bem': 'Que bom',
    'estou otimo': 'Que bom',
    'estou otima': 'Que bom',
    'estou ótimo': 'Que bom',
    'estou ótima': 'Que bom',
    'tudo, e voce': 'Estou bem também',
    'tudo e voce': 'Estou bem também',
    'tudo, e você': 'Estou bem também',
    'tudo e você': 'Estou bem também',
    'tudo otimo e com voce': 'Estou bem também',
    'tudo ótimo e com você': 'Estou bem também',
    'tudo otimo e com você': 'Estou bem também',
    'tudo ótimo e com voce': 'Estou bem também',
    'tudo otimo, e com voce': 'Estou bem também',
    'tudo ótimo, e com você': 'Estou bem também',
    'tudo otimo, e com você': 'Estou bem também',
    'tudo ótimo, e com voce': 'Estou bem também',
    'tudo e com voce': 'Estou bem também',
    'tudo e com você': 'Estou bem também',

    // AJUDA
    'posso ajudar': 'Quero a segunda via da fatura por email',
    'posso te ajudar': 'Quero a segunda via da fatura por email',
    'posso ajuda-lo': 'Quero a segunda via da fatura por email',
    'posso te ajuda-lo': 'Quero a segunda via da fatura por email',
    'posso ajudá-lo': 'Quero a segunda via da fatura por email',
    'posso te ajudá-lo': 'Quero a segunda via da fatura por email',

    //CONFIRMAÇÃO DE DADOS
    'cpf': '370.922.772-05',
    'nome do titular': 'Teste Play NAO ADD',
    'nome completo do titular': 'Teste Play NAO ADD',
    'cpf e nome completo do titular': 'Teste Play NAO ADD 370.922.772-05',
    'cpf e nome do titular': 'Teste Play NAO ADD 370.922.772-05',
    'cpf e o nome completo do titular': 'Teste Play NAO ADD 370.922.772-05',
    'cpf e o nome do titular': 'Teste Play NAO ADD 370.922.772-05',

    // AGRADECE
    'obrigado': 'De nada',
    'obrigada': 'De nada',
    'obrigado pela confirmaçao de dados': 'De nada',
    'obrigado pela confirmação de dados': 'De nada',
    'obrigada pela confirmaçao de dados': 'De nada',
    'obrigada pela confirmação de dados': 'De nada',

    // LOCALIZANDO CONTRATO
    'localizar o cadastro':'Ta bom',
    'localizando o cadastro':'Ta bom',
    'localizar seu cadastro':'Ta bom',
    'localizando seu cadastro':'Ta bom',
    'localizar o seu cadastro':'Ta bom',
    'localizando o seu cadastro':'Ta bom',
    'localizar o contrato':'Ta bom',
    'localizando o contrato':'Ta bom',
    'localizar o seu contrato':'Ta bom',
    'localizando o seu contrato':'Ta bom',
    'localizar seu contrato':'Ta bom',
    'localizando seu contrato':'Ta bom',
    'identificar o cadastro':'Ta bom',
    'identificar o seu cadastro':'Ta bom',
    'identificar seu cadastro':'Ta bom',
    'identificando seu cadastro':'Ta bom',
    'identificando o cadastro':'Ta bom',
    'identificando o seu cadastro':'Ta bom',
    'identificar seu contrato':'Ta bom',
    'identificando seu contrato':'Ta bom',
    'identificar o seu contrato':'Ta bom',
    'identificando o seu contrato':'Ta bom',
    'identificar o contrato':'Ta bom',
    'identificando o contrato':'Ta bom',

    // UM MOMENTO
    'momento': 'Ok',
    'instante': 'Ok',
    'instantes': 'Ok',
    'minuto': 'Ok',
    'minutos': 'Ok',

    // CONFIRMAÇÃO DE EMAIL
    'email': 'É naotem@email.com',
    'e-mail': 'É naotem@email.com',

    // Após envio
    'enviei': 'Sim, já chegou no meu e-mail.',
    'encaminhei': 'Sim, já chegou no meu e-mail.',
    'enviado': 'Sim, já chegou no meu e-mail.',
    'encaminhado': 'Sim, já chegou no meu e-mail.',

    // Finalização
    'ajudar em algo mais': 'Não, tudo certo obrigado',
    'ajudo em algo mais': 'Não, tudo certo obrigado',
    'ajudando em algo mais': 'Não, tudo certo obrigado',
};

export const aguardandoCalmo = [
    'Estou aguardando o atendimento.', 'Vão me transferir de novo?', 'Oi', '?', 'Cade meu atendimento', 'Estou no aguardo',
    'Olá', 'Ola', 'Olá?', 'Alguém?', 'Estou tentando pedir fatura',
    'Quando vão me atender ?'
]

export const aguardandoIrritado = [
    'Não conseguem mandar uma fatura se quer', 'Se demora assim pra mandar uma fatura imagina quando eu precisar de atendimento urgente', 
    'Estou tentando contato com vcs e ninguem me responde', '????', 'Nunca sou atendido', '??',
    'Eai meu cadê vcs', 'Depois me bloqueam por faturas em aberto', 'Atendimento demorado', 'vai me mandar a fatura ou vai me transferir ?',
]


// export let aguardandoCalmo
// export let aguardandoIrritado
// export let mensagemAutomatica
// export let scripts_aguardandoAtual
// // let scripts_aguardando = cliente_scripts[0]

// for (let statusCliente in scripts_aguardando) {
//     if(statusCliente === statusAtual) {
//         scripts_aguardandoAtual = scripts_aguardando.statusAtual
//         console.log(scripts_aguardandoAtual)
//         break
//     }
// }

// export function mensagemAutomaticaStatus(status_select) {
//     switch (status_select) {
//         case 'CALMO':
//             // Gerar indice aleatório
//             indiceAleatorio = Math.floor(Math.random() * scripts_aguardandoAtual.length);
//             mensagemAutomatica = aguardandoCalmo[indiceAleatorio];
//             break

//         case 'IMPACIENTE':      
//             // Gerar indice aleatório
//             indiceAleatorio = Math.floor(Math.random() * scripts_aguardandoAtual.length);
//             mensagemAutomatica = aguardandoIrritado[indiceAleatorio];
//             break
//         default:
//             return [];
//     }
// }
