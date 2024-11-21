function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [                                                                                     
        {
            data: "2024-11-21",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },    
        {
            data: "2024-11-22",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },    
        {
            data: "2024-11-25",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "23:59", titulo: "PIANO DE FAMÍLIA", poster: "poster-piano.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2024-11-26",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "23:59", titulo: "JOY", poster: "poster-joy.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2024-11-27",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "13:25", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "13:45", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
            ]
        },   
        {
            data: "2024-11-29",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-sp1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:10", titulo: "SP2", poster: "poster-sp2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },
                { horario: "19:40", titulo: "YOUNG SHELDON", poster: "poster-sheldon.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
                { horario: "20:00", titulo: "SENNA", poster: "poster-senna.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-12">12</span>` },
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
