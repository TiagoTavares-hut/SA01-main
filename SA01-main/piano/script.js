// Seleciona todas as teclas do piano usando a classe 'key'
const keys = document.querySelectorAll('.key');

// Função que toca a nota correspondente ao nome da nota fornecido
function playNote(note) {
  // Obtém o elemento de áudio correspondente à nota
  const audio = document.getElementById(note);
  
  // Verifica se o elemento de áudio existe
  if (audio) {
    // Reinicia o som se ele já estiver tocando, para que a nota seja tocada do início
    audio.currentTime = 0; 
    audio.play(); // Toca o áudio da nota

    // Adiciona um efeito visual à tecla correspondente quando é pressionada
    const key = document.querySelector(`.key[data-note="${note}"]`);
    key.classList.add('playing'); // Adiciona a classe 'playing' para aplicar o efeito visual

    // Remove o efeito visual após 200 milissegundos
    setTimeout(() => {
      key.classList.remove('playing'); // Remove a classe 'playing' para restaurar a aparência original da tecla
    }, 200);
  }
}

// Adiciona um evento de clique a cada tecla do piano
keys.forEach(key => {
  key.addEventListener('click', () => {
    // Obtém a nota correspondente à tecla clicada a partir do atributo 'data-note'
    const note = key.dataset.note;
    playNote(note); // Chama a função playNote para tocar a nota
  });
});

// Adiciona um evento de teclado para detectar quando uma tecla do teclado é pressionada
document.addEventListener('keydown', event => {
  // Mapeia as teclas do teclado para as notas correspondentes
  const keyMap = {
    'a': 'C', // Tecla 'a' toca a nota C
    's': 'D', // Tecla 's' toca a nota D
    'd': 'E', // Tecla 'd' toca a nota E
    'f': 'F', // Tecla 'f' toca a nota F
    'g': 'G', // Tecla 'g' toca a nota G
    'h': 'A', // Tecla 'h' toca a nota A
    'j': 'B'  // Tecla 'j' toca a nota B
  };

  // Obtém a nota correspondente à tecla pressionada
  const note = keyMap[event.key];
  
  // Se a nota existir no mapeamento, toca a nota
  if (note) {
    playNote(note); // Chama a função playNote para tocar a nota correspondente
  }
});