function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");
  
  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");
 
 if (data === '30/08') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E05-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">19:35</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">UNTOLD: A VERGONHA DO DOPING</span></li> <hr class="filme-separador">    
    </ul>
  `;         
  // Excluir primeiro item Em Breve  
} else if (data === '31/08') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">15:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E06-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">16:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">THE FLASH (2023)</span></li> <hr class="filme-separador">    
    <li><span class="horario">18:40</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA SULAMERICANA</span></li> <hr class="filme-separador">
    </ul>
  `;    
  // Excluir primeiro e segundo item Em Breve  
  // Aguardar estréia de Desencanto para saber o tempo do episódio para inserir o horário de I AM GROOT  06/09
} else if (data === '01/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E07-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E01-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">22:25</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">PARAÍSO</span></li> <hr class="filme-separador">    
    </ul>
  `;         
} else if (data === '02/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E08-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">13:50</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E02-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    </ul>
  `;
} else if (data === '03/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">17:10</span> <span class="label-leg">LEG</span> <span class="class-livre">L</span> <span class="filme">STAR WARS EPISÓDIO V: O IMPÉRIO CONTRA-ATACA</span></li> <hr class="filme-separador">
    <li><span class="horario">19:20</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E09-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E03-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">20:10</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">CAMPEONATO BRASILEIRO</span></li> <hr class="filme-separador">
    </ul>
  `;    
} else if (data === '04/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E10-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E04-T5</span></li> <hr class="filme-separador">    
    </ul>
  `;   
} else if (data === '05/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E11-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E05-T5</span></li> <hr class="filme-separador">    
    </ul>
  `;  

// Aguardando definição de duração do ep p/ 6-7-8-9 e 10/09  
} else if (data === '06/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E12-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E06-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">XX:XX</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <span class="filme">I AM GROOT - E01-T2</span></li> <hr class="filme-separador">    
    </ul>
  `;   
} else if (data === '07/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E13-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">19:35</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E07-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">XX:XX</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <span class="filme">I AM GROOT - E02-T2</span></li> <hr class="filme-separador">    
    </ul>
  `; 
} else if (data === '08/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E14-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E08-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">XX:XX</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <span class="filme">I AM GROOT - E03-T2</span></li> <hr class="filme-separador">    
    </ul>
  `;   
} else if (data === '08/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E15-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E09-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">XX:XX</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <span class="filme">I AM GROOT - E04-T2</span></li> <hr class="filme-separador">    
    <li><span class="horario">22:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">VOCÊ NÃO TÁ CONVIDADO PRO MEU BAT MITZVÁ</span></li> <hr class="filme-separador">    
    </ul>
  `;     
} else if (data === '09/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E16-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">13:50</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">(DES)ENCANTO - E10-T5</span></li> <hr class="filme-separador">    
    <li><span class="horario">XX:XX</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <span class="filme">I AM GROOT - E05-T2</span></li> <hr class="filme-separador">     
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">   
    </ul>
  `;       
  // DEFINIÇÃO DO FILME
} else if (data === '10/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E17-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">   
    </ul>
  `;     
  // EXCLUIR PRIMEIRO EM BREVE 
} else if (data === '11/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E18-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E01-T1</span></li> <hr class="filme-separador">    
    </ul>
  `;  
} else if (data === '12/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E19-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E02-T1</span></li> <hr class="filme-separador">    
    </ul>
  `;        
} else if (data === '13/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E19-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">19:35</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E02-T1</span></li> <hr class="filme-separador">    
    <li><span class="horario">21:15</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">CAMPEONATO BRASILEIRO</span></li> <hr class="filme-separador">    
    </ul>
  `;       
} else if (data === '14/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E20-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E03-T1</span></li> <hr class="filme-separador">    
    </ul>
  `;       
} else if (data === '15/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E21-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E04-T1</span></li> <hr class="filme-separador">    
    </ul>
  `;       
  // Confirmar filme 
} else if (data === '16/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E21-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">13:50</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E04-T1</span></li> <hr class="filme-separador">       
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    </ul>
  `;         
} else if (data === '17/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">14:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E22-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">15:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E05-T1</span></li> <hr class="filme-separador">           
    <li><span class="horario">15:45</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA DO BRASIL</span></li> <hr class="filme-separador">
    </ul>
  `;   
} else if (data === '18/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E23-T3</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEPOIS DA CABANA - E06-T1</span></li> <hr class="filme-separador">    
    </ul>
  `;    
} else if (data === '19/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E01-T4</span></li> <hr class="filme-separador">
    </ul>
  `;  
} else if (data === '20/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:15</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E02-T4</span></li> <hr class="filme-separador">
    <li><span class="horario">21:15</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">CAMPEONATO BRASILEIRO</span></li> <hr class="filme-separador">    
    </ul>
  `;         
} else if (data === '21/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E03-T4</span></li> <hr class="filme-separador">
    <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SEX EDUCATION - E01-T4</span></li> <hr class="filme-separador">
    </ul>
  `;    
} else if (data === '22/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E04-T4</span></li> <hr class="filme-separador">
    <li><span class="horario">13:50</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SEX EDUCATION - E02-T4</span></li> <hr class="filme-separador">    
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    </ul>
  `;    
  // CONFIRMAR FILME    
} else if (data === '23/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
    <li><span class="horario">13:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E05-T4</span></li> <hr class="filme-separador">
    <li><span class="horario">13:50</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SEX EDUCATION - E03-T4</span></li> <hr class="filme-separador">    
    <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
    </ul>
  `;        
} else if (data === '24/09') {
  programacaoDiv.innerHTML = `
    <ul>
    <li><span class="horario">14:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E06-T4</span></li> <hr class="filme-separador">
    <li><span class="horario">14:50</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SEX EDUCATION - E04-T4</span></li> <hr class="filme-separador">    
    <li><span class="horario">15:45</span> <span class="label-orig">NAC</span> <span class="class-livre">L</span> <span class="filme">COPA DO BRASIL</span></li> <hr class="filme-separador">
    </ul>
  `;            
} else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>
        <li class="filme-poster">
        <img src="imgs//poster-the-flash.jpg" alt="THE FLASH (2023)">
        <div class="filme-texto">
          <span class="dia">31/08</span>
          <span class="class-14">14</span>
          <span class="filme">THE FLASH (2023)</span>
        </div>
      </li>
      <hr class="filme-separador">

        <li class="filme-poster">
        <img src="imgs//poster-paraiso.jpg" alt="Paraiso">
        <div class="filme-texto">
          <span class="dia">01/09</span>
          <span class="class-16">16</span>
          <span class="filme">PARAÍSO</span>
        </div>
      </li>
      <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-desencanto.jpg" alt="(Des)encanto">
          <div class="filme-texto">
          <span class="dia">01/09</span>
            <span class="class-14">14</span>
            <span class="filme">(DES)ENCANTO - T5</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-groot.jpg" alt="Eu Sou Groot">
          <div class="filme-texto">
          <span class="dia">06/09</span>
            <span class="class-livre">L</span>
            <span class="filme">EU SOU GROOT - T2</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-depois-da-cabana.jpg" alt="Depois da Cabana">
          <div class="filme-texto">
          <span class="dia">11/09</span>
            <span class="class-16">16</span>
            <span class="filme">DEPOIS DA CABANA - T1</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-sex-education.jpg" alt="Sex Education">
          <div class="filme-texto">
          <span class="dia">21/09</span>
            <span class="class-16">16</span>
            <span class="filme">SEX EDUCATION - T4</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-destinos.jpg" alt="DESTINOS À DERIVA">
          <div class="filme-texto">
          <span class="dia">29/09</span>
            <span class="class-16">16</span>
            <span class="filme">DESTINOS À DERIVA</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-lupin.jpg" alt="Lupin">
          <div class="filme-texto">
          <span class="dia">05/10</span>
            <span class="class-12">12</span>
            <span class="filme">LUPIN - T3</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-queda.jpg" alt="A QUEDA DA CASA DE USHER">
          <div class="filme-texto">
          <span class="dia">12/10</span>
            <span class="class-18">18</span>
            <span class="filme">A QUEDA DA CASA DE USHER - T1</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-elite.jpg" alt="ELITE">
          <div class="filme-texto">
          <span class="dia">20/10</span>
            <span class="class-18">18</span>
            <span class="filme">ELITE - T7</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-loki.jpg" alt="Loki">
          <div class="filme-texto">
          <span class="dia">OUTUBRO</span>
            <span class="class-14">14</span>
            <span class="filme">LOKI - T2</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-ferry.jpg" alt="Ferry: A Série">
          <div class="filme-texto">
          <span class="dia">03/11</span>
            <span class="class-16">16</span>
            <span class="filme">FERRY: A SÉRIE</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
        <img src="imgs//poster-echo.jpg" alt="Echo">
        <div class="filme-texto">
        <span class="dia">NOVEMBRO</span>
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
