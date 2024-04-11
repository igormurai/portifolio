var modoClaro = false; // Suponha que inicialmente o site esteja em modo escuro

function toggleModoClaroEscuro() {
    var icone = document.getElementById('icone');

    if (modoClaro) {
        icone.src = "moon-icon-png.png"; // Caminho da imagem da lua
        icone.alt = "Icone lua";
        modoClaro = false;
    } else {
        icone.src = "sun-icon-png.png"; // Caminho da imagem do sol
        icone.alt = "Icone sol";
        modoClaro = true;
    }
}

function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const relogio = document.getElementById('relogio');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Função para alternar entre modo claro e escuro
function toggleModoClaroEscuro() {
    const body = document.body;
    body.classList.toggle('modo-escuro');

    const botaoLampada = document.getElementById('modo-claro-escuro');
    botaoLampada.classList.toggle('ligado');
}

// Adicione a classe "main-section" em cada seção principal para aplicar a animação
const mainSections = document.querySelectorAll('.main-section');

mainSections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.classList.add('hovered');
    });

    section.addEventListener('mouseout', () => {
        section.classList.remove('hovered');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique a todos os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Usa a função scrollTo para rolar suavemente para a seção alvo
            window.scrollTo({
                top: targetSection.offsetTop - 20, // Ajuste conforme necessário para o posicionamento desejado
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique a todos os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Usa a função scrollTo para rolar suavemente para a seção alvo
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});