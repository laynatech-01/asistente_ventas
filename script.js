// Función original para mostrar/ocultar chat
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
    } else {
        chatWindow.style.display = 'none';
    }
}

// Nueva función para cargar las URLs de las inmobiliarias
function cargarSitio(url) {
    const iframe = document.getElementById('central-frame');
    iframe.src = url;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema DRAD Ingeniería 2026 Activo");
});