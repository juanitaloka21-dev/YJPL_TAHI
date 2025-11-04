// Navegación entre secciones
function mostrar(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}

// Frases flotantes
const frases = [
  "Que mujercita tan perfecta ",
  "Woo su sonrisa tan divina",
  "¿Por que se me enojara tanto si yo soy solo amor?",
  "va a ser la mama de mis 10 hijos y los va a parir ella ",
  "carajo es muy hermosaaaaa pero que humor tan malo ",
  "joder la amo mucho deberia de estar siempre conmigo"
];

const contenedorFrases = document.getElementById('frasesFlotantes');
frases.forEach(texto => {
  const p = document.createElement('p');
  p.textContent = texto;
  contenedorFrases.appendChild(p);
});

// Slider de amor
const slider = document.getElementById('sliderAmor');
const valorAmor = document.getElementById('valorAmor');
slider.addEventListener('input', () => {
  valorAmor.textContent = slider.value + '%';
});

// Opción seleccionada
let opcionElegida = '';
function seleccionarOpcion(btn) {
  document.querySelectorAll('.opciones button').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  opcionElegida = btn.textContent;
}

// Mostrar resumen
function mostrarResumen() {
  const palabra = document.getElementById('palabraAmor').value.trim();
  if (!palabra) {
    alert('Escribe una palabra antes de continuar ');
    return;
  }

  document.getElementById('resumenAmor').textContent = `te amo un: ${slider.value}%`;
  document.getElementById('resumenOpcion').textContent = `lo que mas te gusta son: ${opcionElegida}`;
  document.getElementById('resumenPalabra').textContent = `te describo: ${palabra}`;

  mostrar('resumen');
}

// Explosión final
function mostrarExplosion() {
  mostrar('explosion');
  const texto = document.getElementById('explosionText');
  const tahi = document.getElementById('tahi');

  texto.style.animation = 'boom 3s ease-in-out forwards';
  tahi.style.animation = 'aparecer 2s ease-in-out 3s forwards';
}
// Función para mostrar el efecto final con corazones
function mostrarExplosion() {
  mostrar('explosion');
  const texto = document.getElementById('explosionText');
  const tahi = document.getElementById('tahi');

  texto.style.animation = 'boom 3s ease-in-out forwards';
  tahi.style.animation = 'aparecer 2s ease-in-out 3s forwards';

  // Lluvia de corazones sin fondo ❤️‍🔥
  for (let i = 0; i < 80; i++) {
    crearCorazon();
  }
}

// Crear corazones flotantes sin fondo
function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.innerHTML = '♡';
  corazon.style.position = 'fixed';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.top = '100vh';
  corazon.style.fontSize = Math.random() * 20 + 15 + 'px';
  corazon.style.color = '#b78a5f';
  corazon.style.opacity = Math.random();
  corazon.style.animation = `flotar ${3 + Math.random() * 5}s ease-in infinite`;
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 8000);
}

// Animación de flotación
const estilo = document.createElement('style');
estilo.innerHTML = `
@keyframes flotar {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(estilo);
