// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At The Time<br>(Naquele Momento)", time: 15 },
  { text: "The Whisper Of Birds<br>(O Sussurro dos Pássaros)", time: 18 },
  { text: "Lonely Before The Sun Cried<br>(Sozinho Antes Que o Sol Chorasse)", time: 27 },
  { text: "Fell From The Sky<br>(Caiu do Céu)", time: 32 },
  { text: "Like Water Drops<br>(Como Gotas de Água)", time: 33 },
  { text: "Where I'm Now? I Don't Know Why<br>(Onde Estou Agora? Não Sei Por Que)", time: 41 },
  { text: "Nice Butterflies In My Hands<br>(Lindas Borboletas nas Minhas Mãos)", time: 47 },
  { text: "Too Much Light For Twilight<br>(Muita Luz para o Crepúsculo)", time: 54 },
  { text: "In The Mood For The Flowers Love<br>(No Clima para o Amor das Flores)", time: 59 },
  { text: "That Vision<br>(Aquela Visão)", time: 67 },
  { text: "Really Strong, Blew My Mind<br>(Realmente Forte, Me Deixou Surpreso)", time: 72 },
  { text: "Silence Let Me See What It Was<br>(O Silêncio Me Deixou Ver o Que Era)", time: 78 },
  { text: "I Only Want To Live In Clouds<br>(Eu Só Quero Viver nas Nuvens)", time: 83 },
  { text: "Where I'm Now? I Don't Know Why<br>(Onde Estou Agora? Não Sei Por Que)", time: 91 },
  { text: "Nice Butterflies In My Hands<br>(Lindas Borboletas nas Minhas Mãos)", time: 97 },
  { text: "Too Much Light For Twilight<br>(Muita Luz para o Crepúsculo)", time: 104 },
  { text: "In The Mood For The Flowers Love<br>(No Clima para o Amor das Flores)", time: 108 },
  { text: "At The Time<br>(Naquele Momento)", time: 144 },
  { text: "The Whisper Of Birds<br>(O Sussurro dos Pássaros)", time: 148 },
  { text: "Lonely Before The Sun Cried<br>(Sozinho Antes Que o Sol Chorasse)", time: 153 },
  { text: "Fell From The Sky<br>(Caiu do Céu)", time: 158 },
  { text: "Like Water Drops<br>(Como Gotas de Água)", time: 164 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;

    // Adicionar efeito de brilho (glow) nas letras
    lyrics.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.8)"; // Modifique o raio e a cor conforme necessário
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    lyrics.style.textShadow = "none"; // Remover o efeito de brilho quando não houver texto
  }
}

setInterval(updateLyrics, 1000);

// Aplicar estilos de fuente
lyrics.style.fontFamily = "Sedgwick Ave Display, cursive";
lyrics.style.fontWeight = "400";
lyrics.style.fontStyle = "normal";

// Centralizar as letras
lyrics.style.textAlign = "center";  // Centraliza o texto

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
