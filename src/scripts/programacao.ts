// src/scripts/programacao.ts
import programacaoData from '../data/programacao.json';

type ProgramKeys = keyof typeof programacaoData;

export function initProgramacao() {
  const buttons = document.querySelectorAll('.button'); // Pegamos apenas os botões de data
  const display = document.getElementById('programacao');

  // 1. Remove botões de datas passadas ao carregar
  checkAndRemoveOldButtons();

  // 2. Configura o intervalo para verificar a cada minuto (caso o usuário deixe a aba aberta)
  setInterval(checkAndRemoveOldButtons, 60000);

  if (!display) return;

  // Lógica de clique (mantenha a que já fizemos)
  const allInteractiveButtons = document.querySelectorAll('.button, .embreve');
  allInteractiveButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      const date = target.getAttribute('data-date');
      allInteractiveButtons.forEach(b => b.classList.remove('active'));
      target.classList.add('active');
      if (date) renderProgram(date, display);
    });
  });
}

function checkAndRemoveOldButtons() {
  const now = new Date();
  const todayStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach(btn => {
    const btnDate = btn.getAttribute('data-date');
    
    if (btnDate && btnDate !== 'em-breve') {
      // Convertemos "08/04" para uma comparação simples
      // Nota: Essa lógica assume que os dias são sempre do ano atual
      if (isPastDate(btnDate, todayStr)) {
        btn.remove();
      }
    }
  });
}

function isPastDate(btnDate: string, todayDate: string): boolean {
  const [btnDay, btnMonth] = btnDate.split('/').map(Number);
  const [todayDay, todayMonth] = todayDate.split('/').map(Number);

  if (btnMonth < todayMonth) return true;
  if (btnMonth === todayMonth && btnDay < todayDay) return true;
  return false;
}

// ... mantenha sua função renderProgram abaixo ...
function renderProgram(date: string, display: HTMLElement) {
  const listaDeFilmes = programacaoData[date as ProgramKeys];

  if (listaDeFilmes) {
    if (date === 'em-breve') {
      display.innerHTML = `
        <ul>
          ${listaDeFilmes.map(item => `
            <li class="filme-poster">
              <img src="${(item as any).poster}" alt="${item.titulo}">
              <div class="filme-texto">
                <span class="dia">${(item as any).dia}</span>
                <span class="class-${item.class}">${item.class}</span>
                <span class="filme">${item.titulo}</span>
                <div class="filme-texto">
                  <span class="class-serie">${(item as any).tipo}</span>
                  <span class="class-temporada">${(item as any).temporada}</span>
                </div>
              </div>
            </li>
          `).join('')}
        </ul>`;
    } else {
      display.innerHTML = `
        <ul>
          ${listaDeFilmes.map(item => `
            <li>
              <span class="horario">${(item as any).horario}</span>
              <span class="label-${(item as any).label?.toLowerCase()}">${(item as any).label}</span>
              <span class="class-${item.class}">${item.class}</span>
              <span class="filme">${item.titulo}</span>
            </li>
            <hr class="filme-separador">
          `).join('')}
        </ul>`;
    }
  }
}