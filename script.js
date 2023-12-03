function mostrarProgramacao(button, data) {
  var programacaoDiv = document.getElementById("programacao");
  var buttons = document.getElementsByClassName("button");

  // Remove a classe 'active' de todos os botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Adiciona a classe 'active' apenas ao botão clicado
  button.classList.add("active");

 if (data === '03/12') {
  programacaoDiv.innerHTML = `
<ul>
<li><span class="horario">19:10</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E05-T7</span></li> <hr class="filme-separador">
<li><span class="horario">19:30</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SWEET HOME - E03-T2</span></li> <hr class="filme-separador">
<li><span class="horario">20:30</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">FANTÁSTICO</span></li> <hr class="filme-separador">
</ul>
`;
} else if (data === '04/12') {
  programacaoDiv.innerHTML = `
<ul>
<li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
<li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
<li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
<li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E06-T7</span></li> <hr class="filme-separador">
<li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SWEET HOME - E04-T2</span></li> <hr class="filme-separador">
</ul>
`;
} else if (data === '05/12') {
  programacaoDiv.innerHTML = `
<ul>
<li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
<li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
<li><span class="horario">19:10</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP2</span></li> <hr class="filme-separador">
<li><span class="horario">19:40</span> <span class="label-dub">DUB</span> <span class="class-12">12</span> <span class="filme">THE BIG BANG THEORY - E07-T7</span></li> <hr class="filme-separador">
<li><span class="horario">20:00</span> <span class="label-leg">LEG</span> <span class="class-16">16</span> <span class="filme">SWEET HOME - E05-T2</span></li> <hr class="filme-separador">
</ul>
`;
} else if (data === '06/12') {
  programacaoDiv.innerHTML = `
<ul>
<li><span class="horario">06:00</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">BOM DIA SP</span></li> <hr class="filme-separador">
<li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
</ul>
`;
} else if (data === '07/12') {
  programacaoDiv.innerHTML = `
<ul>
<li><span class="horario">11:45</span> <span class="label-orig">NAC</span> <span class="class-12">12</span> <span class="filme">SP1</span></li> <hr class="filme-separador">
</ul>
`;
// SWEET HOME - 8EP.
  } else if (data === 'em-breve') {
    programacaoDiv.innerHTML = `    
      <ul>

        <li class="filme-poster">
          <img src="imgs//poster-mundo.jpg" alt="O MUNDO DEPOIS DE NÓS">
          <div class="filme-texto">
          <span class="dia">08/12</span>
            <span class="class-16">16</span>
            <span class="filme">O MUNDO DEPOIS DE NÓS</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-crown.jpg" alt="THE CROWN - T6 - PARTE 2">
          <div class="filme-texto">
          <span class="dia">14/12</span>
            <span class="class-16">16</span>
            <span class="filme">THE CROWN - T6 - PARTE 2</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-galinhas.jpg" alt="A FUGA DAS GALINHAS: A AMEAÇA DOS NUGGETS">
          <div class="filme-texto">
          <span class="dia">15/12</span>
            <span class="class-livre">L</span>
            <span class="filme">A FUGA DAS GALINHAS: A AMEAÇA DOS NUGGETS</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-maestro.jpg" alt="MAESTRO">
          <div class="filme-texto">
          <span class="dia">20/12</span>
            <span class="class-14">14</span>
            <span class="filme">MAESTRO</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-percy.jpg" alt="PERCY JACKSON E OS OLIMPIANOS">
          <div class="filme-texto">
          <span class="dia">20/12</span>
            <span class="class-0">0</span>
            <span class="filme">PERCY JACKSON E OS OLIMPIANOS - T1</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-rebel.jpg" alt="REBEL MOON - PARTE 1: A MENINA DO FOGO">
          <div class="filme-texto">
          <span class="dia">22/12</span>
            <span class="class-14">14</span>
            <span class="filme">REBEL MOON - PARTE 1: A MENINA DO FOGO</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-criatura.jpg" alt="A CRIATURA DE GYEONGSEONG">
          <div class="filme-texto">
          <span class="dia">22/12</span>
            <span class="class-16">16</span>
            <span class="filme">A CRIATURA DE GYEONGSEONG</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-what.jpg" alt="WHAT IF...? - T2">
          <div class="filme-texto">
          <span class="dia">22/12</span>
            <span class="class-14">14</span>
            <span class="filme">WHAT IF...? - T2</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-pokemon.jpg" alt="A CONCIERGE POKÉMON">
          <div class="filme-texto">
          <span class="dia">28/12</span>
            <span class="class-10">10</span>
            <span class="filme">A CONCIERGE POKÉMON</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-berlim.jpg" alt="BERLIM">
          <div class="filme-texto">
          <span class="dia">29/12</span>
            <span class="class-14">14</span>
            <span class="filme">BERLIM - T1</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-neve.jpg" alt="A SOCIEDADE DA NEVE">
          <div class="filme-texto">
          <span class="dia">04/01</span>
            <span class="class-16">16</span>
            <span class="filme">A SOCIEDADE DA NEVE</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-orion.jpg" alt="ORION E O ESCURO">
          <div class="filme-texto">
          <span class="dia">02/02</span>
            <span class="class-10">10</span>
            <span class="filme">ORION E O ESCURO</span>
          </div>
        </li>
        <hr class="filme-separador">

        <li class="filme-poster">
          <img src="imgs//poster-avatar.jpg" alt="AVATAR: O ÚLTIMO MESTRE DO AR - T1">
          <div class="filme-texto">
          <span class="dia">22/02</span>
            <span class="class-0">0</span>
            <span class="filme">AVATAR: O ÚLTIMO MESTRE DO AR - T1</span>
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
*/