function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [      
        {
            data: "2024-11-06",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "18:45", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:15", titulo: "YOUNG SHELDON - E04 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "19:35", titulo: "A ÚLTIMA NOITE EM TREMOR - E05 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
                { horario: "20:40", titulo: "ABDUÇÃO EM MANHATTAN - E03 - T01", poster: "poster-abducao.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2024-11-07",
            sessoes: [
                { horario: "00:01", titulo: "PEDRO PÁRAMO", poster: "poster-paramo.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-16">16</span>` },
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON - E05 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "A ÚLTIMA NOITE EM TREMOR - E06 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
            ]
        },     
        {
            data: "2024-11-08",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON - E06 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },                                 
        {
            data: "2024-11-11",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON - E07 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "PINGUIM - E08 - T01", poster: "poster-pinguim.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },
                { horario: "20:50", titulo: "A ÚLTIMA NOITE EM TREMOR - E07 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
            ]
        },        
        {
            data: "2024-11-12",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON - E08 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "A ÚLTIMA NOITE EM TREMOR - E08 - T01", poster: "poster-tremor.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },
            ]
        },    
        {
            data: "2024-11-13",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON - E08 - T06", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
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
