function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");
// 07/02 - as marvels

 if (data === '08/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E04 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E02 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '09/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li> <class="filme-container"> <div class="filme-info"> <span class="horario">00:01</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">DONZELA</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E04 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E03 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '10/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li><span class="horario">15:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">CAMPEONATO PAULISTA</span></li> <hr class="filme-separador">
  <li><span class="horario">18:00</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E05 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">18:20</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E04 - T06</span></li> <hr class="filme-separador">
  <li><span class="horario">20:30</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '11/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li> <class="filme-container"> <div class="filme-info"> <span class="horario">00:01</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">PONTO DE VIRADA: A BOMBA E A GUERRA FRIA</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E06 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">13:45</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E05 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '13/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E07 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E06 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '14/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li> <class="filme-container"> <div class="filme-info"> <span class="horario">00:01</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">MORTAL KOMBAT</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E08 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E07 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
else if (data === '15/03') {
  programacaoDiv.innerHTML = `
  <ul>
  <li> <class="filme-container"> <div class="filme-info"> <span class="horario">00:01</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">ANIMAIS FANTÁSTICOS: OS SEGREDOS DE DUMBLEDORE</span> </div> </li> <hr class="filme-separador"> </li>
  <li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
  <li><span class="horario">13:25</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E09 - T10</span></li> <hr class="filme-separador">
  <li><span class="horario">13:45</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">F1: DIRIGIR PARA VIVER - E08 - T06</span></li> <hr class="filme-separador">
  </ul>
`;
}
// <li <class="filme-container"> <div class="filme-info"> <span class="horario">01:00</span> <span class="label-leg">LEG</span> <span class="class-12">12</span> <img src="imgs//dts.png" alt="Logo DTS" class="logo-dts"> <span class="filme">TESTE TESTE TESTE TESTE</span> </div> </li> <hr class="filme-separador"> </li>
// 20/01 - jogo spfc

  else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

      <li class="filme-poster">
      <img src="imgs//poster-virada.jpg" alt="PONTO DE VIRADA: A BOMBA E A GUERRA FRIA">
      <div class="filme-texto">
      <span class="dia">12/03</span>
        <span class="class-16">16</span>
        <span class="filme">PONTO DE VIRADA: A BOMBA E A GUERRA FRIA</span>
      </div>
    </li>
    <hr class="filme-separador">

      <li class="filme-poster">
      <img src="imgs//poster-xmen.jpg" alt="X-MEN '97">
      <div class="filme-texto">
      <span class="dia">20/03</span>
        <span class="class-14">14</span>
        <span class="filme">X-MEN '97</span>
      </div>
    </li>
    <hr class="filme-separador">

      <li class="filme-poster">
      <img src="imgs//poster-rebel.jpg" alt="REBEL MOON - PARTE 2 : A MARCADORA DE CICATRIZES">
      <div class="filme-texto">
      <span class="dia">04/04</span>
        <span class="class-16">16</span>
        <span class="filme">REBEL MOON - PARTE 2 : A MARCADORA DE CICATRIZES</span>
      </div>
    </li>
    <hr class="filme-separador">
          
    <li class="filme-poster">
    <img src="imgs//poster-ripley.jpg" alt="RIPLEY - T1">
    <div class="filme-texto">
    <span class="dia">04/04</span>
      <span class="class-14">14</span>
      <span class="filme">RIPLEY - T1</span>
    </div>
  </li>
  <hr class="filme-separador">

  <li class="filme-poster">
  <img src="imgs//poster-parasyte.jpg" alt="PARASYTE: THE GREY - T1">
  <div class="filme-texto">
  <span class="dia">05/04</span>
    <span class="class-16">16</span>
    <span class="filme">PARASYTE: THE GREY - T1</span>
  </div>
</li>
<hr class="filme-separador">

<li class="filme-poster">
<img src="imgs//poster-ANTRACITE.jpg" alt="ANTRACITE - T1">
<div class="filme-texto">
<span class="dia">10/04</span>
  <span class="class-18">18</span>
  <span class="filme">ANTRACITE - T1</span>
</div>
</li>
<hr class="filme-separador">

  <li class="filme-poster">
  <img src="imgs//poster-beaultiful.jpg" alt="RIPLEY - T1">
  <div class="filme-texto">
  <span class="dia">02/05</span>
    <span class="class-16">16</span>
    <span class="filme">BEAUTIFUL REBEL</span>
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