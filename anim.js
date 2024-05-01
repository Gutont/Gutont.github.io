// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At The Time", time: 15 },
  { text: "The Whisper Of Birds", time: 18 },
  { text: "Lonely Before The Sun Cried", time: 27 },
  { text: "Fell From The Sky", time: 32 },
  { text: "Like Water Drops", time: 33 },
  { text: "Where I'm Now? I Don't Know Why", time: 41 },
  { text: "Nice Butterflies In My Hands", time: 47 },
  { text: "Too Much Light For Twilight", time: 54 },
  { text: "In The Mood For The Flowers Love", time: 59 },
  { text: "That Vision", time: 67 },
  { text: "Really Strong, Blew My Mind", time: 72 },
  { text: "Silence Let Me See What It Was", time: 78 },
  { text: "I Only Want To Live In Clouds", time: 83 },
  { text: "Where I'm Now? I Don't Know Why", time: 91 },
  { text: "Nice Butterflies In My Hands", time: 97 },
  { text: "Too Much Light For Twilight", time: 104 },
  { text: "In The Mood For The Flowers Love", time: 108 },
  { text: "At The Time", time: 144 },
  { text: "The Whisper Of Birds", time: 148 },
  { text: "Lonely Before The Sun Cried", time: 153 },
  { text: "Fell From The Sky", time: 158 },
  { text: "Like Water Drops", time: 164 }
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
