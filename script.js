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

// Criar bolhas continuamente
setInterval(createBubble, 500);

// Criar algumas bolhas iniciais
for (let i = 0; i < 10; i++) {
  setTimeout(createBubble, i * 200);
}
