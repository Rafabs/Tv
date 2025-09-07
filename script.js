function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");

if (data === '07/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">17:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E06 - T06</span></li> <hr class="filme-separador">    
  <li><span class="horario">17:45</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">LONG STORY SHORT - E10 - T01</span></li> <hr class="filme-separador">    
  <li><span class="horario">18:15</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">WANDINHA - E07 - T02</span></li> <hr class="filme-separador">        
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li <class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-10">10</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">LILO & STITCH</span> </div> </li> <hr class="filme-separador"> </li>
`;
}
else if (data === '08/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E07 - T06</span></li> <hr class="filme-separador">    
`;
}
else if (data === '10/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E08 - T06</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">WANDINHA - E08 - T02</span></li> <hr class="filme-separador">      
  <li <class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-14">14</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">THUNDERBOLTS</span> </div> </li> <hr class="filme-separador"> </li>
  `;
}
else if (data === '11/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E09 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '12/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E10 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '13/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E11 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '15/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E12 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '16/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E13 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '17/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E14 - T06</span></li> <hr class="filme-separador">    
  `;
}
else if (data === '19/09') {
  programacaoDiv.innerHTML = `
  <ul>  
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">    
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador"> 
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-14">14</span> <span class="filme">HOW I MET YOUR MOTHER - E15 - T06</span></li> <hr class="filme-separador">    
  <li><span class="horario">20:00</span> <span class="label-dub">DUB</span> <span class="class-16">16</span> <span class="filme">HOTEL ASSOMBRADO - E01 - T01</span></li> <hr class="filme-separador">    
  `;
}
  // <li <class="filme-container"> <div class="filme-info"> <span class="horario">23:59</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TESTE TESTE TESTE TESTE</span> </div> </li> <hr class="filme-separador"> </li>
  else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

<li class="filme-poster">
<img src="imgs//poster-refugio.jpg" alt="O REFÚGIO ATÔMICO">
<div class="filme-texto">
<span class="dia">19/09</span>
<span class="class-16">16</span>
<span class="filme">O REFÚGIO ATÔMICO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-hotel.jpg" alt="HOTEL ASSOMBRADO">
<div class="filme-texto">
<span class="dia">19/09</span>
<span class="class-16">16</span>
<span class="filme">HOTEL ASSOMBRADO</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-alice.jpg" alt="ALICE IN BORDERLAND">
<div class="filme-texto">
<span class="dia">25/09</span>
<span class="class-16">16</span>
<span class="filme">ALICE IN BORDERLAND</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T3</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-house.jpg" alt="HOUSE OF GUINNESS">
<div class="filme-texto">
<span class="dia">25/09</span>
<span class="class-16">16</span>
<span class="filme">HOUSE OF GUINNESS</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-desobedientes.jpg" alt="DESOBEDIENTES">
<div class="filme-texto">
<span class="dia">25/09</span>
<span class="class-16">16</span>
<span class="filme">DESOBEDIENTES</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-splinter.jpg" alt="SPLINTER CELL: DEATHEATCH">
<div class="filme-texto">
<span class="dia">14/10</span>
<span class="class-16">16</span>
<span class="filme">SPLINTER CELL: DEATHEATCH</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-caramelo.jpg" alt="CARAMELO">
<div class="filme-texto">
<span class="dia">08/10</span>
<span class="class-12">12</span>
<span class="filme">CARAMELO</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-batalha.jpg" alt="UM FANTASMA NA BATALHA">
<div class="filme-texto">
<span class="dia">17/10</span>
<span class="class-14">14</span>
<span class="filme">UM FANTASMA NA BATALHA</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-frankenstein.jpg" alt="FRANKENSTEIN">
<div class="filme-texto">
<span class="dia">07/11</span>
<span class="class-16">16</span>
<span class="filme">FRANKENSTEIN</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-monstro.jpg" alt="O MONSTRO EM MIM">
<div class="filme-texto">
<span class="dia">13/11</span>
<span class="class-0">0</span>
<span class="filme">O MONSTRO EM MIM</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T1</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-trem.jpg" alt="SONHOS DE TREM">
<div class="filme-texto">
<span class="dia">21/11</span>
<span class="class-0">0</span>
<span class="filme">SONHOS DE TREM</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-things.jpg" alt="STRANGER THINGS - Ep. 01 - 04">
<div class="filme-texto">
<span class="dia">26/11</span>
<span class="class-16">16</span>
<span class="filme">STRANGER THINGS - Ep. 01 - 04</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T5</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-beatles.jpg" alt="THE BEATLES ANTHOLOGY">
<div class="filme-texto">
<span class="dia">26/11</span>
<span class="class-0">0</span>
<span class="filme">THE BEATLES ANTHOLOGY</span>
<div class="filme-texto">
<span class="class-documentario">Documentário</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-percy.jpg" alt="PERCY JACKSON E OS OLÍMPIANOS">
<div class="filme-texto">
<span class="dia">10/12</span>
<span class="class-12">12</span>
<span class="filme">PERCY JACKSON E OS OLÍMPIANOS</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T2</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-knives.jpg" alt="VIVO OU MORTO: UM MISTÉRIO KNIVES OUT">
<div class="filme-texto">
<span class="dia">12/12</span>
<span class="class-0">0</span>
<span class="filme">VIVO OU MORTO: UM MISTÉRIO KNIVES OUT</span>
<div class="filme-texto">
<span class="class-filme">Filme</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-things.jpg" alt="STRANGER THINGS - Ep. 05 - 07">
<div class="filme-texto">
<span class="dia">25/12</span>
<span class="class-16">16</span>
<span class="filme">STRANGER THINGS - Ep. 05 - 07</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T5</span>
</div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-things.jpg" alt="STRANGER THINGS - Ep. 08">
<div class="filme-texto">
<span class="dia">31/12</span>
<span class="class-16">16</span>
<span class="filme">STRANGER THINGS - Ep. 08</span>
<div class="filme-texto">
<span class="class-serie">Série</span>
<span class="class-temporada">T5</span>
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