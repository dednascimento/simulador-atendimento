// saudacao.js

import { statusAtual } from './chat.js';


const cliente_scripts = [
    {
        // AGUARDANDO
        tipo: "AGUARDANDO",
        CALMO: ['Estou aguardando o atendimento', 'Vão me transferir de novo', 'Oi', '?', 'Cade meu atendimento', 'Estou no aguardo',
                'Obrigado, aguardo o próximo atendimento', 'Olá', 'Olá?', 'Alguém?', 'Você vai me mandar a fatura ou vai me transferir ?',
                'Quando vão me atender ?'],
        IMPACIENTE: ['Estou tentando pedir fatura', 'Não conseguem mandar uma fatura se quer', 'Não aguento mais', 
                    'Estou tentando contato com vcs e ninguem me responde', '????', 'Nunca sou atendido', '??',
                    'Eai meu cadê vcs', 'Depois me bloqueam por faturas em aberto', 'Vocês não tem a capacidade'],
    }, {   
        tipo: "CALMO",  
        script:
        {
            // OI
            'oi':
            ['Olá', 'Oi', 'Olá! Tudo bem?', 'Oi! gostaria de ajuda?',
             'Poderia me ajudar?', 'Eae', 'Iae', 'Ae', 'Koe', 'Bom dia'],
            'olá':
            ['Olá', 'Oi', 'Olá! Tudo bem?', 'Oi! gostaria de ajuda?',
             'Poderia me ajudar?', 'Eae', 'Iae', 'Ae', 'Koe', 'Bom dia'],
            'eae':
            ['Olá', 'Oi', 'Olá! Tudo bem?', 'Oi! gostaria de ajuda?',
             'Poderia me ajudar?', 'Eae', 'Iae', 'Ae', 'Koe', 'Bom dia'],
            'koe':
            ['Olá', 'Oi', 'Olá! Tudo bem?', 'Oi! gostaria de ajuda?',
             'Poderia me ajudar?', 'Eae', 'Iae', 'Ae', 'Koe', 'Bom dia'],

            // BOM 
            'bom dia':
            ['Olá, bom dia', 'Oi, bom dia', 'Bom dia! Tudo bem?', 'Bom dia! poderia me ajudar?',
             'Bom dia', 'Bom diaaa', 'Bom dia, tudo jóia ?', 'Bom dia, como está?'],
            'boa tarde':
            ['Olá, boa tarde', 'Oi, boa tarde', 'boa tarde! Tudo bem?', 'boa tarde! poderia me ajudar?',
             'boa tarde', 'boa tardeee', 'boa tarde, tudo jóia ?', 'boa tarde, como está?'],
            'boa noite':
            ['Olá, boa noite', 'Oi, boa noite', 'boa noite! Tudo bem?', 'boa noite! poderia me ajudar?',
             'boa noite', 'boa noite', 'boa noite, tudo jóia ?', 'boa noite, como está?'],

            // SAUDACAO COM PERGUNTA
            'bom dia, tudo bem?':
            ['Olá, bom dia! Tudo e com você ?', 'Oi, bom dia! Tudo e com você ?', 'Bom dia! Tudo e com você ?', 'Bom dia! Tudo e com você ?',
             'Bom dia, tudo e com você ?', 'Bom diaaa, tudo e com você ?', 'Bom dia, tudo jóia e com você ?', 'Bom dia, tudo bom e com você ?',
             'Bom dia, estou bem e você?', 'Estou bem e você como está?', 'Tudo ótimo e com você ?'],

            'boa tarde, tudo bem?':
            ['Olá, boa tarde! Tudo e com você ?', 'Oi, boa tarde! Tudo e com você ?', 'boa tarde! Tudo e com você ?', 'boa tarde! Tudo e com você ?',
            'boa tarde, tudo e com você ?', 'boa tardeee, tudo e com você ?', 'boa tarde, tudo jóia e com você ?', 'boa tarde, tudo bom e com você ?',
            'boa tarde, estou bem e você?', 'Estou bem e você como está?', 'Tudo ótimo e com você ?'],

            'boa noite, tudo bem?':
            ['Olá, boa noite! Tudo e com você ?', 'Oi, boa noite! Tudo e com você ?', 'boa noite! Tudo e com você ?', 'boa noite! Tudo e com você ?',
            'boa noite, tudo e com você ?', 'boa noiteee, tudo e com você ?', 'boa noite, tudo jóia e com você ?', 'boa noite, tudo bom e com você ?',
            'boa noite, estou bem e você?', 'Estou bem e você como está?', 'Tudo ótimo e com você ?'],

            'oi, tudo bem ?':
            ['Oi, tudo bom e com você ?', 'Tudo, e com você ?', 'Olá, tudo bom e com você ?', 'Oi, tudo bem e contigo ?',
             'Poderia me ajudar?', 'Eae, tudo bem e contigo ?', 'Iae, tudo bem e contigo ?', 'Tudo jóia e com você', 'Koe, tudo jóia e contigo ?', 
             'Bom dia, tudo bem e contigo ?', 'Tudo perfeito e com vocês ?', 'Tudo ótimo e com você ?', 'Eae, tudo jóia e com você ?',
             'Eae, tudo ótimo e com você?', 'Koe, tudo bão e contigo ?'],

            'olá, tudo bem ?':
            ['Oi, tudo bom e com você ?', 'Tudo, e com você ?', 'Olá, tudo bom e com você ?', 'Oi, tudo bem e contigo ?',
            'Poderia me ajudar?', 'Eae, tudo bem e contigo ?', 'Iae, tudo bem e contigo ?', 'Tudo jóia e com você', 'Koe, tudo jóia e contigo ?', 
            'Bom dia, tudo bem e contigo ?', 'Tudo perfeito e com vocês ?', 'Tudo ótimo e com você ?', 'Eae, tudo jóia e com você ?',
            'Eae, tudo ótimo e com você?', 'Koe, tudo bão e contigo ?'],

            'eae, tudo bem ?':
            ['Oi, tudo bom e com você ?', 'Tudo, e com você ?', 'Olá, tudo bom e com você ?', 'Oi, tudo bem e contigo ?',
            'Poderia me ajudar?', 'Eae, tudo bem e contigo ?', 'Iae, tudo bem e contigo ?', 'Tudo jóia e com você', 'Koe, tudo jóia e contigo ?', 
            'Bom dia, tudo bem e contigo ?', 'Tudo perfeito e com vocês ?', 'Tudo ótimo e com você ?', 'Eae, tudo jóia e com você ?',
            'Eae, tudo ótimo e com você?', 'Koe, tudo bão e contigo ?'],

            'koe, tudo bem ?':
            ['Oi, tudo bom e com você ?', 'Tudo, e com você ?', 'Olá, tudo bom e com você ?', 'Oi, tudo bem e contigo ?',
            'Poderia me ajudar?', 'Eae, tudo bem e contigo ?', 'Iae, tudo bem e contigo ?', 'Tudo jóia e com você', 'Koe, tudo jóia e contigo ?', 
            'Bom dia, tudo bem e contigo ?', 'Tudo perfeito e com vocês ?', 'Tudo ótimo e com você ?', 'Eae, tudo jóia e com você ?',
            'Eae, tudo ótimo e com você?', 'Koe, tudo bão e contigo ?'],

        },
        tempoMaximo: 300  
    }, {
        tipo: "IMPACIENTE",
        script:
        {
            SAUDC: 
            ['Olá, finalmente'],
            INFORMPROB: 
            ['Estou á meio ano esperando uma segunda via.'],
            ENCERRAMENTO: 
            ['Finalmente, muito obrigado.'],
            SOMENTE: 
            ['Somente isso, obrigado.'],
            ELOGIO: 
            ['Parabéns por ter resolvido.'],
            OFENSA: 
            ['Demora muito para fazer as coisas.'],
            DESCULPAS: 
            ['Desculpa, não é com você é com a empresa.'],
            INATIVO: 
            ['?']
        },
        tempoMaximo: 150
    }
]




function pessoaSelecionada(status_select) {

    // DENTRO DE 'cliente_scripts' VERIFIQUE CADA ITEM
    for (let i = 0; i < cliente_scripts.length; i++) {
        const validando_script = cliente_scripts[i]; // PEGUE ESSE ITEM GUARDE
        

        // CASO ESSE ITEM SEJA IGUAL O 'status_select' 
        if (validando_script.tipo === status_select) {
            return validando_script.script; // RETORNE ESSE VALOR
        }
    }

    return [];
}


export let scriptAtual = null

async function validar_status(validar) {
    switch (validar) {
        case "CALMO":
            scriptAtual = pessoaSelecionada(validar);
            break

        case 'IMPACIENTE':      
            scriptAtual = pessoaSelecionada(validar);
            break
        default:
            scriptAtual = [];
    }
}


validar_status(statusAtual)

console.log(scriptAtual)


// PROCURANDO FRASE DE AGUARDANDO:

export let aguardandoCalmo
export let aguardandoIrritado


function aguardando(status_select) {

    switch (status_select) {
        case 'CALMO':
            aguardandoCalmo = cliente_scripts[0][status_select];
            
            break

        case 'IMPACIENTE':      
            aguardandoIrritado = cliente_scripts[0][status_select];
            break
        default:
            scriptAtual = [];
    }
}

aguardando(statusAtual)

export let mensagemAutomatica
export function mensagem_automática(status_select) {
    switch (status_select) {
        case 'CALMO':
            // Gerar indice aleatório
            indiceAleatorio = Math.floor(Math.random() * aguardandoCalmo.length);
            mensagemAutomatica = aguardandoCalmo[indiceAleatorio];
            break

        case 'IMPACIENTE':      
            // Gerar indice aleatório
            indiceAleatorio = Math.floor(Math.random() * aguardandoIrritado.length);
            mensagemAutomatica = aguardandoIrritado[indiceAleatorio];
            break
        default:
            return [];
    }
}




// export const aguardandoCalmo = [
//     'Estou aguardando o atendimento', 'Vão me transferir de novo', 'Oi', '?', 'Cade meu atendimento', 'Estou no aguardo',
//     'Obrigado, aguardo o próximo atendimento', 'Olá', 'Olá?', 'Alguém?', 'Você vai me mandar a fatura ou vai me transferir ?',
//     'Quando vão me atender ?'
// ]

// export const aguardandoIrritado = [
//     'Estou tentando pedir fatura', 'Não conseguem mandar uma fatura se quer', 'Não aguento mais', 
//     'Estou tentando contato com vcs e ninguem me responde', '????', 'Nunca sou atendido', '??',
//     'Eai meu cadê vcs', 'Depois me bloqueam por faturas em aberto', 'Vocês não tem a capacidade'
// ]
