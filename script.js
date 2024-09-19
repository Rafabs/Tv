function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");
 
 if (data === '20/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E08 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E01 - T01</span></li> <hr class="filme-separador">    
`;
}
else if (data === '21/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E09 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E02 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">14:25</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E01 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '22/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E10 - T04</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '23/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E11 - T04</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '25/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E12 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E03 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '26/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E13 - T04</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '27/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E14 - T04</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '01/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E16 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E15 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:20</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E02 - T01</span></li> <hr class="filme-separador">    
 </ul>
`;
}
else if (data === '02/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E17 - T04</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '04/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E18 - T04</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E04 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '05/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E01 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:45</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">O POÇO 2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '06/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">19:10</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E03 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:10</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E02 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '07/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E03 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '09/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E04 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E05 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '10/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E05 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">TOMB RAIDER: A LENDA DE LARA CROFT - E01 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '11/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E06 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '14/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E07 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E04 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '15/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E08 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '16/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E09 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '18/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E10 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E06 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '19/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E11 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '20/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E11 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:30</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E05 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '21/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E12 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '23/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E13 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E07 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '24/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E14 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '25/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E15 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '28/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E16 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E06 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '29/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E17 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-18">18</span> <span class="filme">A ÚLTIMA NOITE EM TREMOR - E01 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '30/10') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E18 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '01/11') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E19 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E08 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '02/11') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E20 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:45</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">AGATHA DESDE SEMPRE - E09 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '03/11') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E21 - T05</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:30</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E07 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '04/11') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">YOUNG SHELDON - E22 - T05</span></li> <hr class="filme-separador">    
  </ul>
`;
}
else if (data === '11/11') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">PINGUIM - E08 - T01</span></li> <hr class="filme-separador">    
  </ul>
`;
}
  // <li <class="filme-container"> <div class="filme-info"> <span class="horario">01:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TESTE TESTE TESTE TESTE</span> </div> </li> <hr class="filme-separador"> </li>

  else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

<li class="filme-poster">
<img src="imgs//poster-agatha.jpg" alt="AGATHA DESDE SEMPRE">
<div class="filme-texto">
<span class="dia">18/09</span>
<span class="class-12">12</span>
<span class="filme">AGATHA DESDE SEMPRE</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-pinguim.jpg" alt="PINGUIM">
<div class="filme-texto">
<span class="dia">19/09</span>
<span class="class-16">16</span>
<span class="filme">PINGUIM</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-poço.jpg" alt="O POÇO 2">
<div class="filme-texto">
<span class="dia">04/10</span>
<span class="class-16">16</span>
<span class="filme">O POÇO 2</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-tomb.jpg" alt="TOMB RAIDER: A LENDA DE LARA CROFT">
<div class="filme-texto">
<span class="dia">10/10</span>
<span class="class-12">12</span>
<span class="filme">TOMB RAIDER: A LENDA DE LARA CROFT</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-tremor.jpg" alt="A ÚLTIMA NOITE EM TREMOR">
<div class="filme-texto">
<span class="dia">25/10</span>
<span class="class-18">18</span>
<span class="filme">A ÚLTIMA NOITE EM TREMOR</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-piano.jpg" alt="PIANO DE FAMÍLIA">
<div class="filme-texto">
<span class="dia">22/11</span>
<span class="class-12">12</span>
<span class="filme">PIANO DE FAMÍLIA</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-joy.jpg" alt="JOY">
<div class="filme-texto">
<span class="dia">22/11</span>
<span class="class-12">12</span>
<span class="filme">JOY</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-senna.jpg" alt="SENNA">
<div class="filme-texto">
<span class="dia">29/11</span>
<span class="class-12">12</span>
<span class="filme">SENNA</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-star.jpg" alt="STAR WARS: SKELETON CREW">
<div class="filme-texto">
<span class="dia">03/12</span>
<span class="class-0">0</span>
<span class="filme">STAR WARS: SKELETON CREW</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-win.jpg" alt="WIN OR LOSE">
<div class="filme-texto">
<span class="dia">06/12</span>
<span class="class-0">0</span>
<span class="filme">WIN OR LOSE</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-round.jpg" alt="ROUND 6">
<div class="filme-texto">
<span class="dia">26/12</span>
<span class="class-18">18</span>
<span class="filme">ROUND 6</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T2</span>
</div>
</li>
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


//  A DEFINIR
/*
 
<li class="filme-poster">
<img src="imgs//poster-ironheart.jpg" alt="Ironheart">
<div class="filme-texto">
<span class="dia">EM BREVE</span>
<span class="class-0">0</span>
<span class="filme">IRONHEART - T01</span>
</div>
</li>
<hr class="filme-separador">

      <li><span class="dia">EM BREVE</span> <span class="class-0">0</span> <span class="filme">THE PENGUIN - T01</span></li>      
      <hr class="filme-separador">
*/