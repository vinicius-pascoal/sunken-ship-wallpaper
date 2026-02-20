// Função para criar bolhas
function createBubble() {
  const bubble = document.createElement('img');
  const bubbleType = Math.random() > 0.5 ? '4.png' : '5.png';
  bubble.src = `./public/imgs/bolhas/${bubbleType}`;
  bubble.className = 'bubble';

  console.log('Criando bolha:', bubble.src);

  // Tamanho aleatório (muito maior e variável)
  const size = Math.random() * 120 + 80; // 80px a 200px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Posição horizontal aleatória
  const leftPosition = Math.random() * 100;
  bubble.style.left = `${leftPosition}%`;

  // Drift horizontal aleatório (movimento lateral suave)
  const drift = (Math.random() - 0.5) * 150;
  bubble.style.setProperty('--drift', `${drift}px`);

  // Duração da animação aleatória mais lenta
  const duration = Math.random() * 8 + 8; // 8s a 16s
  bubble.style.animation = `float-up ${duration}s ease-out`;

  const container = document.getElementById('bubbles-container');
  if (container) {
    container.appendChild(bubble);
    console.log('Bolha adicionada ao container');
  } else {
    console.error('Container de bolhas não encontrado!');
  }

  // Remover bolha após a animação
  setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

// Criar bolhas continuamente (reduzido ao mínimo)
setInterval(createBubble, 4000); // Uma bolha a cada 4 segundos

// Criar algumas bolhas iniciais (mínimo)
for (let i = 0; i < 2; i++) {
  setTimeout(createBubble, i * 1500);
}

// Função para criar partículas flutuantes
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';

  // Tamanho aleatório pequeno
  const size = Math.random() * 4 + 2; // 2px a 6px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Posição inicial aleatória
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  particle.style.left = `${startX}%`;
  particle.style.top = `${startY}%`;

  // Movimento aleatório
  const driftX = (Math.random() - 0.5) * 200;
  const driftY = (Math.random() - 0.5) * 150;
  particle.style.setProperty('--drift-x', `${driftX}px`);
  particle.style.setProperty('--drift-y', `${driftY}px`);

  // Duração da animação aleatória
  const duration = Math.random() * 15 + 10; // 10s a 25s
  particle.style.animationDuration = `${duration}s`;

  const container = document.getElementById('particles-container');
  if (container) {
    container.appendChild(particle);
  }

  // Remover partícula após a animação
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

// Criar partículas continuamente
setInterval(createParticle, 300);

// Criar algumas partículas iniciais
for (let i = 0; i < 30; i++) {
  setTimeout(createParticle, i * 100);
}

// Função para atualizar o relógio
function updateClock() {
  const now = new Date();

  // Formatar hora
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Formatar data
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  // Atualizar elementos
  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Atualizar relógio imediatamente e a cada segundo
updateClock();
setInterval(updateClock, 1000);

// Easter egg: Submarino aparece a cada 30 minutos
function showSubmarineEasterEgg() {
  const submarine = document.getElementById('submarine');
  if (submarine) {
    submarine.classList.add('active');

    // Ocultar após a animação terminar (25 segundos)
    setTimeout(() => {
      submarine.classList.remove('active');
    }, 25000);
  }
}

// Mostrar submarino ao carregar a página
showSubmarineEasterEgg();

// Mostrar submarino a cada 30 minutos (1.800.000 ms)
setInterval(showSubmarineEasterEgg, 30 * 60 * 1000);
