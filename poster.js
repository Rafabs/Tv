function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                         
        {
            data: "2025-04-14",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "COMO VENDER DROGAS ONLINE (RÁPIDO)", poster: "poster-drogas.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "20:40", titulo: "O JARDINEIRO", poster: "poster-jardineiro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "21:30", titulo: "THE LAST OF US", poster: "poster-tlou.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        }, 
        {
            data: "2025-04-15",
            sessoes: [
                { horario: "23:59", titulo: "BLACK MIRROR", poster: "poster-mirror.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "COMO VENDER DROGAS ONLINE (RÁPIDO)", poster: "poster-drogas.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "20:40", titulo: "O JARDINEIRO", poster: "poster-jardineiro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "21:30", titulo: "O DOMO DE VIDRO", poster: "poster-vidro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        },     
        {
            data: "2025-04-16",
            sessoes: [
                { horario: "23:59", titulo: "BLACK MIRROR", poster: "poster-mirror.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },                                                    
        {
            data: "2025-04-18",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "COMO VENDER DROGAS ONLINE (RÁPIDO)", poster: "poster-drogas.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "20:40", titulo: "O JARDINEIRO", poster: "poster-jardineiro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "21:30", titulo: "O DOMO DE VIDRO", poster: "poster-vidro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "22:20", titulo: "NOS BASTIDORES DE STRANGER THINGS: A PRIMEIRA SOMBRA", poster: "poster-bastidores.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
            ]
        },     
        {
            data: "2025-04-19",
            sessoes: [
                { horario: "23:59", titulo: "BLACK MIRROR", poster: "poster-mirror.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "13:45", titulo: "COMO VENDER DROGAS ONLINE (RÁPIDO)", poster: "poster-drogas.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "14:20", titulo: "O JARDINEIRO", poster: "poster-jardineiro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "15:00", titulo: "O DOMO DE VIDRO", poster: "poster-vidro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },      
        {
            data: "2025-04-20",
            sessoes: [
                { horario: "14:45", titulo: "COMO VENDER DROGAS ONLINE (RÁPIDO)", poster: "poster-drogas.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "15:45", titulo: "CAMPEONATO BRASILEIRO", poster: "poster-campeonato-brasileiro", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "18:00", titulo: "O DOMO DE VIDRO", poster: "poster-vidro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "18:45", titulo: "O JARDINEIRO", poster: "poster-jardineiro.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "20:10", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:30", titulo: "FANSTÁSTICO", poster: "poster-fantastico.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "23:00", titulo: "THE LAST OF US", poster: "poster-tlou.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        }, 
        {
            data: "2025-04-21",
            sessoes: [
                { horario: "23:59", titulo: "BLACK MIRROR", poster: "poster-mirror.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
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
