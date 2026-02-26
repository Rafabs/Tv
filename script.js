function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");

if (data === '26/02') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E07 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:30</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E03 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">DE BELFAST AO PARAÍSO - E07 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">21:00</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">MISTÉRIO DE UM MILHÃO DE SEGUIDORES - E06 - T01</span></li> <hr class="filme-separador">   
  <li class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">PAVANA</span> </div> </li> <hr class="filme-separador"> </li>  
  `;
}
else if (data === '27/02') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E08 - T02</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '02/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E09 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:30</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E04 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <span class="filme">DE BELFAST AO PARAÍSO - E08 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">21:00</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">MISTÉRIO DE UM MILHÃO DE SEGUIDORES - E07 - T01</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '03/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">18:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E10 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:30</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E05 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">MISTÉRIO DE UM MILHÃO DE SEGUIDORES - E08 - T01</span></li> <hr class="filme-separador">      
  `;
}
else if (data === '04/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E11 - T02</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '06/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E12 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E06 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">20:30</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">O ASSASSINO DO TIKTOK - E01 - T01</span></li> <hr class="filme-separador">      
  <li class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">MÁQUINA DE GUERRA</span> </div> </li> <hr class="filme-separador"> </li>  
  `;
}
else if (data === '07/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador"> 
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E13 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:45</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E07 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">14:20</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">O ASSASSINO DO TIKTOK - E02 - T01</span></li> <hr class="filme-separador">      
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  `;
}
// CONFIRMAR DURAÇÃO O ASSASSINO DO TIKTOK
else if (data === '08/03') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">MODERN FAMILY - E13 - T02</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:45</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">STRIP LAW - E07 - T01</span></li> <hr class="filme-separador"> 
  <li><span class="horario">14:20</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <span class="filme">O ASSASSINO DO TIKTOK - E02 - T01</span></li> <hr class="filme-separador">      
  <li><span class="horario">20:15</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador"> 
  `;
}
  // <li><class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TESTE TESTE TESTE TESTE</span> </div> </li> <hr class="filme-separador"> </li>
  else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

<li class="filme-poster">
<img src="imgs//poster-tiktok.jpg" alt="O ASSASSINO DO TIKTOK">
<div class="filme-texto">
<span class="dia">06/03</span>
<span class="class-14">14</span>
<span class="filme">O ASSASSINO DO TIKTOK</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-guerra.jpg" alt="MÁQUINA DE GUERRA">
<div class="filme-texto">
<span class="dia">06/03</span>
<span class="class-16">16</span>
<span class="filme">MÁQUINA DE GUERRA</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-radioativa.jpg" alt="EMERGÊNCIA RADIOATIVA">
<div class="filme-texto">
<span class="dia">18/03</span>
<span class="class-12">12</span>
<span class="filme">EMERGÊNCIA RADIOATIVA</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-peaky.jpg" alt="PEAKY BLINDERS: O HOMEM IMORTAL">
<div class="filme-texto">
<span class="dia">20/03</span>
<span class="class-18">18</span>
<span class="filme">PEAKY BLINDERS: O HOMEM IMORTAL</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-horrivel.jpg" alt="ALGO HORRÍVEL VAI ACONTECER">
<div class="filme-texto">
<span class="dia">26/03</span>
<span class="class-16">16</span>
<span class="filme">ALGO HORRÍVEL VAI ACONTECER</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-desligue.jpg" alt="DESLIGUE!">
<div class="filme-texto">
<span class="dia">26/03</span>
<span class="class-16">16</span>
<span class="filme">DESLIGUE!</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-stranger.jpg" alt="STRANGER THINGS: HISTÓRIAS DE 85">
<div class="filme-texto">
<span class="dia">23/04</span>
<span class="class-0">0</span>
<span class="filme">STRANGER THINGS: HISTÓRIAS DE 85</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-inferno.jpg" alt="DIRETO PRO INFERNO">
<div class="filme-texto">
<span class="dia">27/04</span>
<span class="class-16">16</span>
<span class="filme">DIRETO PRO INFERNO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-berlim.jpg" alt="BERLIM E A DAMA COM ARMINHO">
<div class="filme-texto">
<span class="dia">15/05</span>
<span class="class-0">0</span>
<span class="filme">BERLIM E A DAMA COM ARMINHO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
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
  var apiKey = '46ad9bcd907578b771c54270a3560cb3'; // Substitua "YOUR_API_KEY" pela sua chave de API real
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
