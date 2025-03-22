function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");

if (data === '22/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li <class="filme-container"> <div class="filme-info"> <span class="horario">00:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TORNADO: JOPLIN EM RUÍNAS</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E02 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:50</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E09 - T07</span></li> <hr class="filme-separador">    
  <li><span class="horario">14:35</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">ASSASSINATO NA CASA BRANCA - E02 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">15:20</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">PEQUENA SIBÉRIA</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
 `;
}
else if (data === '23/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">16:15</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E03 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">16:35</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E10 - T07</span></li> <hr class="filme-separador">    
  <li><span class="horario">17:30</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">ASSASSINATO NA CASA BRANCA - E03 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">18:20</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">REVELAÇÕES</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador"> 
 `;
}
else if (data === '24/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li <class="filme-container"> <div class="filme-info"> <span class="horario">00:00</span> <span class="label-dub">DUB</span> <span class="class-livre">L</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">MOANA 2</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E04 - T01</span></li> <hr class="filme-separador">    
 `;
}
else if (data === '26/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E05 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">ASSASSINATO NA CASA BRANCA - E04 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:50</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEMOLIDOR: RENASCIDO - E05 - T01</span></li> <hr class="filme-separador">    
`;
}
else if (data === '27/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li <class="filme-container"> <div class="filme-info"> <span class="horario">00:00</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">UM LUGAR SILENCIOSO: DIA UM</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E06 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">ASSASSINATO NA CASA BRANCA - E05 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:50</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">A CAÇA AO TESOURO DE FENN - E01 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">23:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">DEMOLIDOR: RENASCIDO - E06 - T01</span></li> <hr class="filme-separador">    
`;
}
else if (data === '28/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-orig">DUB</span> <span class="class-12">12</span> <span class="filme">HOW I MET YOUR MOTHER - E04 - T01</span></li> <hr class="filme-separador">    
 `;
}
  // <li <class="filme-container"> <div class="filme-info"> <span class="horario">01:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TESTE TESTE TESTE TESTE</span> </div> </li> <hr class="filme-separador"> </li>
  else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

<li class="filme-poster">
<img src="imgs//poster-revelacoes.jpg" alt="REVELAÇÕES">
<div class="filme-texto">
<span class="dia">21/03</span>
<span class="class-14">14</span>
<span class="filme">REVELAÇÕES</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-fenn.jpg" alt="A CAÇA AO TESOURO DE FENN">
<div class="filme-texto">
<span class="dia">27/03</span>
<span class="class-12">12</span>
<span class="filme">A CAÇA AO TESOURO DE FENN</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-lista.jpg" alt="A LISTA DA MINHA VIDA">
<div class="filme-texto">
<span class="dia">28/03</span>
<span class="class-14">14</span>
<span class="filme">A LISTA DA MINHA VIDA</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-drogas.jpg" alt="COMO VENDER DROGAS ONLINE (RÁPIDO)">
<div class="filme-texto">
<span class="dia">08/04</span>
<span class="class-16">16</span>
<span class="filme">COMO VENDER DROGAS ONLINE (RÁPIDO)</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T4</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-andor.jpg" alt="ANDOR">
<div class="filme-texto">
<span class="dia">08/04</span>
<span class="class-16">16</span>
<span class="filme">ANDOR</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T2</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-mirror.jpg" alt="BLACK MIRROR">
<div class="filme-texto">
<span class="dia">10/04</span>
<span class="class-18">18</span>
<span class="filme">BLACK MIRROR</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T7</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-vidro.jpg" alt="O JARDINEIRO">
<div class="filme-texto">
<span class="dia">11/04</span>
<span class="class-16">16</span>
<span class="filme">O JARDINEIRO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-tlou.jpg" alt="THE LAST OF US">
<div class="filme-texto">
<span class="dia">13/04</span>
<span class="class-16">16</span>
<span class="filme">THE LAST OF US</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T2</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-vidro.jpg" alt="O DOMO DE VIDRO">
<div class="filme-texto">
<span class="dia">15/04</span>
<span class="class-16">16</span>
<span class="filme">O DOMO DE VIDRO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-trem.jpg" alt="EXPLOSÃO NO TREM-BALA">
<div class="filme-texto">
<span class="dia">23/04</span>
<span class="class-14">14</span>
<span class="filme">EXPLOSÃO NO TREM-BALA</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-you.jpg" alt="YOU">
<div class="filme-texto">
<span class="dia">24/04</span>
<span class="class-18">18</span>
<span class="filme">YOU</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T5</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-eternauta.jpg" alt="O ETERNAUTA">
<div class="filme-texto">
<span class="dia">30/04</span>
<span class="class-14">14</span>
<span class="filme">O ETERNAUTA</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-asterix.jpg" alt="ASTERIX E OBELIX: O COMBATE DOS CHEFES">
<div class="filme-texto">
<span class="dia">30/04</span>
<span class="class-10">10</span>
<span class="filme">ASTERIX E OBELIX: O COMBATE DOS CHEFES</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-ginny.jpg" alt="GINNY E GEORGIA">
<div class="filme-texto">
<span class="dia">05/06</span>
<span class="class-16">16</span>
<span class="filme">GINNY E GEORGIA</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T2</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-round.jpg" alt="ROUND 6">
<div class="filme-texto">
<span class="dia">27/06</span>
<span class="class-18">18</span>
<span class="filme">ROUND 6</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T3</span>
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