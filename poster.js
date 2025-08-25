function exibirProgramacao() {
    var programTitle = document.getElementById("program-title");
    var poster = document.getElementById("poster");
    var programacaoDiv = document.getElementById("programacao");
    var now = new Date();
    
    var diasProgramacao = [  
    {   
            data: "2025-08-25",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-SP1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },        
                { horario: "13:25", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-14">14</span>` },   
            ]
        },   
    {   
            data: "2025-08-27",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-SP1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },        
                { horario: "18:45", titulo: "SP2", poster: "poster-SP2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },        
                { horario: "19:15", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-14">14</span>` },   
                { horario: "19:35", titulo: "LONG STORY SHORT", poster: "poster-long.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-16">16</span>` },   
                { horario: "23:59", titulo: "PECADORES", poster: "poster-pecadores.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-16">16</span>` },   
            ]
        },        
    {   
            data: "2025-08-28",
            sessoes: [
                { horario: "11:45", titulo: "SP1", poster: "poster-SP1.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },        
                { horario: "19:10", titulo: "SP2", poster: "poster-SP2.jpg", detalhes: `<span class="label-orig">NAC</span> <span class="class-12">12</span>` },        
                { horario: "19:40", titulo: "HOW I MET YOUR MOTHER", poster: "poster-himym.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-14">14</span>` },   
                { horario: "20:00", titulo: "LONG STORY SHORT", poster: "poster-long.jpg", detalhes: `<span class="label-dub">DUB</span> <span class="class-16">16</span>` },   
                { horario: "23:59", titulo: "O LOBO DE WALL STREET", poster: "poster-lobo.jpg", detalhes: `<span class="label-leg">LEG</span> <span class="class-18">18</span>` },   
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
