function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                
        {
            data: "2025-03-23",
            sessoes: [
                { horario: "16:15", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "16:35", titulo: "F1: DIRIGIR PARA VIVER", poster: "poster-f1.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "17:30", titulo: "ASSASSINATO NA CASA BRANCA", poster: "poster-branca.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "18:20", titulo: "REVELAÇÕES", poster: "poster-revelacoes.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "20:30", titulo: "FANTÁSTICO", poster: "poster-fantastico.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },    
        {
            data: "2025-03-24",
            sessoes: [
                { horario: "23:59", titulo: "MOANA 2", poster: "poster-moana.jpg", detalhes: `<span class="label-orig">DUB</span> <span class="class-livre">L</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },     
        {
            data: "2025-03-26",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "ASSASSINATO NA CASA BRANCA", poster: "poster-branca.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "20:50", titulo: "DEMOLIDOR: RENASCIDO", poster: "poster-demolidor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        },      
        {
            data: "2025-03-27",
            sessoes: [
                { horario: "23:59", titulo: "UM LUGAR SILENCIOSO: DIA UM", poster: "poster-lugar.jpg", detalhes: `<span class="label-orig">LEG</span> <span class="class-14">14</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "ASSASSINATO NA CASA BRANCA", poster: "poster-branca.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "20:50", titulo: "A CAÇA AO TESOURO DE FENN", poster: "poster-fenn.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "20:50", titulo: "DEMOLIDOR: RENASCIDO", poster: "poster-demolidor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        },      
        {
            data: "2025-03-28",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },                                                   
    ];

    var dataAtual = now.toISOString().split('T')[0];
    var horarioAtual = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    var programacaoHoje = diasProgramacao.find(dia => dia.data === dataAtual);

    if (programacaoHoje) {
        var proximaSessao = programacaoHoje.sessoes.find(sessao => sessao.horario >= horarioAtual);
        if (!proximaSessao) {
            var indiceDiaAtual = diasProgramacao.findIndex(dia => dia.data === dataAtual);
            var proximosDias = diasProgramacao.slice(indiceDiaAtual + 1);
            var proximoDiaDisponivel = proximosDias.find(dia => dia.sessoes.length > 0);
            if (proximoDiaDisponivel) {
                proximaSessao = proximoDiaDisponivel.sessoes[0]; // Primeira sessão do próximo dia
                programacaoHoje = proximoDiaDisponivel; // Atualiza para exibir o próximo dia
            }
        }
        if (proximaSessao) {
            programTitle.innerText = proximaSessao.titulo;
            poster.src = `./posters/${proximaSessao.poster}`;
            programacaoDiv.innerHTML = `
                <ul>  
                    <li><span class="horario">${proximaSessao.horario}</span> ${proximaSessao.detalhes}</li>
                </ul>`;
        } else {
            programTitle.innerText = "Nenhuma Programação Disponível";
            programacaoDiv.innerHTML = "<p>Nenhum programa disponível no momento.</p>";
            poster.src = "./posters/default-poster.jpg";
        }
    } else {
        programTitle.innerText = "Nenhuma Programação Disponível";
        programacaoDiv.innerHTML = "<p>Nenhum programa disponível no momento.</p>";
        poster.src = "./posters/default-poster.jpg";
    }    
}

// Chama a função ao carregar a página
window.onload = exibirProgramacao;
