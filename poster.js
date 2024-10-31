function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [    
        {
            data: "2024-11-01",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON - E22 - T05", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "AGATHA DESDE SEMPRE - E08 - T01", poster: "poster-agatha.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "20:40", titulo: "A ÚLTIMA NOITE EM TREMOR - E02 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` }
            ]
        },   
        {
            data: "2024-11-02",
            sessoes: [
                { horario: "00:01", titulo: "O QUE TIVER QUE SER", poster: "poster-tiver.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON - E01 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "13:45", titulo: "AGATHA DESDE SEMPRE - E09 - T01", poster: "poster-agatha.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-14">14</span>` },
                { horario: "14:25", titulo: "A ÚLTIMA NOITE EM TREMOR - E03 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
            ]
        },         
        {
            data: "2024-11-03",
            sessoes: [
                { horario: "14:25", titulo: "ABDUÇÃO EM MANHATTAN - E01 - T01", poster: "poster-abducao.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
                { horario: "19:00", titulo: "A ÚLTIMA NOITE EM TREMOR - E04 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "20:10", titulo: "YOUNG SHELDON - E02 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:30", titulo: "FANTÁSTICO", poster: "poster-fantastico.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "22:00", titulo: "PINGUIM - E07 - T01", poster: "poster-pinguim.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        },          
        {
            data: "2024-11-04",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON - E03 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },       
        {
            data: "2024-11-11",
            sessoes: [
                { horario: "20:00", titulo: "PINGUIM - E08 - T01", poster: "poster-pinguim.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
            ]
        },        
    ];

    var dataAtual = now.toISOString().split('T')[0];
    var horarioAtual = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    var programacaoHoje = diasProgramacao.find(dia => dia.data === dataAtual);

    if (programacaoHoje) {
        var proximaSessao = programacaoHoje.sessoes.find(sessao => sessao.horario >= horarioAtual);

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
