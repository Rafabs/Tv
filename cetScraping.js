const axios = require('axios');
const cheerio = require('cheerio');

// Função para fazer o web scraping dos dados de trânsito da CET
async function getTrafficData() {
  try {
    const url = 'http://cetsp1.cetsp.com.br/monitransmapa/agora/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const trafficData = [];
    $('.monosp-bairro').each((index, element) => {
      const location = $(element).find('.nome').text().trim();
      const trafficStatus = $(element).find('.status').text().trim();
      trafficData.push({ location, trafficStatus });
    });
    
    return trafficData;
  } catch (error) {
    console.log('Erro ao obter dados de trânsito:', error.message);
    return [];
  }
}

// Função para exibir os dados de trânsito no terminal
async function showTrafficData() {
  const trafficData = await getTrafficData();
  
  if (trafficData.length === 0) {
    console.log('Não foi possível obter os dados de trânsito.');
  } else {
    console.log('Dados de trânsito:');
    trafficData.forEach((data) => {
      console.log(`${data.location}: ${data.trafficStatus}`);
    });
  }
}

// Chamar a função para exibir os dados de trânsito
showTrafficData();
