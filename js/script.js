function solicitarPresupuesto() {
    alert("Solicitud de presupuesto enviada. Nos pondremos en contacto pronto.");
}

function agendarCita() {
    alert("Por favor, complete el formulario de reservas para agendar su cita.");
}

// Manejo del envío del formulario de reserva
document.getElementById('formReserva').addEventListener('submit', function(event) {
    event.preventDefault();
    enviarWhatsApp();
    mostrarNotificacion("Mensaje enviado. Responderemos a la brevedad.");
});

// Manejo del envío del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Mensaje enviado. Responderemos a la brevedad.");
});

function enviarWhatsApp() {
    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value || 'Nombre no especificado';
    let mensaje = document.getElementById('detalles').value || 'Sin mensaje';
    let fecha = document.getElementById('fecha').value || 'Fecha no especificada';

    // Construir el mensaje
    const texto = `
        Hola, me llamo ${nombre}.
        Especificaciones previas : ${mensaje}.
        Fecha: ${fecha}.
    `;

    // Codificar el texto para URL
    const textoCodificado = encodeURIComponent(texto);

    // Número de WhatsApp (modifica al tuyo)
    const numeroWhatsApp = '5356615201';

    // Construir la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Redirigir al enlace de WhatsApp
    window.open(urlWhatsApp, '_blank');
}
let mensaje;
function mostrarNotificacion(mensaje) {
    // Crear un elemento para la notificación
    const notificacion = document.createElement('div');
    notificacion.innerText = mensaje;
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = '#4CAF50';
    notificacion.style.color = 'white';
    notificacion.style.padding = '10px 20px';
    notificacion.style.borderRadius = '5px';
    notificacion.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    notificacion.style.zIndex = '1000';
    notificacion.style.fontFamily = 'Arial, sans-serif';

    // Agregar al cuerpo del documento
    document.body.appendChild(notificacion);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}
