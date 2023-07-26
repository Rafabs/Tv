function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");
  
  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");
  
  if (data === '26/07') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E10-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:35</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E2-T4</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '27/07') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E11-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E3-T4</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '28/07') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E12-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E4-T4</span></li> <hr class="filme-separador">     
      </ul>
    `;
  } else if (data === '29/07') {
    programacaoDiv.innerHTML = `
    <ul>
        <li><span class="horario">06:30</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA DO MUNDO FEMININA 2023</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">15:00</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E13-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">15:20</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E5-T4</span></li> <hr class="filme-separador">         
        <li><span class="horario">16:10</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">BIRD BOX: BARCELONA</span></li> <hr class="filme-separador">         
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">

      </ul>
    `;
  } else if (data === '30/07') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">11:00</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">CAMPEONATO BRASILEIRO</span></li> <hr class="filme-separador">
        <li><span class="horario">15:00</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E14-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">15:20</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E6-T4</span></li> <hr class="filme-separador">
        <li><span class="horario">16:00</span> <span class="label-orig">LEG</span> <span class="class-livre">L</span> <span class="filme">STAR WARS - UMA NOVA AMEAÇA</span></li> <hr class="filme-separador">
        <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">          
      </ul>
    `;
  } else if (data === '31/07') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E15-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E7-T4</span></li> <hr class="filme-separador">     
      </ul>
    `;
  } else if (data === '01/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E16-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E8-T4</span></li> <hr class="filme-separador">      
      </ul>
    `;
  } else if (data === '02/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E17-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:35</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E9-T4</span></li> <hr class="filme-separador">     
      </ul>
    `;
  } else if (data === '03/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">17:25</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E10-T4</span></li> <hr class="filme-separador">     
        <li><span class="horario">18:20</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E01-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">18:40</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA SULAMERICANA</span></li> <hr class="filme-separador">       
      </ul>
    `;
  } else if (data === '04/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E02-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-orig">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E11-T4</span></li> <hr class="filme-separador">      
      </ul>
    `;
  } else if (data === '05/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">10:25</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">TITÃS - E12-T4</span></li> <hr class="filme-separador">
        <li><span class="horario">11:25</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E03-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">14:00</span> <span class="label-leg">LEG</span> <span class="class-livre">L</span> <span class="filme">ROCKY</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '06/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">11:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E01-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E04-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">15:45</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">CAMPEONATO BRASILEIRO</span></li> <hr class="filme-separador">
        <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">          
        </ul>
    `;
  } else if (data === '07/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E05-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E02-T1</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '08/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E06-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E03-T1</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '09/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E07-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E04-T1</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === '10/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">17:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E08-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">18:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E05-T1</span></li> <hr class="filme-separador">
        <li><span class="horario">18:40</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA SULAMERICANA</span></li> <hr class="filme-separador">    
      </ul>
    `;
  } else if (data === '11/08') {
    programacaoDiv.innerHTML = `
      <ul>
        <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
        <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
        <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
        <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E09-T2</span></li> <hr class="filme-separador">
        <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">INVASÃO SECRETA - E06-T1</span></li> <hr class="filme-separador">
      </ul>
    `;
  } else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>
        <li class="filme-poster">
          <img src="imgs//poster-invasao-secreta.jpg" alt="Invasão Secreta">
          <div class="filme-texto">
            <span class="dia">06/08</span>
            <span class="class-14">14</span>
            <span class="filme">INVASÃO SECRETA - T1</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-sintonia.jpg" alt="Sintonia">
          <div class="filme-texto">
            <span class="dia">12/08</span>
            <span class="class-16">16</span>
            <span class="filme">SINTONIA - T4</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-the-witcher.jpg" alt="The Witcher">
          <div class="filme-texto">
            <span class="dia">20/08</span>
            <span class="class-18">18</span>
            <span class="filme">THE WITCHER - T3</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-explorando.jpg" alt="Explorando o Desconhecido: A Máquina do Tempo Cósmica">
          <div class="filme-texto">
            <span class="dia">AGOSTO</span>
            <span class="class-10">10</span>
            <span class="filme">EXPLORANDO O DESCONHECIDO: A MÁQUINA DO TEMPO CÓSMICA</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-paraiso.jpg" alt="Paraiso">
          <div class="filme-texto">
            <span class="dia">AGOSTO</span>
            <span class="class-16">16</span>
            <span class="filme">PARAÍSO</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li><span class="dia">AGOSTO</span> <span class="class-16">16</span> <span class="filme">MARK CAVENDISH: PEDALANDO ATÉ O FIM</span></li>    
        <hr class="filme-separador">

        <li><span class="dia">AGOSTO</span> <span class="class-12">12</span> <span class="filme">CONTAMINAÇÃO: A VERDADE SOBRE O QUE COMEMOS - T1</span></li>        
        <hr class="filme-separador">

        <li><span class="dia">EM BREVE</span> <span class="class-16">16</span> <span class="filme">IMPÉRIO DA DOR - T1</span></li>        
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-agente-stone.jpg" alt="Agente Stone">
          <div class="filme-texto">
            <span class="dia">EM BREVE</span>
            <span class="class-14">14</span>
            <span class="filme">AGENTE STONE</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li><span class="dia">EM BREVE</span> <span class="class-14">14</span> <span class="filme">UNTOLD: A VERGONHA DO DOPING</span></li>      
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-lupin.jpg" alt="Lupin">
          <div class="filme-texto">
          <span class="dia">OUTUBRO</span>
            <span class="class-12">12</span>
            <span class="filme">LUPIN - T3</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-loki.jpg" alt="Loki">
          <div class="filme-texto">
          <span class="dia">EM BREVE</span>
            <span class="class-14">14</span>
            <span class="filme">LOKI - T2</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
        <img src="imgs//poster-echo.jpg" alt="Echo">
        <div class="filme-texto">
        <span class="dia">EM BREVE</span>
          <span class="class-0">0</span>
          <span class="filme">ECHO - T1</span>
        </div>
      </li>
      <hr class="filme-separador">

      <li class="filme-poster">
      <img src="imgs//poster-ironheart.jpg" alt="Ironheart">
      <div class="filme-texto">
      <span class="dia">EM BREVE</span>
        <span class="class-0">0</span>
        <span class="filme">IRONHEART - T1</span>
      </div>
    </li>
    <hr class="filme-separador">

        <li><span class="dia">EM BREVE</span> <span class="class-0">0</span> <span class="filme">THE PENGUIN - T1</span></li>      
        <hr class="filme-separador">

      </ul>
    `;
  } else {
    programacaoDiv.innerHTML = "<p>Não há programação disponível para esta data.</p>";
  }

  // Obter a hora atual
  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();
  
  // Remove a classe 'active' de todos os botões
  for (var i = 1; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Verificar cada item da lista
  var items = programacaoDiv.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var horario = item.getElementsByClassName("horario")[0];
    var horaPrograma = parseInt(horario.innerText.split(":")[0]);
    
    // Verifica se o programa pertence ao primeiro botão
    if (button.classList.contains("active") && horaPrograma <= horaAtual) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  }
}

function ocultarBotao() {
  var btn = document.getElementById("btn");
  btn.style.display = "none";
}

// Função para formatar o horário
function formatTime(date) {
var hours = date.getHours();
var minutes = date.getMinutes();
return hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
}

// Função para formatar a data
function formatDate(date) {
var options = { weekday: 'long', month: 'long', day: 'numeric' };
return date.toLocaleDateString('pt-BR', options);
}

// Função para obter a temperatura e o clima da API de clima (substitua "YOUR_API_KEY" pela sua chave de API real)
function getWeather() {
var apiKey = '16771021c6dc278a8a9ebdb23e682e50'; // Substitua "YOUR_API_KEY" pela sua chave de API real
var url = "https://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo&appid=" + apiKey;

// Fazer uma requisição GET para a API de clima
fetch(url)
  .then(response => response.json())
  .then(data => {
    var temperature = Math.round(data.main.temp - 273.15); // Converter temperatura de Kelvin para Celsius
    var weatherIcon = data.weather[0].icon;

    // Atualizar os elementos HTML com os dados obtidos
    document.getElementById("temperature").textContent = temperature + "°C";
    document.getElementById("weather-icon").innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png" alt="Weather Icon">';
  })
  .catch(error => {
    console.log("Erro ao obter dados do clima:", error);
  });
}

// Função para atualizar o horário, data e localização a cada segundo
function updateDateTime() {
var date = new Date();
var time = formatTime(date);
var formattedDate = formatDate(date);

// Atualizar os elementos HTML com os dados atuais
document.getElementById("date-time").textContent = formattedDate + " " + time;
}

// Chamar a função para obter o clima
getWeather();

// Chamar a função para atualizar o horário, data e localização a cada segundo
setInterval(updateDateTime, 1000);

var banner = document.getElementById("banner");
var slider = banner.querySelector(".slider");
var slides = slider.getElementsByClassName("slide");
var currentSlideIndex = 0;
var prevButton = banner.querySelector(".prev-button");
var nextButton = banner.querySelector(".next-button");

function showSlide(index) {
  // Define a posição de transição para exibir o slide correspondente ao índice
  slider.style.transform = "translateX(" + (-index * 100) + "%)";
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Exibe o primeiro slide ao carregar a página
showSlide(currentSlideIndex);

// Chama a função nextSlide a cada 4 segundos
setInterval(nextSlide, 4000);

// Armazena a data atual no início
var currentDate = new Date();

// Função para verificar se o dia mudou e apagar o primeiro botão se necessário
function checkAndRemoveFirstButton() {
  var today = new Date();

  // Verifica se o dia mudou comparando apenas o dia, mês e ano
  if (today.toDateString() !== currentDate.toDateString()) {
    // O dia mudou, então encontra todos os botões
    var buttons = document.getElementsByClassName("button");

    // Verifica se há pelo menos um botão para remover
    if (buttons.length > 0) {
      // Remove o primeiro botão (índice 0) do elemento pai (caso esteja dentro de um container)
      buttons[0].parentNode.removeChild(buttons[0]);
    }

    // Atualiza a data armazenada
    currentDate = today;
  }
}

// Chama a função para verificar a cada segundo
setInterval(checkAndRemoveFirstButton, 1000);