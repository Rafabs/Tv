function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [                                                                                                                                                                                                                                                                                                                                                                                         
        {
            data: "2025-01-24",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
                { horario: "20:05", titulo: "MEU AMIGO TOTORO", poster: "poster-totoro.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-livre">L</span>` },                
            ]
        },   
        {
            data: "2025-01-25",
            sessoes: [
                { horario: "09:50", titulo: "FINAL - COPINHA", poster: "poster-default.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "12:05", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
                { horario: "13:45", titulo: "OLHOS DE GATO", poster: "poster-gato.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-10">10</span>` },                
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2025-01-26",
            sessoes: [
                { horario: "17:45", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
                { horario: "18:05", titulo: "O REINO DOS GATOS", poster: "poster-reino.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-10">10</span>` },                
                { horario: "18:30", titulo: "CAMPEONATO PAULISTA", poster: "poster-paulistao-2025.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "20:30", titulo: "FANTÁSTICO", poster: "poster-fantastico.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2025-01-27",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
            ]
        },   
        {
            data: "2025-01-29",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
                { horario: "20:05", titulo: "SEU AMIGÃO DA VIZINHANÇA: HOMEM-ARANHA", poster: "poster-aranha.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "21:35", titulo: "CAMPEONATO PAULISTA", poster: "poster-paulistao-2025.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2025-01-30",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
                { horario: "20:05", titulo: "SEU AMIGÃO DA VIZINHANÇA: HOMEM-ARANHA", poster: "poster-aranha.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2025-01-31",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "AEROPORTO - ÁREA RESTRITA", poster: "poster-aeroporto.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-14">14</span>` },
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
